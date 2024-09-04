


const ServiceAdvertisement = () => {

  
  return (
    <section className="bg-customPrimary py-12">  
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
      <div className="text-center">  
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">  
          Highlighted Services  
        </h2>  
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">  
          We offer a range of services designed to make your experience seamless and convenient.  
        </p>  
      </div>  
      <div className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">  
        <div className="relative">  
          <div className="text-center">  
            <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">  
              <svg  
                className="h-6 w-6 text-white"  
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
            </span>  
          </div>  
          <h3 className="mt-6 text-base font-medium text-gray-400">  
            Real-Time Availability  
          </h3>  
          <p className="mt-2 text-sm text-gray-400">  
            See what's available instantly and book with confidence.  
          </p>  
        </div>  
        <div className="relative">  
          <div className="text-center">  
            <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">  
              <svg  
                className="h-6 w-6 text-white"  
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
            </span>  
          </div>  
          <h3 className="mt-6 text-base font-medium text-gray-400">  
            Instant Booking Confirmation  
          </h3>  
          <p className="mt-2 text-sm text-gray-400">  
            Your booking is confirmed immediately, no waiting around.  
          </p>  
        </div>  
        <div className="relative">  
          <div className="text-center">  
            <span className="inline-flex items-center justify-center p-3 bg-yellow-500 rounded-md shadow-lg">  
              <svg  
                className="h-6 w-6 text-white"  
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
            </span>  
          </div>  
          <h3 className="mt-6 text-base font-medium text-gray-400">  
            Flexible Scheduling  
          </h3>  
          <p className="mt-2 text-sm text-gray-400">  
            Choose the time and date that works best for you.  
          </p>  
        </div>  
        <div className="relative">  
          <div className="text-center">  
            <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">  
              <svg  
                className="h-6 w-6 text-white"  
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
            </span>  
          </div>  
          <h3 className="mt-6 text-base font-medium text-gray-400">  
            24/7 Support  
          </h3>  
          <p className="mt-2 text-sm text-gray-400">  
            We're here to help, anytime, day or night.  
          </p>  
        </div>  
      </div>  
    </div>  
  </section>   
  );
};

export default ServiceAdvertisement;
