import { useState } from "react";
import { useDeleteRoomMutation, useFetchRoomsQuery, useUpdateRoomMutation } from "../../redux/api/baseApi";
import RoomForm from "./RoomForm";

const RoomList = () => {
  // Fetch rooms data and handle loading
  const { data, isLoading, refetch } = useFetchRoomsQuery({});
  const rooms = data?.data?.filter(room => !room.isDeleted) || []; // Filter out soft-deleted rooms
  const [deleteRoom] = useDeleteRoomMutation();
  const [updateRoom] = useUpdateRoomMutation();
  const [editingRoom, setEditingRoom] = useState(null);

  if (isLoading) return <div>Loading...</div>;

  const handleDelete = async (_id: string) => {
    console.log("Deleting room with ID:", _id); // Log the _id to check  
    if (confirm('Are you sure you want to delete this room?')) {  
      try {  
        // Perform a soft delete by updating the room's isDeleted field to true  
        await updateRoom({ id: _id, isDeleted: true }).unwrap();  // Ensure proper payload format and unwrap mutation
        refetch(); // Manually refetch the rooms to update the UI  
      } catch (error) {  
        console.error('Failed to delete room:', error);  
      }  
    }  
  };

  const handleUpdate = async (roomData) => {
    try {
      await updateRoom(roomData);  // Wait for the updateRoom mutation to finish
      setEditingRoom(null); // Reset form after update
      refetch(); // Manually refetch the rooms to update the UI
    } catch (error) {
      console.error('Failed to update room:', error);
    }
  };

  return (
    <div>
      {/* Pass onUpdate prop to RoomForm */}
      <RoomForm editingRoom={editingRoom} setEditingRoom={setEditingRoom} onUpdate={handleUpdate} />

      <table className="min-w-full mt-4 bg-white">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Room No.</th>
            <th>Floor No.</th>
            <th>Capacity</th>
            <th>Price Per Slot</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {rooms.map((room) => {  
  console.log("Room:", room); // Check the room values  
  return (  
    <tr key={room.id} className="border-b">  
      <td>{room.name}</td>  
      <td>{room.roomNo}</td>  
      <td>{room.floorNo}</td>  
      <td>{room.capacity}</td>  
      <td>{room.pricePerSlot}</td>  
      <td>  
        <button  
          className="mr-2 text-blue-500"  
          onClick={() => setEditingRoom(room)} // Set the room to edit in the form  
        >  
          Update  
        </button>  
        <button  
          className="text-red-500"  
          onClick={() => handleDelete(room._id)} // Trigger soft delete  
        >  
          Delete  
        </button>  
      </td>  
    </tr>  
  );  
})}  
        </tbody>
      </table>
    </div>
  );
};

export default RoomList;
