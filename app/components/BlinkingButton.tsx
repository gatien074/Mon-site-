import Link from "next/link";


export const BlinkingButton = () => {

    return (
        <>
        
        <button

            className="bg-red-600 w-52 h-14 text-white animate-blink border-2 ml-24 rounded border-black  mt-8 leading-3 hover:scale-105 translate-x-0.5 duration-75 hover:bg-black hover:border-black"
            type="button"
          >
            Contactez-nous
          </button>
        
        </>
    )
}

export default BlinkingButton;


