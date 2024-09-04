
      "use client";

import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Header } from '../components/Header';
import Image from 'next/image';
import DropdownMenu from '../components/effets';
import AnimatedTextSection from '../components/carousel';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, message });
    };

    return (
        <>
            <Header />
            <AnimatedTextSection />
            <section className="bg-black w-full h-auto md:h-[500px] flex flex-col md:flex-row justify-between items-center p-6 md:p-10 border-inherit">
                <div className="flex-1 flex flex-col items-center mb-8 md:mb-0">
                    <Draggable>
                        <div>
                            <Image
                                src='/info.jpg'
                                alt='image'
                                width={300}
                                height={300}
                                className="border-4 rounded-lg animate-pulse hover:skew-y"
                            />
                        </div>
                    </Draggable>
                </div>

                <div className="flex-1 md:ml-12 text-center md:text-left">
                    <h1 className="text-white text-3xl underline font-semibold decoration-2 mb-5">
                        Quelques réponses à vos questions
                    </h1>
                    <DropdownMenu />
                </div>
            </section>

            <section className="relative flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40 p-8 md:p-20 bg-[url('/signup_brand_campaign_light_mode.png')] bg-contain ">
                {/* GIF de gauche */}
                <div className="hidden md:block absolute left-[-150px] top-[50%] ">
                
                </div>

                {/* Formulaire de contact */}
                <div className="flex flex-col items-center md:mr-8 hover:scale-105 transition-transform">
                    <h2 className="text-gray-400 text-shadow  hover:text-yellow-500  font-bold text-3xl md:text-4xl mb-6 font-poppins">
                        Formulaire
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="border-4 bg-gray-500 p-6 md:p-8 flex flex-col items-center space-y-6 w-full md:w-[450px]"
                    >
                        <div className="w-full flex flex-col items-center">
                            <label htmlFor="name" className="text-white w-full text-left">
                                Nom et prénom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Nom et prénom"
                                className="w-full h-10 md:h-12 px-3 mt-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <label htmlFor="email" className="text-white w-full text-left">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Email"
                                className="w-full h-10 md:h-12 px-3 mt-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <label htmlFor="message" className="text-white w-full text-left">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Message"
                                className="w-full h-40 md:h-48 px-3 mt-2"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-red-700 text-white rounded-md w-full h-10 md:h-12 mt-4"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>

                {/* Section de localisation */}
                <div className="flex flex-col items-center hover:scale-105 transition-transform">
                    <h2 className="text-gray-500 text-shadow  hover:text-yellow-500 font-bold text-3xl md:text-4xl mb-6 font-poppins">
                        Localisation
                    </h2>
                    <iframe
                        className="w-full border-4"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=9.4504308%2C0.4186372%2C9.4514308%2C0.4196372&amp;layer=mapnik"
                        width="900"
                        height="590"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                {/* GIF de droite */}
                <div className="hidden md:block absolute right-[-150px] top-[50%] ">
                
                </div>
            </section>
        </>
    );
}
    
  
