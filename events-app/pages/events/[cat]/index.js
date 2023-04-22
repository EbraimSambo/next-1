import CatEvents from '@/src/components/events/catEvent';
const CatEventPage = ({data, pageName}) =>{
   return(
      <CatEvents data={data} pageName={pageName} />
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