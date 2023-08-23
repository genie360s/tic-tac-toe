import React from "react";
import Image from "next/image";


export default function History() {
    return (
        <>


            <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-10  px-2 relative top-[-8vw] ">
                <div class="w-full bg-white mx-auto shadow-xl outline outline-gray-100  rounded-lg outline-[0.5px] ">
                    <div class="grid grid-flow-col gap-1 w-full mx-auto px-5 py-5 ">
                        <div class="   col-span-1  h-[35vh] rounded-tl-lg rounded-bl-lg">
                            {/* <Image
                            src="../images/xo-fizzle.svg"
                            alt="xo-game"
                            className="py-10 mx-auto motion-safe:animate-bounce"
                            width={500}
                            height={310}
                            priority
                        /> */}

                            <div className="py-[5em]">
                                <video muted loop controls={false} >
                                    <source src="/videos/xo-game-animationr.mp4" type="video/mp4" />
                                    {/* Add more <source> elements for different video formats */}
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                        </div>
                        <div className="   col-span-2    rounded-tr-lg rounded-br-lg">
                            <p className="py-7 px-7 text-justify text-base">The history of tic-tac-toe dates back to ancient times, with its origins traced to the Romans and their game of &quot;terni lapilli.&quot; Over the centuries, the game evolved, and it acquired different names like &quot;noughts and crosses&quot; in Britain and &quot;tic-tack-toe&quot; in the late 1800s. The name &quot;tic-tac-toe&quot; might be derived from the sound of repetitive ticking during gameplay. The game has also been known by various other names and spellings, including &quot;tick tack toe&quot; and &quot;tit tack toe.&quot;

                                Tic-tac-toe&rsquo;s simplicity has allowed for numerous variations, such as Connect 4 and 3D versions using larger boards. Other games like Mojo, Toss Across, and Nine Men&rsquo;s Morris have drawn inspiration from tic-tac-toe&rsquo;s structure. The evolution of board games has transformed them from mere pastimes into tools for entertainment and bonding among family and friends. In contemporary society, board games, including sophisticated ones for adults, serve as platforms for fostering connections and enhancing relationships.</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}