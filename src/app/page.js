"use client";
import Image from 'next/image'
// importing components
import CustomNavbar from "./components/CustomNavbar";
import CallToAction from './components/CallToAction';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
    
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <CustomNavbar />
      
      </div>
      <CallToAction />

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        {/* < BallAnimation /> */}
      </div>
      

      {/* < CustomFooter /> */}
    </main>
  );
}
