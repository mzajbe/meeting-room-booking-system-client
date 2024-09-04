// import  { useState, useEffect } from "react";

// import hero1 from '../../../assets/images/hero-1.jpg'

// interface Slide {
//     image: string;
//     title: string;
//     description: string;
//   }
  
//   const slides: Slide[] = [
//     {
//       image: hero1,
//       title: "Explore the Best Mechanical Keyboards",
//       description:
//         "Find the perfect mechanical keyboard to elevate your typing experience.",
//     },
//     {
//       image: hero1,
//       title: "Customize Your Typing Experience",
//       description:
//         "Discover a range of switches, keycaps, and layouts tailored to your needs.",
//     },
//     {
//       image: hero1,
//       title: "Durable and Reliable",
//       description:
//         "Built to last, our mechanical keyboards offer unmatched durability and reliability.",
//     },
//   ];
  
//   const Hero = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
  
//     useEffect(() => {
//       const slideInterval = setInterval(() => {
//         setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//       }, 5000);
  
//       return () => clearInterval(slideInterval);
//     }, []);
//     return (
//       <div className="relative w-full h-[600px] sm:h-[800px] overflow-hidden">
//     {slides.map((slide, index) => (
//       <div
//         key={index}
//         className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//           index === currentSlide ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <img
//           src={slide.image}
//           alt={slide.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
//           <h1 className="text-white text-2xl sm:text-4xl font-bold">
//             {slide.title}
//           </h1>
//           <p className="text-white text-base sm:text-lg mt-2">
//             {slide.description}
//           </p>
//         </div>
//       </div>
//     ))}
  
//     <div className="absolute inset-0 flex items-center justify-between p-4">
//       <button
//         className="bg-white bg-opacity-50 hover:bg-opacity-75 text-black font-bold py-2 px-4 rounded-full"
//         onClick={() =>
//           setCurrentSlide(
//             currentSlide === 0 ? slides.length - 1 : currentSlide - 1
//           )
//         }
//       >
//         Prev
//       </button>
//       <button
//         className="bg-white bg-opacity-50 hover:bg-opacity-75 text-black font-bold py-2 px-4 rounded-full"
//         onClick={() =>
//           setCurrentSlide(
//             currentSlide === slides.length - 1 ? 0 : currentSlide + 1
//           )
//         }
//       >
//         Next
//       </button>
//     </div>
  
//     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//       {slides.map((_, index) => (
//         <button
//           key={index}
//           className={`w-3 h-3 rounded-full ${
//             index === currentSlide ? "bg-white" : "bg-gray-500"
//           }`}
//           onClick={() => setCurrentSlide(index)}
//         />
//       ))}
//     </div>
//   </div>
  
//     );
//   };
  
//   export default Hero;

import { useState, useEffect } from "react";
import hero1 from '../../../assets/images/hero-1.png';
import hero2 from '../../../assets/images/hero-2.png';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: hero1,
    title: "Explore the Best Mechanical Keyboards",
    description:
      "Find the perfect mechanical keyboard to elevate your typing experience.",
  },
  {
    image: hero2,
    title: "Customize Your Typing Experience",
    description:
      "Discover a range of switches, keycaps, and layouts tailored to your needs.",
  },
  {
    image: hero1,
    title: "Durable and Reliable",
    description:
      "Built to last, our mechanical keyboards offer unmatched durability and reliability.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[600px] sm:h-[800px] flex items-center overflow-hidden bg-gradient-to-b  to-customAccent1 from-customPrimary">
      <div className="flex-1 flex flex-col justify-center items-start p-10">
        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4 ml-12">
          {slides[currentSlide].title}
        </h1>
        <p className="text-white text-lg sm:text-xl ml-12">
          {slides[currentSlide].description}
        </p>
      </div>

      {/* <div className="flex-1 relative">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover animate-fade-in-right"
        />
      </div> */}

<div className="flex-1 relative">
  <img
    src={slides[currentSlide].image}
    alt={slides[currentSlide].title}
    className="animate-fade-in-float"
    width="700" // Adjust the width as needed
    height="700" // Adjust the height as needed
  />
</div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="bg-white bg-opacity-50 hover:bg-opacity-75 text-black font-bold py-2 px-4 rounded-full"
          onClick={() =>
            setCurrentSlide(
              currentSlide === 0 ? slides.length - 1 : currentSlide - 1
            )
          }
        >
          Prev
        </button>
        <button
          className="bg-white bg-opacity-50 hover:bg-opacity-75 text-black font-bold py-2 px-4 rounded-full"
          onClick={() =>
            setCurrentSlide(
              currentSlide === slides.length - 1 ? 0 : currentSlide + 1
            )
          }
        >
          Next
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

  