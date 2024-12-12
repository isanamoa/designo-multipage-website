import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DESIGNO - Multipage Webapp',
  description: 'A multipage webapp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between text-black">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
