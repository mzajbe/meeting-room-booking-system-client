/* eslint-disable @typescript-eslint/no-unused-vars */
import { toast } from "react-toastify";
import { useApproveBookingMutation, useDeleteBookingMutation, useFetchBookingsQuery, useRejectBookingMutation } from "../../redux/api/baseApi";


const BookingsAction = () => {

    const { data: bookings, isLoading } = useFetchBookingsQuery({});
  const [approveBooking] = useApproveBookingMutation();
  const [rejectBooking] = useRejectBookingMutation();
  const [deleteBooking] = useDeleteBookingMutation();


  const handleApprove = async (id: string) => {
    try {
      await approveBooking(id).unwrap();
      toast.success('Booking Approved');
    } catch (error) {
      toast.error('Error Approving Booking');
    }
  };

  const handleReject = async (id: string) => {
    try {
      await rejectBooking(id).unwrap();
      toast.success('Booking Rejected');
    } catch (error) {
      toast.error('Error Rejecting Booking');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await deleteBooking(id).unwrap();
        toast.success('Booking Deleted');
      } catch (error) {
        toast.error('Error Deleting Booking');
      }
    }
  };

  if (isLoading) return <p>Loading...</p>;

 
  // Filter bookings where isDeleted is false
  const filteredBookings = bookings?.data.filter((booking) => !booking.isDeleted);
  

    return (
      <div className="booking-management">
      <h2 className="text-2xl font-bold mb-4">Booking Management</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2">Room Name</th>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">Date & Time</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking._id} className="border-t">
              <td className="px-4 py-2">{booking.room.name}</td>
              <td className="px-4 py-2">{booking.user.name}</td>
              <td className="px-4 py-2">{booking.slots[0].date}</td>
              <td className="px-4 py-2">
                {booking.slots[0].startTime} - {booking.slots[0].endTime}
              </td>
              <td className="px-4 py-2">{booking.isConfirmed ? "Confirmed" : "Unconfirmed"}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => handleApprove(booking._id)}
                  className="bg-green-500 text-white px-4 py-1 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(booking._id)}
                  className="bg-yellow-500 text-white px-4 py-1 rounded"
                >
                  Reject
                </button>
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default BookingsAction;