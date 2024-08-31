import { useEffect, useState } from 'react';
import Image from 'next/image';
import Draggable from 'react-draggable';

const RotatingImage: React.FC = () => {
    const [rotation, setRotation] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => (prev + 1) % 360); // Augmente l'angle de 1 degré
        }, 20); // Met à jour toutes les 20ms pour un effet de rotation fluide

        return () => clearInterval(interval); // Nettoyage de l'intervalle à la fin
    }, []);

    return (
        <section className="bg-black w-full h-[500px] flex justify-between items-center p-10 border-inherit">
            <div className="flex-1 flex flex-col items-center">
                <Draggable>
                    <div
                        style={{
                            transform: `rotate(${rotation}deg)`,
                            transition: 'transform 0.02s linear',
                        }}
                    >
                        <Image
                            src="/info.jpg"
                            alt="image"
                            width={300}
                            height={300}
                            className="border-4 rounded-lg"
                        />
                    </div>
                </Draggable>
            </div>

            <div className="flex-1 ml-12">
                <h1 className="text-white text-3xl underline font-semibold decoration-2 mb-5 ml-50 font-serif">
                    Quelques réponses à vos questions
                </h1>
            
            </div>
        </section>
    );
};

export default RotatingImage;
