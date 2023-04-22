import React from "react";
import Link from "next/link";
import Image from "next/image";

const CatEvents = ({data, pageName}) =>{

        return(
            <div>
               <h2 className="title"> Eventos em {pageName} </h2>
               <div className="eventsCat">  
                {data.map(ev=>(
                    <Link className="card" key={ev.id} href={`${ev.city}/${ev.id}`}>
                    <Image alt={ev.title} height={400} width={400} src={ev.image} />
                    <h2> {ev.title} </h2>
                    <p> {ev.description} </p>
                    </Link>
                ))}
                
                </div>
         </div>
    )

}

export default CatEvents;