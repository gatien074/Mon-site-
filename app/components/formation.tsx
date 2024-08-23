import Link from "next/link";


export const formation = () => {

    return (
        <>
        
        <header>
            <h1>My Blog</h1>
            <nav>
                <ul>
                    <Link href='/contact'>Home</Link>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        
        </>
    )
}

export default formation;

