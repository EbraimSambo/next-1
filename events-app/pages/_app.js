import '@/styles/globals.css'
import '@/styles/general.sass'
import MainLayput from '@/src/components/layout/main-layout'

export default function App({ Component, pageProps }) {
  return( 
    <>
      <MainLayput>
            <Component {...pageProps} /> 
      </MainLayput>
    </>
    )
}
