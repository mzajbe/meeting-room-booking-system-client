import { useEffect, useState } from "react";
import { useCreateRoomMutation, useUpdateRoomMutation } from "../../redux/api/baseApi";

const RoomForm = ({ editingRoom, setEditingRoom }) => {
  const [formData, setFormData] = useState({
    name: '',
    roomNo: '',
    floorNo: '',
    capacity: '',
    pricePerSlot: '',
    description: '',
    image: '',
    amenities: '',
  });

  const [createRoom] = useCreateRoomMutation();
  const [updateRoom] = useUpdateRoomMutation();

  useEffect(() => {
    if (editingRoom) {
      setFormData(editingRoom);
    } else {
      setFormData({
        name: '',
        roomNo: '',
        floorNo: '',
        capacity: '',
        pricePerSlot: '',
        description: '',
        image: '',
        amenities: '',
      });
    }
  }, [editingRoom]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure amenities is treated as a string before splitting
  // const amenitiesString = typeof formData.amenities === 'string' 
  // ? formData.amenities 
  // : formData.amenities?.join(', ');

   // Ensure amenities is treated as a string before splitting
   const amenitiesString = formData.amenities
   ? formData.amenities.toString() // Ensure it's a string, even if empty
   : '';

    console.log(formData.amenities);
    
    
    const roomData = {
      ...formData,
      floorNo: Number(formData.floorNo),
      capacity: Number(formData.capacity),
      pricePerSlot: Number(formData.pricePerSlot),
      image: formData.image, // Assuming a single image input for now
      amenities: amenitiesString.split(',').map((amenity) => amenity.trim()), // Split amenities into an array
      isDeleted: false, // Default to false for new rooms
    };

    console.log("Submitting Room Data:", roomData); // Log the exact room data being sent

    try {
      if (editingRoom) {

        console.log("Editing Room:", editingRoom); // Log to check editingRoom
      console.log("Editing Room ID:", editingRoom._id); // Log to check the ID



      if (!editingRoom._id) {
        throw new Error("Room ID is missing for update");
      }

        await updateRoom({ id: editingRoom._id, ...roomData }).unwrap();
        setEditingRoom(null); // Reset form
      } else {
        await createRoom(roomData).unwrap();
      }
      setFormData({
        name: '',
        roomNo: '',
        floorNo: '',
        capacity: '',
        pricePerSlot: '',
        description: '',
        image: '',
        amenities: '',
      });
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl mb-4">{editingRoom ? 'Update Room' : 'Create Room'}</h2>
      <div className="mb-2">
        <label>Room Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label>Room No.</label>
        <input
          type="text"
          value={formData.roomNo}
          onChange={(e) => setFormData({ ...formData, roomNo: e.target.value })}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label>Floor No.</label>
        <input
          type="text"
          value={formData.floorNo}
          onChange={(e) => setFormData({ ...formData, floorNo: e.target.value })}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label>Capacity</label>
        <input
          type="number"
          value={formData.capacity}
          onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label>Price Per Slot</label>
        <input
          type="number"
          value={formData.pricePerSlot}
          onChange={(e) => setFormData({ ...formData, pricePerSlot: e.target.value })}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label>Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label>Image URL</label>
        <input
          type="text"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label>Amenities (comma-separated)</label>
        <input
          type="text"
          value={formData.amenities}
          onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
        {editingRoom ? 'Update Room' : 'Create Room'}
      </button>
    </form>
  );
};

export default RoomForm;
