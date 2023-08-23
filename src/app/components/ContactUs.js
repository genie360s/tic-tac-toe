import React from "react";
import Image from "next/image";

export default function ContactUs() {
    return (
        <>
            <div className=" w-full grid grid-flow-col auto-cols-max  gap-1 relative top-[5vw] mx-auto " >
                <div className=" bg-sky-200">
                    <div>
                        <Image alt="" className="" width={470} height={500} src="/images/contact_us.jpeg" />   
                    </div>
                </div>
                    <div className="bg-sky-200 px-[4em] ">
                        <h2 className="font-bold text-center text-2xl relative top-[13vw]">Contact us today !</h2>
                        <p className="text-center relative top-[13vw] text-gray-500 w-96 mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ratione possimus.
                        </p>
                        <div className=" relative top-[15vw] ">
                            <form action="" method="post" className="mx-auto">
                                <div className="grid grid-flow-row ">
                                    <div className="mx-auto ">
                                        <div className="mx-auto">
                                            <input className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3" type="text" name="visitor_name" id="visitor_name" required placeholder="Enter name" />
                                        </div>
                                        <div className="mx-auto  mt-5">
                                            <input className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3" type="email" name="email" id="email" required placeholder="Enter email" />
                                        </div>

                                    </div>
                                    <div className="mx-auto  mt-5">
                                        <textarea className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3" type="" name="visitor_name" id="visitor_name" required placeholder="Talk to us"></textarea>

                                    </div>
                                    <div className="mx-auto mt-5"><button className=" py-3  w-[26em] bg-orange-400 rounded-lg text-white">Contact Us</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </>
        )
}