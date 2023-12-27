import React from "react";
import LeftSideBarPattern from "../ui/LeftSideBarPattern";

const Hero = () => {
  return (
    <section
      id="hero"
      className="home py-5 md:py-0 bg-hero-pattern bg-cover bg-no-repeat md:min-h-[calc(100vh_-_84px)] flex-col justify-between items-center relative  shadow-[0_0_10px_rgba(0,0,0,.09);] ps-[15%] md:ps-[13%] "
    >
      <div className="container max-w-[1200px] mx-auto px-24 py-6 ">
        <div className="sm:max-w-xl lg:max-w-3xl flex flex-col gap-y-6 py-8 px-4">
          <h5 className="text-[#1A8575] text-xl md:text-xl lg:text-2xl  pt-5">
            Youth for Sustainable Development Goals Project
          </h5>
          <h1 className="text-[#A3D619] text-2xl  lg:text-6xl  md:text-4xl  font-bold">
            Baku Youth Climate Negotiations
          </h1>
          <h2 className="text-primary-darkGreen text-sm  lg:text-2xl  md:text-base  font-bold my-0">
            Turning Point Dialogues
          </h2>

          <p className="text-[#1A8575]">
            I Baku Youth Cimate Negotiations is an annual forum for youth
            discussions focused on regional climate negotiations and actions
            against climate change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
