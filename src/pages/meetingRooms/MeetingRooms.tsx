import { useState } from "react";
import { useFetchRoomsQuery } from "../../redux/api/baseApi";
import MeetingRoomsCard from "./MeetingRoomsCard";

type TRoom = {
  _id: string;
  name: string;
  description: string;
  capacity: number;
  pricePerSlot: number;
  isDeleted: boolean;
  roomNo: string;  // Changed to string
  floorNo: string; // Assuming floorNo should also be a string
  image: string;
  imageUrl: string;
  amenities: string[];
};

const MeetingRooms = () => {
  const { data: rooms, error, isLoading } = useFetchRoomsQuery({});

  console.log(rooms);

  // Local states for search, filters, and sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCapacity, setFilterCapacity] = useState<number | null>(null);
  const [filterPrice, setFilterPrice] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState("ascending");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  
  const clearFilters = () => {
    setSearchTerm("");
    setFilterCapacity(null);
    setFilterPrice(null);
    setSortOrder("ascending");
  };
  

  const filteredRooms = rooms?.data
  ?.filter((room: TRoom) => !room.isDeleted) // soft deleted room
  ?.filter(
    (room: TRoom) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
  ?.filter((room: TRoom) =>
    filterCapacity ? room.capacity >= filterCapacity : true
  )
  ?.filter((room: TRoom) =>
    filterPrice !== null && filterPrice !== undefined
      ? room.pricePerSlot <= filterPrice
      : true
  )
  ?.sort((a: TRoom, b: TRoom) =>
    sortOrder === "ascending" ? a.pricePerSlot - b.pricePerSlot : b.pricePerSlot - a.pricePerSlot
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
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-customAccent3 w-64"
          />
          <select
            onChange={handleSort}
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-customAccent3"
            value={sortOrder}
          >
            <option value="ascending">Price: Low to High</option>
            <option value="descending">Price: High to Low</option>
          </select>
        </div>

        {/* Capacity and Price Filters */}
        <div className="flex items-center space-x-4">
          <input
            type="number"
            placeholder="Min Capacity"
            value={filterCapacity || ""}
            onChange={(e) => setFilterCapacity(Number(e.target.value))}
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-customAccent3"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={filterPrice || ""}
            onChange={(e) => setFilterPrice(Number(e.target.value))}
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-customAccent3"
          />
          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-orange-400 text-white rounded-lg shadow-sm hover:bg-red-600 transition duration-200"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Room Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredRooms?.map((room: TRoom) => (
          <MeetingRoomsCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default MeetingRooms;
