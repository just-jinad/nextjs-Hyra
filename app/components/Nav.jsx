"use client";
import { Button, Navbar } from "flowbite-react";
import React from 'react';
import Link from 'next/link';
const Navbarcom = () => {
  return (
    <div>
    <Navbar fluid rounded className="fixed bg-white w-full">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center text-2xl font-semibold font-inter text-blue-700">Hyra</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <div className="flex justify-between -mt-6 w-full">
      <Navbar.Collapse className="mx-auto mt-2 md:mt-0 ">
        <div className="md:flex grid  bg-slate-100 md:bg-white justify-between w-fll py-4 px-2 md:w-72 md:ms-24">
        <Link href="/" className="text-[15px] mt-4 md:mt-0">Home</Link>
        <Link href="/ourteaching" className="text-[15px] mt-4 md:mt-0">Our Teachings</Link>
        <Link href="/about" className="text-[15px] mt-4 md:mt-0" >About Us</Link>
        </div>
      </Navbar.Collapse>
      <div className="float-end">
      <div className="md:block hidden">
         <Link href="/signup" type="button" className="text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-4 py-2 text-center ">Sign Up</Link>
            <button type="button" className="text-white bg-blue-900 py-2 ms-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-6 text-center "><Link href="/login">Log in</Link></button>
         </div>
      </div>
      </div>

    </Navbar>
    </div>
  );
};

export default Navbarcom;
