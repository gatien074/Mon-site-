import Main from "../components/Main";
import Link from 'next/link';
import Footer from "./Footer";

const Detaille = () => {
    return (
        <>
            <Main />
            <section className="bg-gray-900 py-12 md:py-24">
                <div className="flex flex-col items-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-6">
                        Développeur web
                    </h1>
                    <Link href="/formations">
                        <button
                            className="bg-red-600 text-white border-2 border-black rounded mb-12 leading-3 hover:bg-black hover:border-black transform transition-transform duration-150 hover:scale-105 w-full max-w-xs md:max-w-sm h-12 md:h-14 px-4"
                            type="button"
                        >
                            En savoir plus
                        </button>
                    </Link>
                </div>
            </section>

            <section className="py-12 md:py-24">
                <div className="flex flex-col items-center text-center px-4">
                    <h1 className="text-black text-3xl md:text-5xl font-bold mb-6">
                        Référent digital
                    </h1>
                    <Link href="/referents">
                        <button
                            className="bg-red-600 text-white border-2 border-black rounded mb-12 leading-3 hover:bg-black hover:border-black transform transition-transform duration-150 hover:scale-105 w-full max-w-xs md:max-w-sm h-12 md:h-14 px-4"
                            type="button"
                        >
                            En savoir plus
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Detaille;
