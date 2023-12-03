import React from "react";
import LeftSideBarPattern from "../ui/LeftSideBarPattern";
import President from "../form/Form";

const Negotiations = () => {
  return (
    <section
      id="hero"
      className="home bg-negotiations-pattern py-5 md:py-0 bg-cover bg-no-repeat md:min-h-[100vh] flex-col justify-between items-center relative   ps-[15%] md:ps-[13%] "
    >
      <LeftSideBarPattern />
      <President />
    </section>
  );
};

export default Negotiations;
