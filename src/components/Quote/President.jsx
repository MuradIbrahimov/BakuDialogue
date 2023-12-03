import React from "react";

function President() {
  return (
    <>
      <section className="home   md:min-h-[400px] flex flex-col justify-between items-center relative ps-[15%] md:ps-[13%] py-5">
        <div className="container max-w-[1200px] mx-auto flex gap-4  flex-col items-start  md:flex-row md:items-center lg:justify-start md:gap-x-10 ">
          <div>
            <img
              src="/President.jpg"
              className="picture rounded-3xl  w-[300px] h-[300px]  mt-5 md:mt-5"
            />
          </div>
          <div class="content lg:max-w-[50%]">
            <h3 className="text-yellow-500 text-lg lg:mb-6 ">
              Welcome Message
            </h3>
            <h1 className="text-lg font-bold mb-2">
              From President Ilham Aliyev
            </h1>
            <p className="text-gray-700 text-base mb-4">
              “We have a large water basin like the Caspian Sea. We have
              initiated the desalination process of sea water for irrigation
              purposes and later for its use as drinking water.”
            </p>
            <a
              className="inline-block border border-yellow-500 text-base w-56 text-center text-yellow-500 px-4 py-2 rounded-full transition duration-300 hover:bg-yellow-500 hover:text-white hover:no-underline"
              href="https://azertag.az/en/xeber/president_ilham_aliyev_attended_panel_discussion_on_climate_and_energy_security_at_munich_security_conference_video-927106"
              target="_blank"
            >
              More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default President;
