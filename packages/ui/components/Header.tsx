import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <header className="flex items-center justify-between w-full px-2 mt-5 border-b-2 pb-7 sm:px-4">
      <Link href="/" className="flex space-x-3">
        <h1 className="ml-2 text-2xl font-bold tracking-tight sm:text-4xl">
          <span className="pr-3">✍️</span>
          <span>describe4me</span>
        </h1>
      </Link>

      {/* <div className="hidden space-x-6 sm:block">
        {router.pathname !== '/login' && router.pathname !== '/register' && (
          <Link href="/login">Login</Link>
        )}
        {router.pathname !== '/register' && router.pathname !== '/login' && (
          <Link href="/register">Register</Link>
        )}
      </div> */}
    </header>
  )
}
