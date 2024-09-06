import { useFetchRoomsQuery } from "../../../redux/api/baseApi";
import FeaturedRoomsCard from "./FeaturedRoomsCard";


type TRoom = {
  _id:string;
  name:string;
  description:string;
  capacity:number;
  price:number;
}

const FeaturedRooms = () => {
  const { data: rooms, error, isLoading } = useFetchRoomsQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading rooms</div>;

  

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      {/* Room Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {rooms?.data.map((room: TRoom) => (
          
          <FeaturedRoomsCard key={room._id} room={room}></FeaturedRoomsCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
