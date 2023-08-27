// NavBar
import React from "react";
import Link from 'next/link'

export default function CustomNavbar() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 w-full text-base  font-medium tracking-wide">
        <div className="flex items-center flex-shrink-0 text-black mr-6 font-bold">
          <Link href="/" className="font-bold text-2xl">XO Games</Link>
          </div>
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <div className="px-5  ">
            <Link href="/" className="p-2 hover:border-b-4 hover:border-orange-400">Home</Link>
            </div>
          <div className="px-5">
            <Link href="/#history" className="p-2 hover:border-b-4 hover:border-orange-400">History</Link>
            </div>
          <div className="px-5">
            <Link href="/#benefits" className="p-2 hover:border-b-4 hover:border-orange-400">Benefits</Link>
            </div>
          <div className="px-5">
            <Link href="/#contactus" className="p-2 hover:border-b-4 hover:border-orange-400">Contact us</Link>
            </div>
        </div>
        <div className="flex items-center flex-shrink-0 text-black ">
          <Link href="/login"><button className="bg-transparent rounded-lg outline outline-1 outline-orange-400 hover hover:bg-orange-400 hover:text-white px-5 py-2">Sign in</button>  </Link>
        </div>
    </nav>
    </>
  );
}