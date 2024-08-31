import { useState, useEffect } from 'react';

const DropdownMenu: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        // Automatically open the first menu item on load
        const timer = setTimeout(() => {
            setOpenIndex(0);
        }, 500); // Delay to start the animation

        return () => clearTimeout(timer);
    }, []);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='font-serif'>
            <div className="mb-8">
                <h3
                    className="text-white text-2xl font-semibold cursor-pointer"
                    onClick={() => toggleDropdown(0)}
                >
                    Quels sont les critères d'admission pour la formation gratuite en Informatique ?
                </h3>
                <div
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                        openIndex === 0 ? 'max-h-40' : 'max-h-0'
                    }`}
                >
                    <p className="text-white hover:text-black hover:bg-yellow-200 transition-colors mt-2 p-2 rounded">
                        Les critères varient en fonction des partenaires financiers. Pour plus de détails, contactez-nous.
                    </p>
                </div>
            </div>
            <div>
                <h3
                    className="text-white text-2xl font-semibold cursor-pointer"
                    onClick={() => toggleDropdown(1)}
                >
                    Quels sont les domaines spécifiques couverts par la formation ?
                </h3>
                <div
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                        openIndex === 1 ? 'max-h-40' : 'max-h-0'
                    }`}
                >
                    <p className="text-white hover:text-black hover:bg-yellow-200 transition-colors mt-2 p-2 rounded">
                        Nous couvrons deux (2) cohortes : le Référencement Digital et le Développement Web et Web Mobile.
                    </p>
                </div>
            </div>
            <div>
                <h3
                    className="text-white text-2xl font-semibold cursor-pointer"
                    onClick={() => toggleDropdown(1)}
                >
                    Quelle est la durée de la Formation?
                </h3>
                <div
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                        openIndex === 1 ? 'max-h-40' : 'max-h-0'
                    }`}
                >
                    <p className="text-white hover:text-black hover:bg-yellow-200 transition-colors mt-2 p-2 rounded">
                        Les apprenants seront amenes a suivre une formation intensive durant 9 mois.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;
