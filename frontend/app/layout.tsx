import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'
import { Header } from '@/components/Header' 
import { Footer } from '@/components/Footer'
import { AuthModal } from '@/components/AuthModal';


export const metadata: Metadata = {
  title: 'Ecommerce App',
  description: 'An ecommerce site built with Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <Header /> 
            <AuthModal />
            <main className="min-h-[80vh]">{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
