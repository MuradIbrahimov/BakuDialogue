import React from "react";

function President() {
  return (
    <>
      <section className="md:min-h-[80vh]  flex  justify-center items-center relative  py-8 px-8">
        <div className="quote-content container  mx-auto flex gap-4  1024:flex-col-reverse 1024:items-center   justify-between md:gap-x-10   py-6 px-6 rounded-3xl">
          <div class="content lg:max-w-[45%] gap ">
            <h1 className="text-white text-5xl py-4">
              From President Ilham Aliyev
            </h1>
            <h3 className="text-black text-base lg:mb-6 ">Welcome Message</h3>

            <p className="text-black text-2xl mb-4">
              “We have a large water basin like the Caspian Sea. We have
              initiated the desalination process of sea water for irrigation
              purposes and later for its use as drinking water.”
            </p>
            <a
              className="inline-block border border-[#EC744A] text-base w-56 text-center text-[#EC744A] px-4 py-2 rounded-full transition duration-300 hover:bg-[#EC744A] hover:text-white hover:no-underline"
              href="https://azertag.az/en/xeber/president_ilham_aliyev_attended_panel_discussion_on_climate_and_energy_security_at_munich_security_conference_video-927106"
              target="_blank"
            >
              More
            </a>
          </div>
          <div>
            <img
              src="/President.jpg"
              className="picture rounded-3xl  w-[500px] h-auto "
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default President;
