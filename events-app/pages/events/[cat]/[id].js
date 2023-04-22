import SingleEvents from '@/src/components/events/singleEvents';

const SingleEventPage = ({data}) =>{
    return(
      <SingleEvents data={data} />
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