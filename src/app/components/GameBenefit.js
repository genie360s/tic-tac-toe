// benefits section
import React from "react";
import Image from "next/image";

export default function Benefit() {
    return (
        <div>
            <div className="grid grid-flow-col auto-cols-max gap-10">
                <div className="col-span-2 bg-gray-100 shadow-lg outline outline-1 outline-gray-300 rounded-lg  w-[20em] mx-auto px-1 py-3 relative top-[10em]">
                    <div className="  mx-auto relative  px-5 py-1 ">
                    
                        <Image className="rounded-lg" alt="" width={500} height={560} src="/images/focus.png" priority/>
                    </div>
                    <div className="-inset-3 py-1 relative top-5">
                        <button className=" bg-blue-600 text-white py-2 px-2 rounded-lg w-[21em] h-[4em] mx-auto font-bold">Focus</button>
                    </div>
                </div>
                <div className="col-span-2 bg-gray-100 shadow-lg outline outline-1 outline-gray-300 rounded-lg  w-[20em] mx-auto px-1 py-3 relative top-[10em]">
                    <div className="  mx-auto relative  px-5 py-1 ">
                        <Image className="rounded-lg" alt="" width={500} height={560} src="/images/strategy.png" />
                    </div>
                    <div className="-inset-3 py-1 relative top-5">
                        <button className=" bg-blue-600 text-white py-2 px-2 rounded-lg w-[21em] h-[4em] mx-auto font-bold">Strategy</button>
                    </div>
                </div>
                <div className="col-span-2 bg-gray-100 shadow-lg outline outline-1 outline-gray-300 rounded-lg  w-[20em] mx-auto px-1 py-3 relative top-[10em]">
                    <div className="  mx-auto relative  px-5 py-1 ">
                        <Image className="rounded-lg" alt="" width={500} height={560} src="/images/tactic.png" />
                    </div>
                    <div className="-inset-3 py-1 relative top-5">
                        <button className=" bg-blue-600 text-white py-2 px-2 rounded-lg w-[21em] h-[4em] mx-auto font-bold ">Tactic</button>
                    </div>
                </div>
            </div>
        </div>
    )
}