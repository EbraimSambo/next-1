import React from "react";
import Image from "next/image";

const SingleEvents  = ({data}) =>{

    return(
        <div className="Single">  
         <h2> {data.title} </h2>
         <Image alt={data.title} src={data.image} width={500} height={400} />
         <p> {data.description} </p>
         <input type='email' placeholder='Insira seu email' /> <button> Enviar</button>
        </div>
 )
}



export default SingleEvents;