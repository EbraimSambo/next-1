import Link from 'next/link';
import Image from 'next/image';

const CatEventPage = ({data}) =>{
    return(
        <div>
            <h2>Evento em Londres</h2>
            {data.map(ev=>(
                <Link key={ev.id} href={`${ev.city}/${ev.id}`}>
                <Image alt={ev.title} height={400} width={400} src={ev.image} />
                <h2> {ev.title} </h2>
                <p> {ev.description} </p>
                </Link>
                
            ))}
     </div>
    )
}

export default CatEventPage

export async function getStaticPaths() {
    const { events_categories } = await import('../../../data/date.json');
    const allPaths = events_categories.map((ev) => {
      return {
        params: {
          cat: ev.id.toString(),
        },
      };
    });
    console.log(allPaths);
    return {
      paths: allPaths,
      fallback: false,
    };
  }
  
  export async function getStaticProps(context) {
    console.log(context);
    const id = context?.params.cat;
    const { allEvents } = await import('../../../data/date.json');
  
    const data = allEvents.filter((ev) => ev.city === id);
  
    return { props: { data, pageName: id } };
  }