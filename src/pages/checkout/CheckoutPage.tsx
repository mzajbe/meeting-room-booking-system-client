import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-responsive-modal";
import { useSelector } from "react-redux";
import {
  useFetchUserByIdQuery,
  useSubmitBookingMutation,
} from "../../redux/api/baseApi"; // Import the booking and user APIs
import "react-responsive-modal/styles.css";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const authUser = useSelector((state) => state.auth.user); // Fetch user ID from Redux
  const location = useLocation();
  const bookingDetails = location.state?.bookingDetails; // Get passed booking details

  console.log(bookingDetails); 
  
  const { data: user, isLoading: userLoading } = useFetchUserByIdQuery(authUser.userId); // Fetch real user data
//   const [submitBooking] = useSubmitBookingMutation();

  const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     if (!bookingDetails) {
//       toast.error("No booking details found!");
//     }
//   }, [bookingDetails]);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Submit the booking to the server
    //   const response = await submitBooking(bookingDetails).unwrap();
      setShowModal(true); // Show the confirmation modal on success
      toast.success("Booking confirmed!");
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed. Please try again.");
    }
  };

  if (userLoading) {
    return <p>Loading user details...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
        {/* <h2 className="text-2xl font-semibold text-gray-700">Booking Summary</h2>
        {bookingDetails ? (
          <div className="mt-4">
            <p>
              <span className="font-medium">Room:</span> {bookingDetails.roomName}
            </p>
            <p>
              <span className="font-medium">Date:</span> {bookingDetails.date}
            </p>
            <p>
              <span className="font-medium">Time:</span> {bookingDetails.time}
            </p>
            <p>
              <span className="font-medium">Cost:</span> ${bookingDetails.cost}
            </p>
          </div>
        ) : (
          <p>No booking details available.</p>
        )} */}

        <h3 className="text-xl font-semibold mt-6">User Information</h3>
        <div className="mt-4">
          <p>
            <span className="font-medium">Name:</span> {user?.data?.name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {user?.data?.email}
          </p>
          <p>
            <span className="font-medium">Phone:</span> {user?.data?.phone}
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6">Payment Information</h3>
        <form onSubmit={handlePaymentSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            //   required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expiration Date
              </label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                // required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                placeholder="123"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                // required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-customAccent1 text-white rounded-md font-semibold hover:bg-customAccent2 transition duration-200"
          >
            Confirm Booking and Pay 
          </button>
        </form>
      </div>

      {/* Confirmation Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)} center>
        <h2 className="text-xl font-semibold">Booking Confirmed!</h2>
        <p className="mt-4">Thank you, {user?.data?.name}!</p>
        <p className="mt-2">
          Your booking for {bookingDetails?.roomName} on {bookingDetails?.date} at{" "}
          {bookingDetails?.time} has been confirmed.
        </p>
        <p className="mt-2">
          A confirmation email has been sent to {user?.data?.email}.
        </p>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
