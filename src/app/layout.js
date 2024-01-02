import { Inter } from 'next/font/google'
import './globals.css'
import TopNavbar from './component/TopNavbar/TopNavbar'
import Navbar from './component/Navbar/Navbar'
import AnimatedCursor from 'react-animated-cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Exclusive',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AnimatedCursor
          color='0,0,0'
        /> */}
        <TopNavbar></TopNavbar>
        <Navbar></Navbar>
        <hr />
        {children}

      </body>
    </html>
  )
}
