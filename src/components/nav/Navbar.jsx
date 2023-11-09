import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav
        id="home"
        className="bg-white flex justify-between items-center h-2  mx-auto text-black py-10 px-0 md:px-10 shadow-[0_0_10px_rgba(0,0,0,.09);] z-10 mb-1 "
      >
        <h1 className="w-full text-xl font-bold ms-5 text-[#2d2e32]">
          Murad Ibrahimov
        </h1>
        <ul className="hidden md:flex text-[#2d2e32] ">
          <li className="nav-link p-4 -bold">
            <a href="#home">Home</a>
          </li>
          <li className="nav-link p-4 -bold">
            <a href="#about">About</a>
          </li>
          <li className="nav-link p-4 -bold">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-link p-4 -bold">
            <a href="#contact"> Contact</a>
          </li>
        </ul>
        <div>
          <Bars3Icon
            className="w-8 absolute right-10 top-6 md:hidden"
            onClick={handleNav}
          />
        </div>
        <div
          className={
            !nav
              ? `fixed top-0 left-0  w-[100%] border-r-gray-600 bg-white h-[100vh] flex ease-in-out duration-500 justify-center items-center z-10`
              : `fixed left-[-100%] ease-in-out duration-500 `
          }
        >
          <XMarkIcon
            className="w-8  absolute right-10 top-6"
            onClick={handleNav}
          />
          <ul className="p-4 uppercase">
            <li
              onClick={handleNav}
              className="nav-link text-2xl font-semibold p-4  text-xl"
            >
              <a href="#home">Home</a>
            </li>
            <li
              onClick={handleNav}
              className="nav-link text-2xl font-semibold p-4  text-xl"
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={handleNav}
              className="nav-link text-2xl font-semibold p-4  text-xl"
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              onClick={handleNav}
              className="nav-link text-2xl font-semibold p-4  text-xl"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
