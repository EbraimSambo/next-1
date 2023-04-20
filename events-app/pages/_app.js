import '@/styles/globals.css'
import { Header } from '@/src/components/header/header'
import { Footer } from '@/src/components/footer/footer'

export default function App({ Component, pageProps }) {
  return( 
    <>
     <Header />
     <Component {...pageProps} /> 
    <Footer /> 
    </>
    )
}
