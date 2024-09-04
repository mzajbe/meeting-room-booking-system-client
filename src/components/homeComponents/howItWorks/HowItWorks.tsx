

const HowItWorks = () => {
    return (
        <section className="py-12 bg-gray-100">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">  
          How It Works  
        </h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          <div className="bg-white rounded-lg shadow-md p-6 text-center">  
            <div className="flex items-center justify-center mb-4">  
              <svg  
                className="h-12 w-12 text-blue-500"  
                xmlns="http://www.w3.org/2000/svg"  
                fill="none"  
                viewBox="0 0 24 24"  
                stroke="currentColor"  
                aria-hidden="true"  
              >  
                <path  
                  strokeLinecap="round"  
                  strokeLinejoin="round"  
                  strokeWidth={2}  
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"  
                />  
              </svg>  
            </div>  
            <h3 className="text-xl font-medium text-gray-900 mb-2">  
              Select a Room  
            </h3>  
            <p className="text-gray-500">  
              Browse our selection of rooms and choose the one that best suits  
              your needs.  
            </p>  
          </div>  
          <div className="bg-white rounded-lg shadow-md p-6 text-center">  
            <div className="flex items-center justify-center mb-4">  
              <svg  
                className="h-12 w-12 text-green-500"  
                xmlns="http://www.w3.org/2000/svg"  
                fill="none"  
                viewBox="0 0 24 24"  
                stroke="currentColor"  
                aria-hidden="true"  
              >  
                <path  
                  strokeLinecap="round"  
                  strokeLinejoin="round"  
                  strokeWidth={2}  
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"  
                />  
              </svg>  
            </div>  
            <h3 className="text-xl font-medium text-gray-900 mb-2">  
              Choose Date & Time  
            </h3>  
            <p className="text-gray-500">  
              Select your desired date and time for your booking.  
            </p>  
          </div>  
          <div className="bg-white rounded-lg shadow-md p-6 text-center">  
            <div className="flex items-center justify-center mb-4">  
              <svg  
                className="h-12 w-12 text-yellow-500"  
                xmlns="http://www.w3.org/2000/svg"  
                fill="none"  
                viewBox="0 0 24 24"  
                stroke="currentColor"  
                aria-hidden="true"  
              >  
                <path  
                  strokeLinecap="round"  
                  strokeLinejoin="round"  
                  strokeWidth={2}  
                  d="M9 12l3 3l3-3m-6-3h12"  
                />  
              </svg>  
            </div>  
            <h3 className="text-xl font-medium text-gray-900 mb-2">  
              Confirm Booking  
            </h3>  
            <p className="text-gray-500">  
              Review your booking details and confirm your reservation.  
            </p>  
          </div>  
        </div>  
      </div>  
    </section>
    );
};

export default HowItWorks;