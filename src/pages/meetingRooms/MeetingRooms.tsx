import { useState } from "react";
import { useFetchRoomsQuery } from "../../redux/api/baseApi";
import MeetingRoomsCard from "./MeetingRoomsCard";

type TRoom = {
    _id:string;
    name:string;
    description:string;
    capacity:number;
    price:number;
}


const MeetingRooms = () => {
  const { data: rooms, error, isLoading } = useFetchRoomsQuery({});

  console.log(rooms);

  // Local states for search, filters, and sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCapacity, setFilterCapacity] = useState(null);
  const [filterPrice, setFilterPrice] = useState(null);
  const [sortOrder, setSortOrder] = useState("ascending");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const filteredRooms = rooms?.data
    ?.filter((room : TRoom) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    ?.filter((room:TRoom) =>
      filterCapacity ? room.capacity >= filterCapacity : true
    )
    ?.filter((room:TRoom) => (filterPrice ? room.price <= filterPrice : true))
    ?.sort((a : TRoom, b :TRoom) =>
      sortOrder === "ascending" ? a.price - b.price : b.price - a.price
    );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading rooms</div>;

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search rooms..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
          />
          <select
            onChange={handleSort}
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="ascending">Price: Low to High</option>
            <option value="descending">Price: High to Low</option>
          </select>
        </div>

        {/* Add Capacity and Price Filter */}
        <div className="flex items-center space-x-4">
          <input
            type="number"
            placeholder="Min Capacity"
            value={filterCapacity || ""}
            // onChange={(e) => setFilterCapacity(Number(e.target.value))}
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={filterPrice || ""}
            // onChange={(e) => setFilterPrice(Number(e.target.value))}
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Room Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredRooms?.map((room:TRoom) => (
          <MeetingRoomsCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default MeetingRooms;
