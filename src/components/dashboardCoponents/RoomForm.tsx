import { useEffect, useState } from "react";
import {
  useCreateRoomMutation,
  useUpdateRoomMutation,
} from "../../redux/api/baseApi";
import { TRoom } from "../../types";



type TRoomFormProps = {
  editingRoom:TRoom | null,
  setEditingRoom:React.Dispatch<React.SetStateAction<TRoom | null>>;
}

const RoomForm: React.FC<TRoomFormProps> = ({
  editingRoom,
  setEditingRoom,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    roomNo: "",
    floorNo: "",
    capacity: "",
    pricePerSlot: "",
    description: "",
    image: "",
    amenities: "",
  });

  const [createRoom] = useCreateRoomMutation();
  const [updateRoom] = useUpdateRoomMutation();

  useEffect(() => {
    if (editingRoom) {
      setFormData(editingRoom);
    } else {
      setFormData({
        name: "",
        roomNo: "",
        floorNo: "",
        capacity: "",
        pricePerSlot: "",
        description: "",
        image: "",
        amenities: "",
      });
    }
  }, [editingRoom]);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Ensure amenities is treated as a string before splitting
    // const amenitiesString = typeof formData.amenities === 'string'
    // ? formData.amenities
    // : formData.amenities?.join(', ');

    // Ensure amenities is treated as a string before splitting

    const amenitiesString = formData.amenities
      ? formData.amenities.toString() // Ensure it's a string, even if empty
      : "";

    const imagesString = formData.image ? formData.image.toString() : "";

    const roomData = {
      ...formData,
      floorNo: Number(formData.floorNo),
      capacity: Number(formData.capacity),
      pricePerSlot: Number(formData.pricePerSlot),
      image: imagesString.split(",").map((image) => image.trim()),
      amenities: amenitiesString.split(",").map((amenity) => amenity.trim()),
      isDeleted: false, 
    };

    console.log("Submitting Room Data:", roomData); 

    try {
      if (editingRoom) {
        console.log("Editing Room:", editingRoom); 
        console.log("Editing Room ID:", editingRoom._id);

        if (!editingRoom._id) {
          throw new Error("Room ID is missing for update");
        }

        await updateRoom({ id: editingRoom._id, ...roomData }).unwrap();
        setEditingRoom(null); 
      } else {
        await createRoom(roomData).unwrap();
      }
      setFormData({
        name: "",
        roomNo: "",
        floorNo: "",
        capacity: "",
        pricePerSlot: "",
        description: "",
        image: "",
        amenities: "",
      });
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl mb-4">
        {editingRoom ? "Update Room" : "Create Room"}
      </h2>
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
          onChange={(e) =>
            setFormData({ ...formData, floorNo: e.target.value })
          }
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label>Capacity</label>
        <input
          type="number"
          value={formData.capacity}
          onChange={(e) =>
            setFormData({ ...formData, capacity: e.target.value })
          }
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label>Price Per Slot</label>
        <input
          type="number"
          value={formData.pricePerSlot}
          onChange={(e) =>
            setFormData({ ...formData, pricePerSlot: e.target.value })
          }
          className="border rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label>Description</label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
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
          onChange={(e) =>
            setFormData({ ...formData, amenities: e.target.value })
          }
          className="border rounded-md p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-customAccent1 text-white py-2 px-4 rounded-md"
      >
        {editingRoom ? "Update Room" : "Create Room"}
      </button>
    </form>
  );
};

export default RoomForm;
