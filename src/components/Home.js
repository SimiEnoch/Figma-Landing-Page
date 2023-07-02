import React from 'react';

function Home() {
  return (
    <div className=" md:text-left text-center grid md:grid-cols-2  items-center justify-center px-20 sm:px-10 ">
      <div className="flex flex-col gap-3 mb-2 md:w-full ">
        <div className="text-[#0A4988] text-xl font-bold font-[Calibri] md:px-12 px-20">
          Our Mission
        </div>
        <div className="text-black text-[40px] font-bold px-20 md:px-12">
          Who We Are
        </div>
        <p className="text-md text-start sm:text-start w-full  px-20 md:px-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam condimentum tristique nisi, id gravida purus sagittis
          ac. Maecenas ullamcorper dui non erat aliquam, eu lobortis
          ipsum vestibulum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam condimentum tristique nisi, id
          gravida purus sagittis ac. Maecenas ullamcorper dui non erat
          aliquam, eu lobortis ipsum vestibulum.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam condimentum
          tristique nisi, id gravida purus sagittis ac. Maecenas
          ullamcorper dui non erat aliquam, eu lobortis ipsum
          vestibulum.
        </p>
      </div>
      <div>
        <div className="sm:mb-5 md:mb-0 self-center relative flex flex-col justify-center items-center w-[500px] pt-[404px] items-end">
          <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-[400px] h-[420px] bg-[#0a4988] absolute top-5" />
          <img
            src="https://file.rendit.io/n/AqPJM3GDfTruzLybjX8J.png"
            className="w-full h-[400px] absolute top-0 left-6 md:left-16 sm:left-10 px-20 md:px-12 pr-5"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
