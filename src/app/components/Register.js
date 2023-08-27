// register component
import { useState } from 'react';
import Image from 'next/image';


import supabase from '../../../supabase';
import bcrypt from 'bcryptjs';

import { useRouter } from 'next/navigation';

export default function Registers() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hashedPassword = await bcrypt.hash(password, 10);

        const { data, error } = await supabase
            .from('user')
            .insert([{ name, username, email, password : hashedPassword }]);

        if (error) {
            console.error(error);
        } else {
            console.log(data);
            console.log('success');
            router.push('/login');
            // window.location.href = '/login';
            
        }

        
    };

    return (
        <>
            <div className=" w-full grid grid-flow-col auto-cols-max  gap-1 relative top-[5vw] mx-auto ">
                <div className=" bg-sky-200">
                    <div>
                        <Image alt="" className="" width={470} height={500} src="/images/contact_us.jpeg" />
                    </div>
                </div>
                <div className="bg-sky-200 px-[4em] ">
                    <h2 className="font-bold text-center text-2xl relative top-[13vw]">Register Now !</h2>
                    <p className="text-center relative top-[13vw] text-gray-500 w-96 mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ratione possimus.
                    </p>
                    <div className=" relative top-[15vw] ">
                        <form onSubmit={handleSubmit} method="POST" className="mx-auto">
                            <div className="grid grid-flow-row ">
                                <div className="mx-auto ">
                                    <div className="mx-auto">
                                        <input
                                            className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3"
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            placeholder="Enter name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mx-auto mt-5">
                                        <input
                                            className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3"
                                            type="text"
                                            name="username"
                                            id="username"
                                            required
                                            placeholder="Enter username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="mx-auto  mt-5">
                                        <input
                                            className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3"
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mx-auto  mt-5">
                                        <input
                                            className="outline p-2 outline-2 shadow-md outline-gray-300 border-none w-[30em] focus:outline focus:outline-none focus:border-orange-500 focus:outline-2 focus:outline-orange-400 focus:outline-offset-0  rounded-lg text-sm px-3 py-3"
                                            type="password"
                                            name="password"
                                            id="password"
                                            required
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="mx-auto mt-5">
                                        <button type="submit" className=" py-3 w-[30em] hover:bg-orange-500  bg-orange-400 rounded-lg font-bold text-white">
                                            Register now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
