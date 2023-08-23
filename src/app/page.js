"use client";
// importing components
import CustomNavbar from "./components/CustomNavbar";
import CallToAction from './components/CallToAction';
import History from './components/History';
import GameBenefit from './components/GameBenefit';
import ContactUs from './components/ContactUs';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 relative">

      <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
        <CustomNavbar />
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between  lg:flex">
        <CallToAction />
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-content   ">
        <h2 className="text-3xl w-full font-bold text-center leading-[1vw]"> History of XO game</h2>
        <div className="z-10 w-full max-w-5xl items-center justify-between  lg:flex">
          <History />
        </div>
      </div>

      <div className="z-10 w-full max-w-5xl  relative top-[-10vw]">
        <h2 className="text-3xl w-full font-bold text-center mx-auto  leading-[1vw]"> The benefits</h2>
        <div className="z-10 w-full max-w-5xl items-center justify-between  lg:flex ">
          <GameBenefit />

        </div>
      </div>

      <div className="z-10 w-full max-w-5xl  relative top-[8vw]">
        <h2 className="text-3xl w-full font-bold text-center mx-auto  leading-[1vw]"> Contact Us</h2>
        <div className="z-10 w-full max-w-5xl items-center justify-between  lg:flex ">
          <ContactUs />

        </div>
      </div>

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        {/* < BallAnimation /> */}
      </div>


      {/* < CustomFooter /> */}
    </main>
  );
}
