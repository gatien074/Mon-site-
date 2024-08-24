import React, { useState, useEffect } from 'react';
import {Header} from '../components/Header';
import Image from 'next/image';


export default function contact(){
    return (
        <>


        <Header />
        <section style={{width:'100%',height:'400px',
             backgroundImage: `url('/informaticienne.jpg')`,
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             color: 'white',
             padding: '80px',
     
        }}>
        <h2 className='text-white text-8xl capitalize drop-shadow-lg '>Contactez-Nous</h2>
        </section>
        <section className="bg-[#27577A] w-full h-[400px] flex justify-between items-center p-40 border-inherit">
            <Image src='/informe.jpg' alt='image' width={480} height={480}></Image>
            
            <div className="flex-1 ml-6">
              <h1 className="text-white text-3xl underline decoration-2 gap-10 m-7">Quelques réponses à vos questions</h1>
                <div className="mb-4">
                    <h3 className="text-white text-xl font-semibold">Quels sont les critères dadmission pour la formation gratuite en Informatique ?</h3>
                    <p className="text-white mt-2">
                        Les critères varient en fonction des partenaires financiers. Pour plus de détails, contactez-nous.
                    </p>
                </div>
                <div>
                    <h3 className="text-white text-xl font-semibold">Quels sont les domaines spécifiques couverts par la formation ?</h3>
                    <p className="text-white mt-2">
                        Nous couvrons deux (2) cohortes : le Référencement Digital et le Développement Web et Web Mobile.
                    </p>
                </div>
                <div>
                    <h3></h3>
                </div>
            </div>
        </section>
  <section style={{ display: 'flex', justifyContent: 'space-between', padding: '80px' }} >
                {/* Contact Form */}
                <div style={{ flex: 1, marginRight: '20px',display: 'block', alignItems:'center',borderColor:'rgba(255,255,255)'}}>
                
                <form className="border-4 bg-black p-6 flex flex-col items-center space-y-6">
    <div className="w-full flex flex-col items-center">
        <label htmlFor="name" className="text-white w-full text-left">Nom et prénom</label>
        <input 
            type="text" 
            id="name" 
            name="name et prenom" 
            required 
            placeholder="Nom et prénom" 
            className="w-80 h-10 px-3 mt-2"
        />
    </div>
    <div className="w-full flex flex-col items-center">
        <label htmlFor="email" className="text-white w-full text-left">Email</label>
        <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder="Email" 
            className="w-80 h-10 px-3 mt-2"
        />
    </div>
    <div className="w-full flex flex-col items-center">
        <label htmlFor="message" className="text-white w-full text-left">Message</label>
        <textarea 
            id="message" 
            name="message" 
            required 
            placeholder="Message" 
            className="w-80 h-40 px-3 mt-2"
        ></textarea>
    </div>
    <button 
        type="submit" 
        className="bg-red-700 text-white rounded-md w-80 h-10 mt-4"
    >
        Envoyer
    </button>
</form>

                </div>

                {/* GPS Location */}
                <div style={{ flex: 1 }}>
                    <h2>Notre emplacement</h2>
                    <iframe
                        src="https://https://www.google.com/maps/@0.4186372,9.4504308,17z"
                        width="100%"
                        height="490"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
          
        </>
    )
}
