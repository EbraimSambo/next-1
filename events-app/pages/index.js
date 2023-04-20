import Head from 'next/head'
import { HomePage } from '@/src/components/home/home-page'
import { Header } from '@/src/components/header/header'
import { Inter } from 'next/font/google'
import { Footer } from '@/src/components/footer/footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Applicaçao de Eventos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomePage data={data} />

    </>
  )
}

export async function getServerSideProps(){
  const {events_categories} = await import ("../data/date.json")
  console.log(events_categories)
     return{
       props:{
         data: events_categories,
       }
     };
}