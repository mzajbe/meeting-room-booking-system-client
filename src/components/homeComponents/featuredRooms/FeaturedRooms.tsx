interface Room {  
    image: string;  
    name: string;  
    capacity: number;  
    price: number;  
  }  
  
  const rooms: Room[] = [  
    {  
      image: '/api/placeholder/400/320',  
      name: 'Grand Suite',  
      capacity: 4,  
      price: 150,  
    },  
    {  
      image: '/api/placeholder/400/320',  
      name: 'Deluxe Room',  
      capacity: 2,  
      price: 100,  
    },  
    {  
      image: '/api/placeholder/400/320',  
      name: 'Standard Room',  
      capacity: 2,  
      price: 75,  
    },  
  ];  

const FeaturedRooms = () => {
    return (
        <section className="py-12 bg-gray-100">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">  
          Featured Rooms  
        </h2>  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">  
          {rooms.map((room) => (  
            <div key={room.name} className="bg-white rounded-lg shadow-md overflow-hidden">  
              <img  
                src={room.image}  
                alt={room.name}  
                className="w-full h-48 object-cover"  
              />  
              <div className="p-4">  
                <h3 className="text-xl font-medium text-gray-900 mb-2">  
                  {room.name}  
                </h3>  
                <p className="text-gray-500 mb-2">  
                  Capacity: {room.capacity}  
                </p>  
                <p className="text-gray-500 mb-2">  
                  Price per Slot: ${room.price}  
                </p>  
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">  
                  See Details  
                </button>  
              </div>  
            </div>  
          ))}  
        </div>  
        <div className="text-center mt-8">  
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">  
            See More  
          </button>  
        </div>  
      </div>  
    </section> 
    );
};

export default FeaturedRooms;