import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";
import { useFetchRoomQuery } from "../../redux/api/baseApi";

const BookingsPage = () => {
  const { roomId } = useParams(); // Get roomId from the URL
  const { data: room, isLoading } = useFetchRoomQuery(roomId);

  console.log(room);

  if (isLoading) return <div>Loading...</div>;

  if (!room) return <div>Room not found</div>;

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6 text-center">{room.data.name}</h1>

      {/* Room details can be shown here */}
      <div className="mb-6">
        <p className="text-center">
          <strong>Capacity:</strong> {room.data.capacity}
        </p>
        <p className="text-center">
          <strong>Price per slot:</strong> ${room.data.pricePerSlot}
        </p>
      </div>

      {/* Booking form */}
      <BookingForm roomId={room.data._id} />
    </div>
  );
};

export default BookingsPage;
