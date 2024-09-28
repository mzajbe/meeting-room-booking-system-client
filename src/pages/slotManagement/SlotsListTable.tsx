import { useState } from "react";
import {
  useDeleteSlotMutation,
  useFetchSlotsQuery,
  useUpdateSlotMutation,
} from "../../redux/api/baseApi";
import { toast } from "react-toastify";

type TSlot = {
  _id: string;
  room: {
    name: string;
    roomNo: string;
  };
  date: string;
  startTime: string;
  endTime: string;
}



const SlotsListTable = () => {
  const { data: slots, isLoading, error } = useFetchSlotsQuery({});
  const [deleteSlot] = useDeleteSlotMutation();
  const [updateSlot] = useUpdateSlotMutation();


  const [editingSlot, setEditingSlot] = useState<TSlot | null>(null); // Track the slot being edited
  const [updatedDate, setUpdatedDate] = useState("");
  const [updatedStartTime, setUpdatedStartTime] = useState("");
  const [updatedEndTime, setUpdatedEndTime] = useState("");

  

  const handleDelete = async (id:string) => {
    try {
      await deleteSlot(id);
      toast.success('slot deleted successfully');
    } catch (error) {
      console.error("Error deleting slot:", error);
    }
  };

  // const handleUpdate = async (id, updatedSlotData) => {
  //   try {
  //     await updateSlot({ id, ...updatedSlotData });
  //     // Optionally refetch or show success message
  //   } catch (error) {
  //     console.error("Error updating slot:", error);
  //   }
  // };

  const handleUpdateClick = (slot:TSlot) => {
    setEditingSlot(slot); 
    setUpdatedDate(slot.date);
    setUpdatedStartTime(slot.startTime);
    setUpdatedEndTime(slot.endTime);
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingSlot) { // Ensure editingSlot is not null
      try {
        await updateSlot({
          id: editingSlot._id, // Safely access _id
          date: updatedDate,
          startTime: updatedStartTime,
          endTime: updatedEndTime,
        }).unwrap();
        toast.success("Slot updated successfully");
        setEditingSlot(null); // Reset editing state
      } catch (error) {
        console.error("Error updating slot:", error);
        toast.error("Failed to update slot");
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading slots</div>;

  return (
    <div className="overflow-x-auto mt-4">
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border-b py-2 px-4 text-left text-gray-600">Room Name</th>
          <th className="border-b py-2 px-4 text-left text-gray-600">Room No.</th>
          <th className="border-b py-2 px-4 text-left text-gray-600">Date</th>
          <th className="border-b py-2 px-4 text-left text-gray-600">Start Time</th>
          <th className="border-b py-2 px-4 text-left text-gray-600">End Time</th>
          <th className="border-b py-2 px-4 text-left text-gray-600">Actions</th>
        </tr>
      </thead>
      <tbody>
        {slots?.data.map((slot:TSlot) => (
          <tr key={slot._id} className="border-b hover:bg-gray-50">
            <td className="py-2 px-4">{slot.room.name}</td>
            <td className="py-2 px-4">{slot.room.roomNo}</td>
            <td className="py-2 px-4">{slot.date}</td>
            <td className="py-2 px-4">{slot.startTime}</td>
            <td className="py-2 px-4">{slot.endTime}</td>
            <td className="py-2 px-4">
              <button
                className="mr-2 bg-customAccent1 text-white py-1 px-2 rounded hover:bg-customAccent2 transition duration-200"
                onClick={() => handleUpdateClick(slot)}
              >
                Update
              </button>
              <button
                className="mr-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-00 transition duration-200"
                onClick={() => handleDelete(slot._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Update Slot Modal */}
    {editingSlot && (
      <div className="modal fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Update Slot</h2>
          <form onSubmit={handleUpdateSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
              <input
                type="date"
                value={updatedDate}
                onChange={(e) => setUpdatedDate(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Start Time</label>
              <input
                type="time"
                value={updatedStartTime}
                onChange={(e) => setUpdatedStartTime(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">End Time</label>
              <input
                type="time"
                value={updatedEndTime}
                onChange={(e) => setUpdatedEndTime(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-customAccent1 hover:bg-customAccent2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setEditingSlot(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    )}
  </div>
  );
};

export default SlotsListTable;
