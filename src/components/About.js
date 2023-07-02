import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="grid md:grid-cols-2 items-center justify-center md:pb-4 gap-4"
    >
      <div className="self-center relative flex lg:mb-[22rem] md:mb-[44rem] pb-3 items-start justify-start md:bottom-0 bottom-64 md:left-4 px-20 md:px-12">
        <div className="hidden md:block w-[336px] flex  bg-[url(https://file.rendit.io/n/WpZABr6czB6g4nPKA6N2.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-20 lg:left-16 flex-col p-6">
          <div className=" h-[303px] bg-[url(https://file.rendit.io/n/DhxKaKK5LvCrHUdmtFrY.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative w-[286px] items-center p-8 ">
            <div className=" h-[280px] bg-[url(https://file.rendit.io/n/DhxKaKK5LvCrHUdmtFrY.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative w-[227px] items-center p-6 ">
              {/* <div className="h-[280px] bg-[url(https://file.rendit.io/n/kM3rkpfxPlqleM3mbRRE.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative items-center p-6"> */}
              <div className=" h-48 bg-[url(https://file.rendit.io/n/DhxKaKK5LvCrHUdmtFrY.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative w-[182px] items-center p-4 ">
                {/* <div className="h-48 bg-[url(https://file.rendit.io/n/LAsXX3R2QIZtGeOkBEgd.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center mr-px relative shrink-0 items-center"> */}
                <div className=" h-32 bg-[url(https://file.rendit.io/n/DhxKaKK5LvCrHUdmtFrY.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative w-[122px] items-center p-2 ">
                  {/* <div className=" bg-[url(https://file.rendit.io/n/sCG0YejPkxeKtdjh4wl0.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative h-32 shrink-0 items-center mx-7"> */}
                  <div className=" h-16 bg-[url(https://file.rendit.io/n/DhxKaKK5LvCrHUdmtFrY.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative w-[61px] items-center ">
                    {/* <div className="bg-[url(https://file.rendit.io/n/7R77pwoPU3R9i2HF3SzK.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative w-16 h-20 shrink-0 items-center mx-6"> */}
                    <img
                      src="https://file.rendit.io/n/uSP7z7MsSlOTENIptaN8.svg"
                      className="min-h-0 min-w-0 relative w-16"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[30rem] flex  mb-30 md:px-0 :px-2  lg:ml-48 md:ml-16 ">
          <img
            src="https://file.rendit.io/n/jPrDGBRMCEhaNlos4QwM.svg"
            className="min-h-0 min-w-0 relative"
          />
        </div>
      </div>{' '}
      <div className="flex w-full mt-2 mb-64 flex-col gap-5 items-center md:items-start text-center md:text-start px-20 md:px-12">
        <div className="md:text-4xl sm:w-full sm:text-3xl font-['Calibri'] font-bold text-black justify-start relative w-full">
          Meet our team of{' '}
          <div className="md:text-4xl sm:w-full sm:text-2xl font-['Calibri'] font-bold text-black contents italic">
            accomplished,
          </div>
          <div className="md:text-4xl sm:w-full sm:text-2xl font-['Calibri'] font-bold text-black contents italic">
            professional,
          </div>
          <div className="md:text-4xl sm:w-full sm:text-2xl font-['Calibri'] font-bold text-black contents">
            and world class{' '}
          </div>
          <div className="md:text-4xl  sm:text-2xl font-['Calibri'] font-bold text-black contents italic">
            problem solvers
          </div>
        </div>
        <p className="text-md font-['Calibri'] lg:w-full  text-start">
          To be the company our customers want us to be. It takes an
          amazing learn of passionate and experienced professionals.
          Get to know the people leading the way in management
          services.
        </p>
      </div>
    </section>
  );
}
export default About;
