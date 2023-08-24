// CTA
import React from "react";
import Link from 'next/link'
import Image from 'next/image'

export default function CallToAction() {
    return (
        <>
            
                <div className="flex items-center justify-between flex-wrap  w-full text-base  font-medium tracking-wide p-6  relative top-[5vw]">
                    <div className=" text-5xl w-[55vw] font-bold text-center mx-auto py-4 leading-[1vw]]">
                        Improve your  <strong> <span className="transition-colors duration-150 text-orange-400 animate-pulse">focus</span></strong> , <strong> <span className="transition-colors duration-150 text-sky-700 animate-pulse">strategy</span></strong>
                        & <strong> <span className="transition-colors duration-150 text-green-800 animate-pulse">tactic</span></strong> for a health mind.
                    </div>
                    <div className=" text-lg w-[45vw] mx-auto font-light text-center py-4">
                        Play XO game for fun , with your friends, family or in  a hackathon
                        as an energizer.
                    </div>
                    <div className="  mx-auto py-4">
                        <button className=" rounded-lg bg-orange-400 text-white hover hover:bg-orange-500 hover:shadow-lg hover:-translate-y-1 w-96  px-5 py-3 transition duration-150">Start playing XO</button>
                    </div>
                    <div className=" w-[50vw]  mx-auto py-[5em]">
                        <Image
                            src="../images/xo-fizzle.svg"
                            alt="xo-game"
                            className="py-10 mx-auto motion-safe:animate-bounce"
                            width={500}
                            height={310}
                            priority
                        />
                    </div>

                </div>
            
        </>
    );
}