// import Image from 'next/image'
import React from 'react';
// importing components
import Square from './components/Square';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Hello World ! Its me you motherfucker !
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Square />

        </div>
      </div>



    </main>
  )
}

