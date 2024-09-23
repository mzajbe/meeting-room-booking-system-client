import { Link } from "react-router-dom";

const FeaturedRoomsCard = ({ room }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{room.name}</h2>
        <p className="text-gray-600">Capacity: {room.capacity}</p>
        <p className="text-gray-600">Price Per Slot: ${room.pricePerSlot}</p>

        <Link to="/rooms">
          <button className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-2 px-4 rounded focus:outline-none">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedRoomsCard;
