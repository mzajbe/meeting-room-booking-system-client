import { useParams } from "react-router-dom";
import { useFetchRoomsQuery } from "../../redux/api/baseApi";
// import { useDispatch } from "react-redux";



const RoomDetails = () => {
    const {id} = useParams<{id:string}>();
    const {data,isLoading} = useFetchRoomsQuery({});
    // const dispatch = useDispatch();

    if(isLoading){
        return <p>Loading...</p>
    }

    const rooms = data?.data;

    const room = rooms.find((room)=>room._id === id);

    console.log(room);
    

    if (!room) {
        return <p>room not found.</p>;
      }

    return (
        <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <img
            className="w-full h-auto object-cover rounded-lg mb-4"
            src={room.image}
            alt={room.name}
          />
          <p className="text-gray-700">{room.description}</p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h1 className="text-5xl font-bold mb-2">{room.name}</h1>
            <div className=" mb-2">
              <p className="text-gray-600 mr-2">Room capacity: {room.capacity} </p>
              <p className="text-gray-600 mr-2">Room No: {room.roomNo} </p>
              <p className="text-gray-600 mr-2">Floor No: {room.floorNo} </p>
              
              
            </div>
            <div>
            <p className="text-gray-600 mr-2">Price per slot {room.pricePerSlot} </p>
            </div>

            <div>
            <p className="text-gray-600 mr-2">amenities {room.amenities} </p>
            </div>
           
          </div>

          <button
            onClick={() => handleAddToCart(product)}
            className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-3 px-6 rounded-full w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    );
};

export default RoomDetails;