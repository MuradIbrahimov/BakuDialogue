import React from "react";

const Hero = () => {
  return (
    <section className=" md:min-h-[80vh]  flex  justify-center items-center relative  py-8 px-8">
      <div className="About container  mx-auto flex gap-4  1024:flex-col-reverse 1024:items-center   justify-between md:gap-x-10   py-6 px-6 rounded-3xl">
        <div class="content lg:max-w-[45%] gap ">
          <h3 className="text-black text-base lg:mb-6 ">About</h3>
          <h1 className="text-black text-5xl lg:mb-4">
            Baku Youth Climate Negotiations
          </h1>

          <p className="text-black text-2xl mb-4">
            I Baku Youth Cimate Negotiations is an annual forum for youth
            discussions focused on regional climate negotiations and actions
            against climate change. Involve exploring local challenges, sharing
            best practices, and fostering collaboration among youth in the
            region to contribute to the global effort to combat climate change.
          </p>
        </div>
        <div>
          <img
            src="/YouthNegotiation.png"
            className="picture rounded-3xl  w-[500px] h-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
