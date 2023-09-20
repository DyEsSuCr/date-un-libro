import type { Metadata } from 'next'

import { AuthContextProvider } from '@/context/AuthContext'
import { Header } from '@/components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Date un libro',
  description: 'Reseñas tus libros favoritos'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className='body'>
        <AuthContextProvider>
          <Header />
          <main className='grid grid-cols-1 h-full w-full md:grid-cols-2 justify-center border-x-2 border-t-2 p-16 relative max-w-[1900px]'>
            {children}
          </main>
        </AuthContextProvider>
      </body>
    </html>
  )
}
