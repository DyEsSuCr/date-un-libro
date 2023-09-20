'use client'

import { NAVIGATION_PATHS } from '@/config/constants'
import { useAuthContext } from '@/context/AuthContext'
import Link from 'next/link'

export function ButtonAuth () {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) {
    return (
      <Link href={NAVIGATION_PATHS.LOGIN}>
        Iniciar sesión
      </Link>
    )
  }
}
