import Link from "next/link"
import Image from "next/image"

export const HomePage = ({data})=> {
       
    return(
      <div className="home_body">
        {data.map(ev =>
          <Link className="box" passHref  key={ev.id} href={`/events/${ev.id}`} >
            <div className="img"><Image alt={ev.title} height={400} width={400} src={ev.image} /></div>
            <div className="content">
              <h2> {ev.title} </h2>
              <p> {ev.description} </p>
            </div>

          </Link>
          )}
    </div>
    )

}

