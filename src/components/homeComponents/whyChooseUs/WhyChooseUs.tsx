

const WhyChooseUs = () => {
    return (
        <section className="py-12 bg-gray-50">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">  
          Why Choose Us?  
        </h2>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          <div className="bg-white rounded-lg shadow-md p-6">  
            <div className="flex items-center mb-4">  
              <svg  
                className="h-6 w-6 text-blue-500"  
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
              <h3 className="ml-4 text-xl font-medium text-gray-900">  
                Seamless Booking Experience  
              </h3>  
            </div>  
            <p className="text-gray-500">  
              Book your room with ease, from browsing to confirmation, all in one  
              place.  
            </p>  
          </div>  
          <div className="bg-white rounded-lg shadow-md p-6">  
            <div className="flex items-center mb-4">  
              <svg  
                className="h-6 w-6 text-green-500"  
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
              <h3 className="ml-4 text-xl font-medium text-gray-900">  
                Secure Transactions  
              </h3>  
            </div>  
            <p className="text-gray-500">  
              Your payment information is protected with the highest security  
              standards.  
            </p>  
          </div>  
          <div className="bg-white rounded-lg shadow-md p-6">  
            <div className="flex items-center mb-4">  
              <svg  
                className="h-6 w-6 text-yellow-500"  
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
              <h3 className="ml-4 text-xl font-medium text-gray-900">  
                Exceptional Customer Service  
              </h3>  
            </div>  
            <p className="text-gray-500">  
              Our dedicated team is always available to assist you with any  
              questions or concerns.  
            </p>  
          </div>  
        </div>  
      </div>  
    </section>
    );
};

export default WhyChooseUs;