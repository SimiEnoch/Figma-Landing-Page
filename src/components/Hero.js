import React from 'react';

function Hero() {
  return (
    <div className="">
      <div className="flex flex-col  justify-center items-center text-center mb-5 ">
        <div className="underline underline-offset-8 whitespace-nowrap text-4xl font-['Calibri'] font-bold text-[#0a4988] ">
          OUR TEAM
        </div>{' '}
      </div>
      <div className=" sm:text-3xl md:text-5xl sm:items-center md:flex md:items-center md:justify-center whitespace-nowrap font-['Calibri'] font-bold text-black mb-4 sm:text-center text-center ">
        Best Management services for you
      </div>
      <p className="whitespace-nowrap sm:text-lg md:text-2xl text-center sm:text-[12px] w-full md:text-xl font-['Calibri'] font-bold text-black mb-8">
        So that everyone can focus on what is really important;
        <br /> clients, career, and business
      </p>
    </div>
  );
}

export default Hero;
