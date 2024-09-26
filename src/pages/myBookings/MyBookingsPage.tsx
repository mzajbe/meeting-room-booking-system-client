import { useFetchBookingsByUserQuery } from "../../redux/api/baseApi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store"; // Adjust the path based on your project structure

const MyBookingsPage = () => {
  // Use useSelector to get the current user from auth state
  const currentUser = useSelector((state: RootState) => state.auth.user);

  console.log(currentUser);
  

  if (!currentUser?.userId
  ) {
    return <p>No user data found. Please log in.</p>;
  }

  // Pass the current user's ID to the query
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: bookings, error, isLoading } = useFetchBookingsByUserQuery(currentUser.userId
  );

  if (isLoading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading bookings</p>;

  console.log(bookings);
  

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">My Bookings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Room Name</th>
              <th className="py-3 px-6 text-left">Date & Time</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {bookings?.data.map((booking) => (
              <tr key={booking._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <span className="font-medium">{booking.room.name}</span>
                </td>
                <td className="py-3 px-6 text-left">
                  {`${booking.date} [${booking.slots[0].startTime} - ${booking.slots[0].endTime}]`}
                </td>
                <td className="py-3 px-6 text-left">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      booking.isConfirmed === "confirmed"
                        ? "bg-green-200 text-green-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {booking.isConfirmed === "confirmed" ? "Confirmed" : "Unconfirmed"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingsPage;
