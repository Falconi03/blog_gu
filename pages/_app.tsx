import { AppProps } from 'next/app'


import MainContainer from '../components/MainContainer'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
  )
}

export default MyApp
