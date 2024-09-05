import Link from "next/link";


export const BlinkingButton = () => {

    return (
        <>
        
        <button
            className="bg-red-600 w-52 h-14 text-white   border-2 animate-blink  rounded border-black mt-8 leading-3 hover:scale-105 translate-x-0.5 duration-700 hover:bg-black hover:border-black"
            type="button"
          >
            Contactez-nous
          </button>
        
        </>
    )
}

export default BlinkingButton;
