import Image from 'next/image'
import Header from './header'
import HomePage from './homePage'
import Footer from './footer'
import Head from 'next/head';
import Link from 'next/link';
export default function Home({children}) {
  return (
   <> 
  <Head>
        <title>MAD Nextjs Project</title>
        <meta name="description" content="Your enterprise AI platform that delivers on business outcomes – obsessively
        Ditch the treadmill. Ramp up to peak productivity" />
        <meta name="keywords" content="MAD, MAD Project" />
        <meta name="viewport" 
        content="width=device-width, initial-scale=1.0" />
  </Head>

   <Header />
   <HomePage /> 
   <main>{children}</main>
   <Footer />
   </>
    
  ) 
}
