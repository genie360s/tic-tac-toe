
import React, {useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import supabase from '../../../supabase';
import bcrypt from 'bcryptjs';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const { data, error } = await supabase
                .from('user')
                .select('*')
                .eq('email', email)
                .single();
            if (error) throw error;
            if (data) {
                const match = await bcrypt.compare(password, data.password);
                if (match) {
                    setUser(data);
                    localStorage.setItem('username', data.username); // Store the username in local storage
                    router.push('/game');
                } else {
                    setError('Invalid email or password');
                }
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error(error);
            setError('Something went wrong');
        }
    };

    useEffect(() => {
        if (user) {
            const fetchUsername = async () => {
                try {
                    const { data, error } = await supabase
                        .from('user')
                        .select('username')
                        .eq('id', user.id)
                        .single();
                    if (error) throw error;
                    if (data) {
                        console.log(`Welcome, ${data.username}!`);
                        
                        setUsername(data.username);
                    }
                } catch (error) {
                    console.error(error);
                }
            };
            fetchUsername();
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <>
            <div className="w-full grid grid-flow-col auto-cols-max gap-1 relative top-[5vw] mx-auto">
                <div className="bg-sky-200">
                    <div>
                        <Image alt="" className="" width={470} height={500} src="/images/contact_us.jpeg" />
                    </div>
                </div>
                <div className="bg-sky-200 px-[4em] ">
                    <h2 className="font-bold text-center text-2xl relative top-[13vw]">Welcome Back !</h2>
                    <p className="text-center relative top-[13vw] text-gray-500 w-96 mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ratione possimus.
                    </p>
                    <div className="relative top-[15vw] ">
                        <form onSubmit={handleSubmit} className="mx-auto">
                            <div className="grid grid-flow-row ">
                                <div className="mx-auto ">
                                    <div className="mx-auto  mt-5">
                                        <input
                                            className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3"
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="mx-auto mt-5">
                                        <input
                                            className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3"
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                    <div className="mx-auto mt-5">
                                        <button
                                            type="submit"
                                            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full w-full"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    {error && (
                                        <div className="mx-auto mt-5">
                                            <p className="text-red-500">{error}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
    //                                             required
    //                                             placeholder="Enter email"
    //                                             value={email}
    //                                             onChange={(event) => setEmail(event.target.value)}
    //                                         />
    //                                     </div>
    //                                     <div className="mx-auto  mt-5">
    //                                         <input
    //                                             className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3"
    //                                             type="password"
    //                                             name="password"
    //                                             id="password"
    //                                             required
    //                                             placeholder="Enter password"
    //                                             value={password}
    //                                             onChange={(event) => setPassword(event.target.value)}
    //                                         />
    //                                     </div>
    //                                     <div className="mx-auto mt-5">
    //                                         <button className="py-3 w-[30em] hover:bg-orange-500 bg-orange-400 rounded-lg font-bold text-white">
    //                                             Login
    //                                         </button>
    //                                     </div>
    //                                     {error && <p className="text-red-500 text-center mt-5">{error}</p>}
    //                                 </div>
    //                             </div>
    //                         </form>
    //                     </div>
    //                 </div>
    //             </div>
    //         </>
    //     );
    // }
    
//     return (
//         <>
//         <div className=" w-full grid grid-flow-col auto-cols-max  gap-1 relative top-[5vw] mx-auto " >
//                 <div className=" bg-sky-200">
//                     <div>
//                         <Image alt="" className="" width={470} height={500} src="/images/contact_us.jpeg" />
//                     </div>
//                 </div>
//                 <div className="bg-sky-200 px-[4em] ">
//                     <h2 className="font-bold text-center text-2xl relative top-[13vw]">Welcome Back !</h2>
//                     <p className="text-center relative top-[13vw] text-gray-500 w-96 mx-auto">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ratione possimus.
//                     </p>
//                     <div className=" relative top-[15vw] ">
//                         <form action="" method="post" className="mx-auto">
//                             <div className="grid grid-flow-row ">
//                                 <div className="mx-auto ">
                                    
//                                     <div className="mx-auto  mt-5">
//                                         <input className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3" type="email" name="email" id="email" required placeholder="Enter email" />
//                                     </div>
//                                     <div className="mx-auto  mt-5">
//                                         <input className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3" type="password" name="password" id="email" required placeholder="Enter password" />
//                                     </div>
//                                     <div className="mx-auto mt-5"><button className=" py-3 w-[30em] hover:bg-orange-500  bg-orange-400 rounded-lg font-bold text-white"> login </button></div>
//                                 </div>
                                
                                
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }