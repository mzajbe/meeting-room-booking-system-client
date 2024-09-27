/* eslint-disable react-hooks/rules-of-hooks */
import { Frown, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedSVG = () => (
    <svg className="w-64 h-64 mb-8" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" className="fill-purple-300 animate-pulse" />
      <path d="M30 40 Q50 20 70 40" className="stroke-purple-600 stroke-2 fill-none animate-[dash_1.5s_ease-in-out_infinite]" />
      <circle cx="35" cy="40" r="5" className="fill-purple-600 animate-bounce" />
      <circle cx="65" cy="40" r="5" className="fill-purple-600 animate-bounce" />
    </svg>
  );

const Page404 = () => {

    const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isHovering) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 15) % 360);
      }, 50);
      return () => clearInterval(interval);
    } else {
      setRotation(0);
    }
  }, [isHovering]);
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex flex-col items-center justify-center p-4 text-center">
        <AnimatedSVG />
        <h1 className="text-6xl font-bold text-purple-800 mb-4 animate-bounce">404</h1>
        <p className="text-2xl text-purple-600 mb-8 animate-fade-in-down">Oops! Page not found</p>
        <div className="flex items-center space-x-4 mb-8">
          <Frown className="text-purple-500 w-8 h-8" />
          <p className="text-lg text-purple-700">We couldn't find the page you're looking for.</p>
        </div>
        <a
          href="/"
          className="group relative inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="relative z-10">Go Home</span>
          <RefreshCw
            className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
          <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-purple-400 opacity-40 transition-all duration-300 ease-out group-hover:scale-100"></span>
        </a>
      </div>
    );
};

export default Page404;