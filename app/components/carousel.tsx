import { useEffect, useState } from 'react';

const AnimatedTextSection: React.FC = () => {
    const [position, setPosition] = useState<number>(-100); // Position initiale en dehors de l'écran
    const [direction, setDirection] = useState<'right' | 'left'>('right'); // Direction initiale du mouvement

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => {
                if (direction === 'right') {
                    if (prev < window.innerWidth - 300) {
                        return prev + 5;
                    } else {
                        setDirection('left');
                        return prev;
                    }
                } else {
                    if (prev > -300) {
                        return prev - 5;
                    } else {
                        setDirection('right');
                        return prev;
                    }
                }
            });
        }, 20); // Change de position toutes les 20ms

        return () => clearInterval(interval);
    }, [direction]);

    return (
        <section
            style={{
                width: '100%',
                height: '400px',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/fab.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                padding: '80px',
                overflow: 'hidden', // Cache le texte en dehors de la section
            }}
        >
            <h2
                className="text-cyan text-8xl drop-shadow-lg "
                style={{ position: 'relative', left: `${position}px`, fontFamily:'poppins'}}
            >
                Contactez-nous
            </h2>
        </section>
    );
};

export default AnimatedTextSection;