import React from "react";

import {
  FaWallet,
  FaNetworkWired,
  FaSeedling,
  FaCity,
  FaBolt,
  FaWater,
  FaHotjar,
} from "react-icons/fa";
const Topics = () => {
  return (
    <section className="Topics relative">
      <div className="bg-topics-pattern py-5 md:py-0 bg-cover bg-center bg-fixed bg-no-repeat md:min-h-[100vh] flex-col justify-center items-start relative">
        <div className="overlay"></div>
        <h2 className="text-3xl text-white text-center relative z-2">
          11 Country
        </h2>
        <div className="content z-2 relative flex flex-wrap justify-center items-center gap-4">
          {/* Repeat the following card structure for each card */}
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="w-full h-[148px] p-4 bg-[#5EB47C] bg-opacity-70 rounded-[30px] border border-black flex-col justify-start items-center gap-2 inline-flex">
              <FaWallet
                className="bg-purple-100 border-purple-50 w-[40px] h-[40px] rounded-2xl p-2 cursor-pointer"
                fill="green"
              />
              <div className="self-stretch h-12 flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Financing Youth Innovation for Green Solutions
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the above card structure for each card */}
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="w-full h-[148px] p-4 bg-[#5EB47C] bg-opacity-70 rounded-[30px] border border-black flex-col justify-start items-center gap-2 inline-flex">
              <FaNetworkWired
                className="bg-purple-100 border-purple-50 w-[40px] h-[40px] rounded-2xl p-2 cursor-pointer"
                fill="green"
              />
              <div className="self-stretch h-12 flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Technological Development and Ecological Issues
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the above card structure for each card */}
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="w-full h-[148px] p-4 bg-[#5EB47C] bg-opacity-70 rounded-[30px] border border-black flex-col justify-start items-center gap-2 inline-flex">
              <FaBolt
                className="bg-purple-100 border-purple-50 w-[40px] h-[40px] rounded-2xl p-2 cursor-pointer"
                fill="green"
              />
              <div className="self-stretch h-12 flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Regional Energy Transaction: Where are the Youth?
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the above card structure for each card */}
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="w-full h-[148px] p-4 bg-[#5EB47C] bg-opacity-70 rounded-[30px] border border-black flex-col justify-start items-center gap-2 inline-flex">
              <FaCity
                className="bg-purple-100 border-purple-50 w-[40px] h-[40px] rounded-2xl p-2 cursor-pointer"
                fill="green"
              />
              <div className="self-stretch h-12 flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Cities, Climate Advocacy and Youth
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the above card structure for each card */}
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="w-full h-[148px] p-4 bg-[#5EB47C] bg-opacity-70 rounded-[30px] border border-black flex-col justify-start items-center gap-2 inline-flex">
              <FaSeedling
                className="bg-purple-100 border-purple-50 w-[40px] h-[40px] rounded-2xl p-2 cursor-pointer"
                fill="green"
              />
              <div className="self-stretch h-12 flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Agriculture, Youth Employability, and Climate
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the above card structure for each card */}
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="w-full h-[148px] p-4 bg-[#5EB47C] bg-opacity-70 rounded-[30px] border border-black flex-col justify-start items-center gap-2 inline-flex">
              <FaWater
                className="bg-purple-100 border-purple-50 w-[40px] h-[40px] rounded-2xl p-2 cursor-pointer"
                fill="green"
              />
              <div className="self-stretch h-12 flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Caspian Sea and Life under Water
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the above card structure for each card */}
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="w-full h-[148px] p-4 bg-[#5EB47C] bg-opacity-70 rounded-[30px] border border-black flex-col justify-start items-center gap-2 inline-flex">
              <FaHotjar
                className="bg-purple-100 border-purple-50 w-[40px] h-[40px] rounded-2xl p-2 cursor-pointer"
                fill="green"
              />
              <div className="self-stretch h-12 flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch text-center text-black text-base font-normal font-['Inter'] leading-normal">
                  Climate Drought Problems: Drought and Future of Agricultural
                  Sector
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the above card structure for each card */}
        </div>
      </div>
    </section>
  );
};

export default Topics;
