"use client";

import React, { useState } from 'react';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Draggable from 'react-draggable';
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
            <Main />
            <AnimatedTextSection />
            <section className="bg-black w-full h-auto flex flex-col md:flex-row justify-between items-center p-6 md:p-10 border-inherit">
                <div className="flex-1 flex flex-col items-center mb-8 md:mb-0">
                    <Draggable>
                        <div className="w-full max-w-xs md:max-w-md">
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
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl underline font-semibold decoration-2 mb-5">
                        Quelques réponses à vos questions
                    </h1>
                    <DropdownMenu />
                </div>
            </section>

            <section className="relative flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 p-6 md:p-12 bg-[url('/signup_brand_campaign_light_mode.png')] bg-cover bg-center">
                {/* GIF de gauche */}
                <div className="hidden md:block absolute left-[-100px] top-[50%]">
                    {/* Ajoutez votre GIF ici si nécessaire */}
                </div>

                {/* Formulaire de contact */}
                <div className="flex flex-col items-center md:mr-8 hover:scale-105 transition-transform w-full md:w-[450px]">
                    <h2 className="text-gray-400 text-shadow hover:text-yellow-500 font-bold text-2xl sm:text-3xl md:text-4xl mb-6 font-poppins">
                        Formulaire
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="border-4 bg-gray-500 p-4 md:p-6 flex flex-col items-center space-y-6 w-full"
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
                                className="w-full h-32 md:h-40 px-3 mt-2"
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
                <div className="flex flex-col items-center hover:scale-105 transition-transform p-4 w-full max-w-md">
                    <h2 className="text-gray-500 text-shadow hover:text-yellow-500 font-bold text-2xl sm:text-3xl md:text-4xl mb-6 font-poppins">
                        Localisation
                    </h2>
                    <iframe
                        className="w-full border-4"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=9.4504308%2C0.4186372%2C9.4514308%2C0.4196372&amp;layer=mapnik"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                {/* GIF de droite */}
                <div className="hidden md:block absolute right-[-100px] top-[50%]">
                    {/* Ajoutez votre GIF ici si nécessaire */}
                </div>
            </section>
            <Footer />
        </>
    );
}
