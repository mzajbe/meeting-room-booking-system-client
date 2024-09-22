import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { selectSlot } from "../../redux/features/bookingSlice";
import { useForm } from "react-hook-form";
import { useFetchAvailableSlotsQuery, useSubmitBookingMutation } from "../../redux/api/baseApi";


const BookingForm = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { user } = useSelector((state: RootState) => state.auth);
  const { selectedSlot } = useSelector((state: RootState) => state.booking);
  const dispatch = useDispatch();


  // Fetch available slots based on the selected date
  const { data: availableSlots = [], isLoading } = useFetchAvailableSlotsQuery(selectedDate?.toISOString().split('T')[0] || '');

  const [submitBooking, { isLoading: isSubmitting }] = useSubmitBookingMutation();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
    },
  });

  const onSubmit = (formData: any) => {
    const bookingData = {
      date: selectedDate,
      slotId: selectedSlot,
      userInfo: formData,
    };
    submitBooking(bookingData);
  };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Booking Form</h2>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="block text-gray-700">Select Booking Date:</label>
        <DatePicker 
          selected={selectedDate} 
          onChange={date => setSelectedDate(date)} 
          className="mt-2 p-2 border border-gray-300 rounded-md" 
        />
      </div>

      {/* Available Time Slots */}
      {selectedDate && (
        <div className="mb-4">
          <label className="block text-gray-700">Available Time Slots:</label>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {isLoading ? (
              <p>Loading slots...</p>
            ) : availableSlots.length === 0 ? (
              <p>No slots available</p>
            ) : (
              availableSlots.map((slot) => (
                <button
                  key={slot._id}
                  className={`p-2 border border-gray-300 rounded-md ${selectedSlot === slot._id ? 'bg-blue-500 text-white' : ''}`}
                  onClick={() => dispatch(selectSlot(slot._id))}
                >
                  {slot.startTime} - {slot.endTime}
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {/* User Information Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            {...register('name')}
            type="text"
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            {...register('email')}
            type="email"
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone:</label>
          <input
            {...register('phone')}
            type="tel"
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address:</label>
          <input
            {...register('address')}
            type="text"
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`p-2 bg-blue-500 text-white rounded-md ${isSubmitting ? 'opacity-50' : ''}`}
          disabled={isSubmitting || !selectedSlot}
        >
          {isSubmitting ? 'Processing...' : 'Submit Booking'}
        </button>
      </form>
    </div>
    );
};

export default BookingForm;