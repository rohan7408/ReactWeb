import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center uppercase  ">
        <p className="text-[#00df9a] font-bold p-2 ">
          Growing With Data Analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With Data
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-4xl font-bold ">
            Fast Financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-4xl md:pl-4 font-bold pl-2 "
            strings={["LTC", "BTC", "ETH"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-5">
          Monitor your data analytics to increase revenue for LTC , BTC , ETH
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
