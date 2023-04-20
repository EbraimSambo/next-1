import Link from "next/link";
import styles from '../../../styles/Home.module.css'

export const Header = ()=>{
    return(
        <header class={styles.headerMain}>
            <Link href='/' >Logo</Link>
            <nav>
            <Link  passHref href='/' >Home</Link>
            <Link passHref href='/events' >Eventos</Link>
            <Link passHref href='/about-us' >Sobre</Link>
            </nav>
        </header>  
    )
}
