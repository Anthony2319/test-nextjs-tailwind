import Head from 'next/head'
import Navbar from '../components/layaout/navbar'
import Footer from '../components/layaout/footer' 


export default function Layaout({children, page}) {
    return (
        <div>

            <Head>
                <title>{page}</title>
            </Head>

            <header> 
                <Navbar />
            </header>

            {children} 

            <footer>
                <Footer />
            </footer>
            
        </div>
    )
}
