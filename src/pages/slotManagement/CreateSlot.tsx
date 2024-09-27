import { useState } from "react";
import { useCreateSlotMutation, useFetchRoomsQuery } from "../../redux/api/baseApi";

const CreateSlot = () => {
    const { data: rooms, error, isLoading } = useFetchRoomsQuery({});
    const [roomName, setRoomName] = useState("");  // Now using roomName
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [createSlot, { isLoading: isSubmitting }] = useCreateSlotMutation();  // Handle loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Slot data to be sent to the server
        const slotData = {
            room: roomName,  // Send room name instead of ID
            date,
            startTime,
            endTime,
        };

        try {
            const response = await createSlot(slotData).unwrap();  // Unwrap the response for better error handling
            console.log("Slot created successfully", response);

            // Optionally reset the form after submission
            setRoomName("");
            setDate("");
            setStartTime("");
            setEndTime("");
        } catch (error) {
            console.error("Error creating slot:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Create Slot</h2>

            {/* Show loading state */}
            {isLoading ? <p>Loading rooms...</p> : null}
            {error ? <p>Error loading rooms.</p> : null}

            {/* Room Selection Dropdown */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Room Name</label>
                <select
                    value={roomName}  // Bind to roomName state
                    onChange={(e) => setRoomName(e.target.value)}  // Update roomName state on change
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="">Select a Room</option>
                    {rooms?.data?.map((room) => (
                        <option key={room._id} value={room.name}>  {/* Now using room.name */}
                            {room.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Date Input */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            {/* Start Time Input */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Start Time</label>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            {/* End Time Input */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">End Time</label>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className={`bg-customAccent1 hover:bg-customAccent2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Creating..." : "Create Slot"}
            </button>
        </form>
    );
};

export default CreateSlot;
