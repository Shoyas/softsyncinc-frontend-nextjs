"use client";

import { Layout } from "antd";
import Link from "next/link";

const { Header: NavigationMenu } = Layout;

const Navbar = ({ isActive }: { isActive: boolean }) => {
  return (
    <NavigationMenu className="top-nav">
      <div>
        <Link
          href="/"
          className="xl:text-5xl lg:text-4xl md:text-2xl text-xl text-center font-semibold mb-1 text-[#453F41] brand-link"
        >
          ZARaN IT
        </Link>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <h4>
            <Link
              href="/"
              className={`lg:text-2xl md:text-xl text-lg text-[#453F41]${
                isActive ? "text-[#0C5ADB]" : "text-[#453F41]"
              }`}
            >
              Home
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link
              href="/about"
              className="text-[#453F41] lg:text-2xl md:text-xl text-lg"
            >
              About
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link
              href="/works"
              className="text-[#453F41] lg:text-2xl md:text-xl text-lg"
            >
              Works
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link
              href="/blogs"
              className="text-[#453F41] lg:text-2xl md:text-xl text-lg"
            >
              Blogs
            </Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-[#323232] rounded-full hover:bg-white group"
            >
              <span className="w-60 h-48 rounded rotate-[-40deg] bg-[#0C5ADB] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Contact
              </span>
            </Link>
          </h4>
        </li>
      </ul>
    </NavigationMenu>
  );
};

export default Navbar;
