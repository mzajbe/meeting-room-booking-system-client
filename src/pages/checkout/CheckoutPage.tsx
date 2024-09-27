import { useState } from "react";
import Modal from "react-responsive-modal";


const CheckoutPage = () => {

    const [showModal, setShowModal] = useState(false);

  const bookingDetails = {
    roomName: "Conference Room A",
    date: "2024-09-28",
    time: "10:00 AM - 12:00 PM",
    cost: 50,
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true); // Show the confirmation modal upon form submission.
  };
    return (
        <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Booking Summary</h2>
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
  
          <h3 className="text-xl font-semibold mt-6">User Information</h3>
          <div className="mt-4">
            <p>
              <span className="font-medium">Name:</span> {bookingDetails.user.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {bookingDetails.user.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {bookingDetails.user.phone}
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
                required
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
                  required
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
                  required
                />
              </div>
            </div>
  
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Confirm Booking and Pay ${bookingDetails.cost}
            </button>
          </form>
        </div>
  
        {/* Confirmation Modal */}
        <Modal open={showModal} onClose={() => setShowModal(false)} center>
          <h2 className="text-xl font-semibold">Booking Confirmed!</h2>
          <p className="mt-4">Thank you, {bookingDetails.user.name}!</p>
          <p className="mt-2">
            Your booking for {bookingDetails.roomName} on {bookingDetails.date} at{" "}
            {bookingDetails.time} has been confirmed.
          </p>
          <p className="mt-2">A confirmation email has been sent to {bookingDetails.user.email}.</p>
        </Modal>
      </div>
    );
};

export default CheckoutPage;