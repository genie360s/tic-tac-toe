// import Image from 'next/image'
"use client"

// importing components
// import React, { useState } from 'react';

import Square from '../components/Square';


export default function Game() {
  
  const sharedVariable = localStorage.getItem('username');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Hello World ! Its me you favorite js dev 😝 !
        Hi {sharedVariable}
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Square sharedVariable={sharedVariable}/>
          

        </div>
      </div>



    </main>
  )
}