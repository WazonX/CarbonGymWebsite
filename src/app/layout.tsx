import type { Metadata } from 'next'
import './globals.css'
import Header from './Common/Header'
import { Hedvig_Letters_Sans, Lato } from 'next/font/google'
import Footer from './Common/Footer'
import Scroll from './Common/Scroll'


// Projekt i wykonanie strony: Maksymilian Gembarzewski

const lato = Lato({
  subsets: ['latin'],
  weight: ['300'],
  style: ["normal","italic"]
})

export const metadata: Metadata = {
  title: 'Carbon Gym',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const styles = {
    marginTop: '20px',
    background:  'rgba(0, 0, 0, 0.65)',
    // paddingBottom: '20vw',
    minHeight: '80vh',
  };
  return (
    <html lang="pl"  >
      <body className={lato.className}> 
      <p hidden>
        Projekt i wykonanie strony: Maksymilian Gembarzewski
      </p> 
      <div className="bg" ></div>
        <Scroll/>
              <Header/>
            <div style={styles} className="container pb-2 h-100 middle-row rounded text-white ">
              {children}
            </div>
            <Footer/>
      </body>
    </html>
  )
}
