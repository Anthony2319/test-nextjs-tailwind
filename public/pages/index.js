import Head from 'next/head'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Body from '../components/body'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>

      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />
      <Header />
      <Body />
      <Footer />

    </div>
  )
}
