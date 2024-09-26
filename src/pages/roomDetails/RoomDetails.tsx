import { Link, useParams } from "react-router-dom";
import { useFetchRoomsQuery } from "../../redux/api/baseApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useFetchRoomsQuery({});
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const rooms = data?.data;
  const room = rooms.find((room) => room._id === id);

  if (!room) {
    return <p>Room not found.</p>;
  }

  // Adjust slider settings based on the number of images
  const sliderSettings = {
    dots: room.image && room.image.length > 1, // Show dots only if more than one image
    infinite: room.image && room.image.length > 1, // Enable infinite scrolling only if more than one image
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: room.image && room.image.length > 1, // Show arrows only if more than one image
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Slider */}
        <div className="w-full md:w-2/3">
          {room.image && room.image.length > 0 ? (
            <Slider {...sliderSettings}>
              {room.image.map((image: string, index: number) => (
                <div key={index}>
                  <img
                    className="max-w-2xl h-auto object-cover rounded-lg mb-4"
                    src={image}
                    alt={`${room.name} image ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <img
              className="w-full h-auto object-cover rounded-lg mb-4"
              src="https://via.placeholder.com/600x400"
              alt="No image available"
            />
          )}

          <p className="text-gray-700">{room.description}</p>

          <div>
            <p className="text-gray-600 mr-2 font-bold">Amenities:</p>
            <table className="table-auto w-full mt-2">
              <tbody>
                {room.amenities.map((amenity: string, index: number) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2 text-gray-700">{amenity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Room Details */}
        <div className="w-full md:w-1/3">
          <div className="flex flex-col border border-gray-300 rounded-lg shadow-md p-6 mb-6 bg-white">
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
              {room.name}
            </h1>

            <div className="flex flex-wrap justify-between mb-4">
              <p className="text-gray-700 mr-2">
                <span className="font-semibold">Room Capacity:</span> {room.capacity}
              </p>
              <p className="text-gray-700 mr-2">
                <span className="font-semibold">Room No:</span> {room.roomNo}
              </p>
              <p className="text-gray-700 mr-2">
                <span className="font-semibold">Floor No:</span> {room.floorNo}
              </p>
            </div>

            <div className="flex justify-between bg-blue-100 text-red-800 font-bold rounded-lg px-3 py-1">
              <p className="text-gray-700 mr-2">
                <span className="font-semibold ">Price per Slot:</span>
              </p>
              ${room.pricePerSlot}
            </div>
          </div>

          {/* Book Now Button */}
          <Link to={`/booking/${room._id}`}>
            <button className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-3 px-6 rounded-full w-full">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
