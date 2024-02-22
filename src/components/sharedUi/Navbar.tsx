"use client";

import Link from "next/link";
import { useState } from "react";

import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const navList = (
    <>
      <Link href="/" className="text-gray">
        Home
      </Link>
      <Link href="/about" className="text-gray">
        About
      </Link>
      <Link href="/works" className="text-gray">
        Works
      </Link>
      <Link href="/ourTeam" className="text-gray">
        Our Team
      </Link>
    </>
  );

  return (
    <>
      <div onClick={() => setOpenMenu(false)} className={`fixed ${!openMenu ? "invisible" : "visible"} w-screen h-screen backdrop-blur-sm top-0 left-0`}></div>
      <header className="backdrop-blur-3xl sticky top-0 z-50 w-full shadow-md">
        <nav className="flex justify-between items-center py-6 max-w-7xl mx-auto px-3 lg:px-0">
          {/* logo */}
          <div>
            <Link className="text-blue font-semibold text-xl" href="/">SoftSync INC</Link>
          </div>

          {/* desktop nav */}
          <div className="hidden md:flex gap-5 text-[13px] font-bold uppercase">
            {navList}
          </div>

          {/* hamburger or close icon */}
          <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
            {
              openMenu ? <RiCloseFill size={25} /> : <RiMenu3Fill size={25} />
            }
          </div>

          {/* mobile nav */}
          <div className={`${openMenu ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-full'} transition-transform absolute top-0 left-0 w-1/2 h-screen bg-slate-400/95 flex flex-col p-10 gap-6 text-base font-medium duration-700`} onClick={() => setOpenMenu(false)}>
            {navList}
            <hr className="w-full border-lightGray" />

            <Link href="/contactUs" className="relative px-5 py-2 font-medium text-white group text-center">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blueLight group-hover:bg-blue group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue group-hover:bg-blueLight group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span className="relative">Contact Us</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <Link href="/contactUs" className="relative px-5 py-2 font-medium text-white group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blueLight group-hover:bg-blue group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue group-hover:bg-blueLight group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span className="relative">Contact Us</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;