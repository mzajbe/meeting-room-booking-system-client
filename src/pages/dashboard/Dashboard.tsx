import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../../redux/features/roomSlice";


const Dashboard = () => {

    const dispatch = useDispatch();  
  
  // Example state slices  
  const rooms = useSelector((state: any) => state.rooms);  
  const slots = useSelector((state: any) => state.slots);  
  const bookings = useSelector((state: any) => state.bookings);  

  // Room management state  
  const [newRoom, setNewRoom] = useState({ name: '', roomNo: '', floorNo: '', capacity: 0, pricePerSlot: 0 });  
  const [isRoomFormOpen, setIsRoomFormOpen] = useState(false);  

  // Slot management state  
  const [newSlot, setNewSlot] = useState({ roomId: '', date: '', startTime: '', endTime: '' });  
  const [isSlotFormOpen, setIsSlotFormOpen] = useState(false);  

  const handleCreateRoom = () => {  
    dispatch(createRoom(newRoom));  
    setNewRoom({ name: '', roomNo: '', floorNo: '', capacity: 0, pricePerSlot: 0 });  
    setIsRoomFormOpen(false);  
  };  

  const handleCreateSlot = () => {  
    // dispatch(createSlot(newSlot));  
    // setNewSlot({ roomId: '', date: '', startTime: '', endTime: '' });  
    // setIsSlotFormOpen(false);  
  };  

    return (
        <div className="container mx-auto p-4">  
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>  

      {/* Room Management */}  
      <div className="mb-8">  
        <h2 className="text-xl font-semibold">Room Management</h2>  
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setIsRoomFormOpen(true)}>  
          Create Room  
        </button>  
        
        {isRoomFormOpen && (  
          <form className="my-4" onSubmit={(e) => { e.preventDefault(); handleCreateRoom(); }}>  
            <input type="text" placeholder="Room Name" value={newRoom.name} onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })} required />  
            <input type="text" placeholder="Room No." value={newRoom.roomNo} onChange={(e) => setNewRoom({ ...newRoom, roomNo: e.target.value })} required />  
            <input type="text" placeholder="Floor No." value={newRoom.floorNo} onChange={(e) => setNewRoom({ ...newRoom, floorNo: e.target.value })} required />  
            <input type="number" placeholder="Capacity" value={newRoom.capacity} onChange={(e) => setNewRoom({ ...newRoom, capacity: Number(e.target.value) })} required />  
            <input type="number" placeholder="Price Per Slot" value={newRoom.pricePerSlot} onChange={(e) => setNewRoom({ ...newRoom, pricePerSlot: Number(e.target.value) })} required />  
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Room</button>  
          </form>  
        )}  

        <table className="w-full border border-gray-300 mt-4">  
          <thead>  
            <tr>  
              <th className="border border-gray-300">Room Name</th>  
              <th className="border border-gray-300">Room No.</th>  
              <th className="border border-gray-300">Floor No.</th>  
              <th className="border border-gray-300">Capacity</th>  
              <th className="border border-gray-300">Price Per Slot</th>  
              <th className="border border-gray-300">Actions</th>  
            </tr>  
          </thead>  
          <tbody>  
            {rooms.map((room: any) => (  
              <tr key={room.id}>  
                <td className="border border-gray-300">{room.name}</td>  
                <td className="border border-gray-300">{room.roomNo}</td>  
                <td className="border border-gray-300">{room.floorNo}</td>  
                <td className="border border-gray-300">{room.capacity}</td>  
                <td className="border border-gray-300">{room.pricePerSlot}</td>  
                <td className="border border-gray-300">  
                  {/* <button onClick={() => dispatch(updateRoom(room.id))} className="bg-yellow-500 text-white px-2 py-1 rounded">Update</button>  
                  <button onClick={() => dispatch(deleteRoom(room.id))} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>   */}
                </td>  
              </tr>  
            ))}  
          </tbody>  
        </table>  
      </div>  

      {/* Slot Management */}  
      <div className="mb-8">  
        <h2 className="text-xl font-semibold">Slot Management</h2>  
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setIsSlotFormOpen(true)}>  
          Create Slot  
        </button>  

        {isSlotFormOpen && (  
          <form className="my-4" onSubmit={(e) => { e.preventDefault(); handleCreateSlot(); }}>  
            <select value={newSlot.roomId} onChange={(e) => setNewSlot({ ...newSlot, roomId: e.target.value })}>  
              <option value="">Select Room</option>  
              {rooms.map((room: any) => (  
                <option key={room.id} value={room.id}>{room.name}</option>  
              ))}  
            </select>  
            <input type="date" value={newSlot.date} onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })} required />  
            <input type="time" value={newSlot.startTime} onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })} required />  
            <input type="time" value={newSlot.endTime} onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })} required />  
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Slot</button>  
          </form>  
        )}  

        <table className="w-full border border-gray-300 mt-4">  
          <thead>  
            <tr>  
              <th className="border border-gray-300">Room Name</th>  
              <th className="border border-gray-300">Room No.</th>  
              <th className="border border-gray-300">Date</th>  
              <th className="border border-gray-300">Start Time</th>  
              <th className="border border-gray-300">End Time</th>  
              <th className="border border-gray-300">Actions</th>  
            </tr>  
          </thead>  
          <tbody>  
            {slots.map((slot: any) => (  
              <tr key={slot.id}>  
                <td className="border border-gray-300">{slot.roomName}</td>  
                <td className="border border-gray-300">{slot.roomNo}</td>  
                <td className="border border-gray-300">{slot.date}</td>  
                <td className="border border-gray-300">{slot.startTime}</td>  
                <td className="border border-gray-300">{slot.endTime}</td>  
                <td className="border border-gray-300">  
                  {/* <button onClick={() => dispatch(updateSlot(slot.id))} className="bg-yellow-500 text-white px-2 py-1 rounded">Update</button>  
                  <button onClick={() => dispatch(deleteSlot(slot.id))} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>   */}
                </td>  
              </tr>  
            ))}  
          </tbody>  
        </table>  
      </div>  

      {/* Booking Management */}  
      <div className="mb-8">  
        <h2 className="text-xl font-semibold">Booking Management</h2>  
        
        <table className="w-full border border-gray-300 mt-4">  
          <thead>  
            <tr>  
              <th className="border border-gray-300">Room Name</th>  
              <th className="border border-gray-300">User Name</th>  
              <th className="border border-gray-300">Date & Time</th>  
              <th className="border border-gray-300">Status</th>  
              <th className="border border-gray-300">Actions</th>  
            </tr>  
          </thead>  
          <tbody>  
            {bookings.map((booking: any) => (  
              <tr key={booking.id}>  
                <td className="border border-gray-300">{booking.roomName}</td>  
                <td className="border border-gray-300">{booking.userName}</td>  
                <td className="border border-gray-300">{booking.dateTime}</td>  
                <td className="border border-gray-300">{booking.status}</td>  
                {/* <td className="border border-gray-300">  
                  <button onClick={() => dispatch(approveBooking(booking.id))} className="bg-green-500 text-white px-2 py-1 rounded">Approve</button>  
                  <button onClick={() => dispatch(rejectBooking(booking.id))} className="bg-yellow-500 text-white px-2 py-1 rounded">Reject</button>  
                  <button onClick={() => {  
                    if (window.confirm("Are you sure you want to delete this booking?")) {  
                      dispatch(deleteBooking(booking.id));  
                    }  
                  }} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>  
                </td>   */}
              </tr>  
            ))}  
          </tbody>  
        </table>  
      </div>  
    </div>
    );
};

export default Dashboard;