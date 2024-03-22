"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        "h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
      }
    >
      <div className={"hidden md:flex gap-4"}>
        {links.map((link) => (
          <Link href={link.url} key={link.title} className="">
            {link.title}
          </Link>
        ))}
      </div>
      {/* LOGO */}
      <div className={"md:hidden lg:flex"}>
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center"
        >
          <span className={"text-white mx-2"}>Devin</span>
          <span
            className={
              "w-16 h-8 rounded bg-white text-black flex justify-center items-center"
            }
          >
            .Being
          </span>
        </Link>
      </div>
      <div className={"hidden md:flex gap-4"}>
        <Link href={"/"}>
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"/"}>
          <Image src="/dribble.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"/"}>
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"/"}>
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"/"}>
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"/"}>
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE UI */}
      <div className={"md:hidden"}>
        {/* MENU BUTTON */}
        <button
          className={"w-10 h-8 flex flex-col justify-between z-50 relative"}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <div className={"w-10 h-1 bg-white rounded"}></div>
          <div className={"w-10 h-1 bg-white rounded"}></div>
          <div className={"w-10 h-1 bg-white rounded"}></div>
        </button>
        {/*  MENU LIST */}
        {open && (
          <div
            className={
              "absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl"
            }
          >
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
