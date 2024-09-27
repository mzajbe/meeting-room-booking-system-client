import { useState } from "react";  
import { useDeleteRoomMutation, useFetchRoomsQuery, useUpdateRoomMutation } from "../../redux/api/baseApi";  
import RoomForm from "./RoomForm";  

const RoomList = () => {  
  const { data, isLoading, refetch } = useFetchRoomsQuery({});  
  const rooms = data?.data?.filter(room => !room.isDeleted) || [];  
  const [updateRoom] = useUpdateRoomMutation();  
  const [editingRoom, setEditingRoom] = useState(null);  

  const [localRooms, setLocalRooms] = useState(rooms); 


  if (isLoading) return <div className="text-center">Loading...</div>;  

  const handleDelete = async (_id) => {  
    if (confirm('Are you sure you want to delete this room?')) {  
      try {  
        await updateRoom({ id: _id, isDeleted: true }).unwrap();  
        // refetch(); 


         // Update local room list without refetching
        setLocalRooms(localRooms.filter(room => room._id !== _id));




      } catch (error) {  
        console.error('Failed to delete room:', error);  
      }  
    }  
  };  

  const handleUpdate = async (roomData) => {  
    const updatedRoom = { ...editingRoom, ...roomData }; // Merge existing room data with updated data  
    const updatedRooms = rooms.map(room => room._id === updatedRoom._id ? updatedRoom : room); // Update local rooms state  

    try {  
      await updateRoom(roomData).unwrap();  

      setLocalRooms(localRooms.map(room => room._id === updatedRoom._id ? updatedRoom : room));


      setEditingRoom(null);  
      // refetch(); // Optionally call refetch to ensure data is synced with the server  
    } catch (error) {  
      console.error('Failed to update room:', error);  
    }  
  };  

  return (  
    <div className="container mx-auto p-4">  
      <RoomForm editingRoom={editingRoom} setEditingRoom={setEditingRoom} onUpdate={handleUpdate} />  
      <h1 className="text-xl font-bold mb-4">Room List</h1>  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">  
        {rooms.map((room) => (  
          <div key={room._id} className="bg-white border rounded shadow p-4 hover:shadow-lg transition duration-200">  
            <h2 className="text-lg font-semibold">{room.name}</h2>  
            <p><strong>Room No.:</strong> {room.roomNo}</p>  
            <p><strong>Floor No.:</strong> {room.floorNo}</p>  
            <p><strong>Capacity:</strong> {room.capacity}</p>  
            <p><strong>Price Per Slot:</strong> ${room.pricePerSlot}</p>  
            <div className="mt-2">  
              <button  
                className="mr-2 bg-customAccent1 text-white py-1 px-2 rounded hover:bg-customAccent2 transition duration-200"  
                onClick={() => setEditingRoom(room)}  
              >  
                Edit  
              </button>  
              <button  
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200"  
                onClick={() => handleDelete(room._id)}  
              >  
                Delete  
              </button>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default RoomList;