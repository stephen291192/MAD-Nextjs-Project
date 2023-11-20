import Image from 'next/image'
import Header from './header'
import HomePage from './homePage'
import Footer from './footer'

import Link from 'next/link';
export default function Home() {
  return (
   <> 
   {/* <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/features">102Features</Link>
            </li>
            <li>
              <Link href="/blog/hello-world">Blog Post</Link>
            </li>
          </ul> */}
   <Header />
   <HomePage /> 
   <Footer />
   </>
    
  )
}
