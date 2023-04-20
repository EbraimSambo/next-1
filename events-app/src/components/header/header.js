import Link from "next/link";
import Image from "next/image";
const img = "../../../public/images/logo_black.png"
export const Header = ()=>{
    return(
        <header >
            <div>
                <div className="topNav">
                    <Link href='/' > <Image alt="Logo" src={"/images/logo_black.png"} width={40} height={40} /> </Link>
                    <nav>
                        <ul>
                            <li><Link  passHref href='/' >Home</Link></li>
                            <li><Link passHref href='/events' >Eventos</Link></li>
                            <li><Link passHref href='/about-us' >Sobre</Link></li>
                        </ul>
                    </nav>
                    
                </div>
            <h1>Nosso Sie</h1>
        </div>
        </header>  
    )
}
