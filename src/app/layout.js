
/* eslint-disable */
/* eslint-disable no-unused-vars, react/no-children-prop */
/* eslint-disable */
import './globals.css'
import { Inter } from 'next/font/google'
import MasterComponent from './Wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Casa Rural la Portella',
  description: 'Made by Blanche T',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <MasterComponent children={children}></MasterComponent>
      </body>
    </html>
  )
}
