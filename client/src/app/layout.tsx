import { AuthContextProvider } from '@/context/AuthContext'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Date un libro',
  description: 'Reseñas tus libros favoritos'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className='bg-[url("/hero.png")] min-h-screen min-w-full bg-cover bg-no-repeat bg-center'>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
