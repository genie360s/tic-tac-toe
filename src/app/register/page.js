// import Image from 'next/image'
'use client'
import React from 'react';
import Register from '../components/Register';
import CustomNavbar from '../components/CustomNavbar';
// importing components


export default function Game() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
        <CustomNavbar />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
        <Register/>
      </div>



    </main>
  )
}