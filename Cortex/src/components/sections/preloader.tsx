"use client";

import { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-[480px] h-[480px]">
        <video
          src="https://video.srv18.com/v/mp4/108d83bbc9b96520756d82adcc37b774/1920"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-8 flex flex-col items-center gap-6">
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-white/90 animate-pulse [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 rounded-full bg-white/90 animate-pulse [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 rounded-full bg-white/90 animate-pulse"></div>
        </div>

        <div className="flex items-center gap-2 text-menu text-white/90">
          <div className="flex items-center gap-2">
            <div className="h-[7px] w-[7px] rounded-full bg-white/90"></div>
            <span>Loading</span>
          </div>
          <span>CORTEX</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;