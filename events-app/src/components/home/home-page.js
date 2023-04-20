import Link from "next/link"
import Image from "next/image"
import styles from '../../../styles/Home.module.css'
export const HomePage = ({data})=> {
       
    return(
        <main className={styles.main}>
        {data.map(ev =>
          <Link passHref className={styles.box} key={ev.id} href={`/events/${ev.id}`} >
            <Image alt={ev.title} height={400} width={400} src={ev.image} />
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </Link>
          )}
        </main>
    )

}

