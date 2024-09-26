import BookingForm from "./BookingForm";

const RoomDetailsPage = ({ room }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Room Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        {room.name}
      </h1>

      {/* Room Details */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        {/* Room Image (Placeholder or actual image if available) */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={room.imageUrl || "https://via.placeholder.com/400"}
            alt={room.name}
            className="rounded-lg shadow-md object-cover h-64 w-full"
          />
        </div>

        {/* Room Info */}
        <div className="w-full md:w-1/2 px-4">
          <div className="text-lg mb-4">
            <p className="mb-2">
              <strong className="font-semibold text-gray-700">Capacity:</strong>{" "}
              {room.capacity} people
            </p>
            <p className="mb-2">
              <strong className="font-semibold text-gray-700">
                Price per slot:
              </strong>{" "}
              ${room.pricePerSlot}
            </p>
            <p className="mb-2">
              <strong className="font-semibold text-gray-700">Description:</strong>{" "}
              {room.description || "No description available for this room."}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300" />

      {/* Booking Form */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Book this Room
        </h2>
        <BookingForm roomId={room._id} />
      </div>
    </div>
  );
};

export default RoomDetailsPage;
