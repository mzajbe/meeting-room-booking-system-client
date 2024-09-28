/* eslint-disable @typescript-eslint/no-explicit-any */
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


type TBookingFormProps = {
  roomId: string;
}


type TSlot ={
  _id: string;
  startTime: string;
  endTime: string;
}

// Define a type for the state being passed to the checkout page
// type TBookingDetails = {
//   roomName: string;
//   date: string;
//   time: string;
//   cost: string;
// }


const BookingForm = ({ roomId  }:TBookingFormProps) => {
  const authUser = useSelector((state:any) => state.auth.user); // Get the user from auth (with userId)
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [proceedToCheckout, setProceedToCheckout] = useState(false);

  const navigate = useNavigate(); 

 
  const { data: user, isLoading: userLoading } = useFetchUserByIdQuery(
    authUser.userId
  );

  
  

  const {
    data: availableSlots,
    refetch,
    isFetching,
  } = useFetchAvailableSlotsQuery(selectedDate, {
    skip: !selectedDate, 
  });

  const [submitBooking] = useSubmitBookingMutation();

  console.log(availableSlots);
  

  
  useEffect(() => {
    if (selectedDate) {
      refetch();
    }
  }, [selectedDate, refetch]);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const bookingData = {
      date: selectedDate,
      slots: [selectedSlot], 
      room: roomId, 
      user: authUser.userId,
    };

    try {
      await submitBooking(bookingData).unwrap();
      toast.success("Your room booked! For confirm booking please Payment.");
      setProceedToCheckout(true);
    } catch (error) {
      console.error("Booking error:", error); 
      toast.error("Error creating booking");
    }
  };


 
  

  const handleGoForPayment = () => {
    const bookingDetails = {
      roomName: "Your", 
      date: selectedDate,
      time: availableSlots?.data.find((slot:TSlot) => slot._id === selectedSlot)?.startTime + 
            " - " + 
            availableSlots?.data.find((slot:TSlot) => slot._id === selectedSlot)?.endTime,
      cost: "100", 
    };

    // Redirect to checkout page and pass booking details
    navigate("/checkout", { state: { bookingDetails } });
  };

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
                {availableSlots?.data.map((slot:TSlot) => (
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
