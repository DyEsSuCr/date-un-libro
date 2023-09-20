import { NAVIGATION_PATHS } from '@/config/constants'
import Link from 'next/link'
import { ButtonAuth } from './ButtonAuth'

export function Header () {
  return (
    <header className='relative w-full flex py-4'>
      <nav className='w-full flex items-center gap-12 justify-between'>

        <div className='flex items-center gap-12'>
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
        </div>

        <ButtonAuth />
      </nav>
    </header>
  )
}
