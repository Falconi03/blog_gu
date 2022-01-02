import MainContainer from '../components/MainContainer.jsx'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
