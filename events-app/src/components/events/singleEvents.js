import React from "react";
import Image from "next/image";

const SingleEvents  = ({data}) =>{
     const onSubmit =() =>{}
    return(
        <div className="Single">  
         <h2> {data.title} </h2>
         <Image alt={data.title} src={data.image} width={500} height={400} />
         <p> {data.description} </p>
         <form onSubmit={onSubmit}>
            <label for="">Registrar email</label>
          <input type='email' placeholder='Insira seu email' /> <button type="button"> Enviar</button>
         </form>
       
        </div>
 )
}



export default SingleEvents;