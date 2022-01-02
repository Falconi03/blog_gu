import Header from './Header.jsx'
import Footer from './Footer.jsx'


export default function MainContainer({children}) {
    return(
        <>
            <Header>{children}</Header>
            <div>{children}</div>
            <Footer></Footer>
        </>
        
    )
}