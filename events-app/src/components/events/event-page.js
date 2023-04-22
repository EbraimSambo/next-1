import React from "react";
import Link from 'next/link';
import Image from 'next/image';


const EventPage = ({ data }) => {
    return (
        <div>
            <h2 className="title">Nossos Eventos</h2>
           <div className="events">
            {data.map(ev =>(
               <Link className="card" passHref key={ev.id} href={`/events/${ev.id}`}>
                  <Image alt={ev.title} height={300} width={300} src={ev.image} />
                  <h2> {ev.title} </h2>
               </Link>
            )
            )}
           </div>
        </div>     
    );
  };
  
  export default EventPage;