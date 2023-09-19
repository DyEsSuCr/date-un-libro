import { NAVIGATION_PATHS } from '@/config/Constants'
import Link from 'next/link'

export function Header () {
  return (
    <header className='w-full flex py-4'>
      <nav className='flex items-center gap-12'>
        <Link href={NAVIGATION_PATHS.HOME}>
          <h2 className='font-medium text-3xl uppercase'>Date Un libro</h2>
        </Link>
        <ul className='flex gap-12'>
          <li>
            <Link href={NAVIGATION_PATHS.HOME}>
              Explorar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
