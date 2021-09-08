import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Body from '../components/mc/body'

export default function mc() {
    return (
        <div>
            <Head>
                <title>Mandarin-Chocolate</title>
            </Head>
            
            <Navbar />
            <Body />
            <Footer />

        </div>
    )
}
