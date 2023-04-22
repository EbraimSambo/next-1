import Link from 'next/link';
import Image from 'next/image';

const SingleEventPage = ({data}) =>{
    return(
           <div>  
            <h2> {data.title} </h2>
            <Image alt={data.title} src={data.image} width={500} height={400} />
            <p> {data.description} </p>
            <input type='email' placeholder='Insira seu email' /> <button> Enviar</button>
           </div>

    )
}

export default SingleEventPage


export async function getStaticPaths() {
    const data = await import('../../../data/date.json');
    const allEvents = data.allEvents;
  
    const allPaths = allEvents.map((path) => {
      return {
        params: {
          cat: path.city,
          id: path.id,
        },
      };
    });
  
    return {
      paths: allPaths,
      fallback: false,
    };
  }
  
  export async function getStaticProps(context) {
    const id = context.params.id;
    const { allEvents } = await import('../../../data/date.json');
    const eventData = allEvents.find((ev) => id === ev.id);
  
    return {
      props: { data: eventData },
    };
  }