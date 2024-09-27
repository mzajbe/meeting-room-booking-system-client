import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import {
  useFetchAvailableSlotsQuery,
  useSubmitBookingMutation,
  useFetchUserByIdQuery,
} from "../../redux/api/baseApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ roomId }) => {
  const authUser = useSelector((state) => state.auth.user); // Get the user from auth (with userId)
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [proceedToCheckout, setProceedToCheckout] = useState(false); // State to manage checkout button

  const navigate = useNavigate(); // Use navigate hook for redirect

  // Fetch full user details from backend using userId from auth
  const { data: user, isLoading: userLoading } = useFetchUserByIdQuery(
    authUser.userId
  );

  
  

  const {
    data: availableSlots,
    refetch,
    isFetching,
  } = useFetchAvailableSlotsQuery(selectedDate, {
    skip: !selectedDate, // Skip query if date isn't selected
  });

  const [submitBooking] = useSubmitBookingMutation();

  console.log(availableSlots);
  

  // Fetch available slots when a new date is selected
  useEffect(() => {
    if (selectedDate) {
      refetch();
    }
  }, [selectedDate, refetch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      date: selectedDate,
      slots: [selectedSlot], // Pass selected slot ID
      room: roomId, // Room ID passed as a prop
      user: authUser.userId, // Pass the logged-in user's ID from auth
    };

    try {
      await submitBooking(bookingData).unwrap();
      toast.success("Your room booked! For confirm booking please Payment.");
      setProceedToCheckout(true); // Enable the "Go for Payment" button
    } catch (error) {
      console.error("Booking error:", error); // Log the error for debugging
      toast.error("Error creating booking");
    }
  };


 
  

  const handleGoForPayment = () => {
    // Construct bookingDetails from the form data
    const bookingDetails = {
      roomName: "Your", // You can get the room name dynamically if available
      date: selectedDate,
      time: availableSlots?.data.find((slot) => slot._id === selectedSlot)?.startTime + 
            " - " + 
            availableSlots?.data.find((slot) => slot._id === selectedSlot)?.endTime,
      cost: "100", // Replace this with the actual cost if you have it
    };

    // Redirect to checkout page and pass booking details
    navigate("/checkout", { state: { bookingDetails } });
  };

  // Handle loading state for user details
  if (userLoading) {
    return <p>Loading user details...</p>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Book This Room
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Date Selection */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Select Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Available Slots */}
        {selectedDate && (
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Available Time Slots
            </label>
            {isFetching ? (
              <p className="text-sm text-gray-600">Loading slots...</p>
            ) : availableSlots?.data.length > 0 ? (
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Time Slot</option>
                {availableSlots?.data.map((slot) => (
                  <option key={slot._id} value={slot._id}>
                    {`${slot.startTime} - ${slot.endTime}`}
                  </option>
                ))}
              </select>
            ) : (
              <p className="text-sm text-red-400">
                No available slots for the selected date.
              </p>
            )}
          </div>
        )}

        {/* Pre-filled User Information */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            value={user?.data.name || ""}
            disabled
            className="w-full p-3 border border-gray-300 rounded bg-gray-100"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            value={user?.data.email || ""}
            disabled
            className="w-full p-3 border border-gray-300 rounded bg-gray-100"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            value={user?.data.phone || ""}
            disabled
            className="w-full p-3 border border-gray-300 rounded bg-gray-100"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Your Address
          </label>
          <input
            type="text"
            value={user?.data.address || ""}
            disabled
            className="w-full p-3 border border-gray-300 rounded bg-gray-100"
          />
        </div>

        {/* Conditional Rendering: Proceed to Checkout or Go for Payment */}
        {!proceedToCheckout ? (
          <button
            type="submit"
            className="w-full bg-customAccent2 text-white font-semibold px-4 py-3 rounded hover:bg-customAccent1 transition duration-200"
          >
            Proceed to Checkout
          </button>
        ) : (
          <button
            type="button"
            onClick={handleGoForPayment}
            className="w-full bg-green-500 text-white font-semibold px-4 py-3 rounded hover:bg-green-600 transition duration-200"
          >
            Go for Payment
          </button>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
