import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import CartProvider from '@/Provider/CartProvider'

const popins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Mobile shop',
  description: 'Mobile for everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${popins.className} text-slate-700`}>
        <CartProvider>

          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className='flex-grow'>
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html >
  )
}
