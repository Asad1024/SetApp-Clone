import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Setapp — Hero clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-bg-dark text-white font-poppins">
        <Navbar />
        <main>
          <Hero />
        </main>
        <div className="border-t border-gray-800"></div>
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}
