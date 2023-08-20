// NavBar
import React from "react";
import Link from 'next/link'

export default function CustomNavbar() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 w-full text-base  font-medium tracking-wide">
        <div className="flex items-center flex-shrink-0 text-black mr-6 font-bold">XO Games</div>
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <div className="px-5">Home</div>
          <div className="px-5">About us</div>
          <div className="px-5">Benefits</div>
          <div className="px-5">Contact Us</div>
        </div>
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <button className="bg-transparent rounded-full outline outline-1 outline-orange-400 hover hover:bg-orange-400  px-5 py-2">Sign in</button>
        </div>
    </nav>
    </>
  );
}