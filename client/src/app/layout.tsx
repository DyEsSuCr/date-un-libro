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
      <body className='relative bg-[url("/hero.png")] min-h-screen min-w-full bg-cover bg-no-repeat bg-center px-4 before:absolute before:inset-0 before:bg-[#00000050]'>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
