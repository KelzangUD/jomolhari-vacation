"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./ui/NavLink";
import PrimaryButton from "./ui/PrimaryButton";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed xl:left-1/2 xl:-translate-x-1/2 z-150 top-0 xl:top-5 backdrop-blur-2xl xl:rounded-full bg-black/50 w-full  xl:w-10/11 2xl:w-11/15 2xl:max-w-9xl">
      <div className="hidden md:flex justify-between items-center w-stretch mx-auto px-10 2xl:px-20 py-3">
        <Link href="/">
          <button className="cursor-pointer transition delay-150 duration-300 ease-in hover:scale-110 pt-1">
            <Image src="./logo.svg" alt="logo" width={48} height={48} />
          </button>
        </Link>
        <div>
          <ul className="flex gap-5 items-center">
            <li className="flex-grow">
              <NavLink routeName="About Us" href="/about-us" />
            </li>
            <li className="flex-grow">
              <NavLink routeName="Trails" href="/trails" />
            </li>
            <li className="flex-grow">
              <NavLink routeName="Blogs" href="/blogs" />
            </li>
            <li className="flex-grow">
              <NavLink routeName="Gallery" href="/gallery" />
            </li>
            <li>
              <Link href="/contact-us">
                <PrimaryButton text="Contact Us" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center md:hidden w-stretch mx-auto px-5 py-3">
        <Link href="/">
          <button className="cursor-pointer transition delay-150 duration-300 ease-in hover:scale-110 pt-1">
            <Image src="./logo.svg" alt="logo" width={30} height={30} />
          </button>
        </Link>
        <button
          className="cursor-pointer transition delay-150 duration-300 ease-in hover:scale-110 pt-1"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <Image
            src="./Menu.svg"
            alt="menu"
            width={30}
            height={30}
            className="color-white"
          />
        </button>
        <ul
          className={`fixed top-0 left-0 z-50
              bg-black text-white
              h-screen w-screen
              p-4 shadow-lg font-semibold
              flex flex-col gap-1
              transform transition-transform duration-300 ease-in-out
              ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
        >
          <li className="flex justify-between items-center px-2">
            <Link href="/" onClick={() => setShowMenu(false)}>
              <button className="cursor-pointer pt-1">
                <Image src="./logo.svg" alt="logo" width={30} height={30} />
              </button>
            </Link>
            <button
              className="cursor-pointer border border-white rounded"
              onClick={() => setShowMenu(false)}
            >
              <Image
                src="./close.svg"
                alt="close-icon"
                width={30}
                height={30}
              />
            </button>
          </li>
          <li className="">
            <button onClick={() => setShowMenu(false)}>
              <NavLink routeName="About Us" href="/about-us" />
            </button>
          </li>
          <li className="">
            <button onClick={() => setShowMenu(false)}>
              <NavLink routeName="Trails" href="/trails" />
            </button>
          </li>
          <li className="">
            <button onClick={() => setShowMenu(false)}>
              <NavLink routeName="Blogs" href="/blogs" />
            </button>
          </li>
          <li className="">
            <button onClick={() => setShowMenu(false)}>
              <NavLink routeName="Gallery" href="/gallery" />
            </button>
          </li>
          <li className="mt-2">
            <Link href="/contact-us" onClick={() => setShowMenu(false)}>
              <PrimaryButton text="Contact Us" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
