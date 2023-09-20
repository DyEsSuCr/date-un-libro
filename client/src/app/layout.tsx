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
      <body className='relative flex justify-center items-center px-4 py-20 overflow-hidden bg-[url("/hero.png")] h-[100dvh] min-w-full bg-cover bg-no-repeat bg-center before:absolute before:inset-0 before:bg-[#00000050]'>
        <AuthContextProvider>
          <Header />
          <main className='grid grid-cols-1 h-full w-full md:grid-cols-2 justify-center border-x-2 border-t-2 px-4 relative'>
            {children}
          </main>
        </AuthContextProvider>
      </body>
    </html>
  )
}
