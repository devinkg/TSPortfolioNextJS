"use client";

import { LinksTypes } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links: Array<LinksTypes> = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className={
        "h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl"
      }
    >
      {/* LINKS */}
      <div className={"hidden md:flex gap-4 w-1/3"}>
        {links.map((link: LinksTypes) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className={"md:hidden lg:flex xl:w-1/3 xl:justify-center"}>
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
      {/* SOCIAL */}
      <div className={"hidden md:flex gap-4 w-1/3"}>
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
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className={"w-10 h-1 bg-black rounded origin-left"}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className={"w-10 h-1 bg-black rounded"}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className={"w-10 h-1 bg-black rounded origin-left"}
          ></motion.div>
        </button>
        {/*  MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial={"closed"}
            animate={"opened"}
            className={
              "absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40"
            }
          >
            {links.map((link: LinksTypes) => (
              <motion.div key={link.title} variants={listItemVariants}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
