import { useState } from "react";


// import Swiper styles
import 'swiper/css';

import { Navigation } from 'swiper/modules';
import {  Swiper, SwiperSlide } from 'swiper/react';



const testimonials = [  
    {  
      image: '/api/placeholder/100/100',  
      name: 'John Doe',  
      role: 'Software Engineer',  
      testimonial:  
        'I had a fantastic experience booking a room at this hotel. The staff was incredibly friendly and helpful, and the room was clean and comfortable. I would definitely recommend this hotel to anyone.',  
    },  
    {  
      image: '/api/placeholder/100/100',  
      name: 'Jane Smith',  
      role: 'Marketing Manager',  
      testimonial:  
        'The booking process was so easy and convenient. I was able to find the perfect room for my needs and the price was very reasonable. I will definitely be booking again.',  
    },  
    {  
      image: '/api/placeholder/100/100',  
      name: 'David Lee',  
      role: 'Business Owner',  
      testimonial:  
        'I was impressed with the level of service at this hotel. The staff went above and beyond to make sure I had a comfortable and enjoyable stay. I would highly recommend this hotel to anyone.',  
    },  
  ]; 

const CustomerTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0); 
    return (
        <section className="py-12 bg-gray-50">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">  
          Customer Testimonials  
        </h2>  
        <Swiper  
          modules={[Navigation]}  
          spaceBetween={30}  
          slidesPerView={1}  
          navigation  
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}  
        >  
          {testimonials.map((testimonial, index) => (  
            <SwiperSlide key={index}>  
              <div className="bg-white rounded-lg shadow-md p-6">  
                <div className="flex items-center mb-4">  
                  <img  
                    src={testimonial.image}  
                    alt={testimonial.name}  
                    className="w-12 h-12 rounded-full mr-4"  
                  />  
                  <div>  
                    <h3 className="text-xl font-medium text-gray-900">  
                      {testimonial.name}  
                    </h3>  
                    <p className="text-gray-500">{testimonial.role}</p>  
                  </div>  
                </div>  
                <p className="text-gray-500">{testimonial.testimonial}</p>  
              </div>  
            </SwiperSlide>  
          ))}  
        </Swiper>  
        <div className="text-center mt-8">  
          <div className="flex justify-center space-x-4">  
            {testimonials.map((_, index) => (  
              <div  
                key={index}  
                className={`w-4 h-4 rounded-full ${  
                  activeIndex === index  
                    ? 'bg-customAccent2'  
                    : 'bg-gray-300'  
                }`}  
              />  
            ))}  
          </div>  
        </div>  
      </div>  
    </section>  
    );
};

export default CustomerTestimonials;