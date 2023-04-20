import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const EventsPage = ({data}) =>{
    return(
        <div>
            <h2>Nossos Eventos</h2>
           <div>
            {data.map(ev =>(
               <Link passHref key={ev.id} href={`/events/${ev.id}`}>
                  <Image alt={ev.title} height={400} width={400} src={ev.image} />
                  <h2> {ev.title} </h2>
               </Link>
            )
            )}
           </div>
        </div>
     
    )
}

export default EventsPage

export async function getStaticProps (){
    const {events_categories} = await import("../../data/date.json");
    console.log(events_categories)
    return {
      props:{
        data: events_categories,
      },
        
    }
}