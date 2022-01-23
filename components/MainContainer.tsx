import Header from './Header'
import Footer from './Footer'


export default function MainContainer({children}) {
    return(
        <>
            <Header></Header>
            <div>{children}</div>
            <Footer></Footer>
        </>
        
    )
}