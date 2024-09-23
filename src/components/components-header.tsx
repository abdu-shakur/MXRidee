'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Car } from 'lucide-react'

export function HeaderComponent() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-teal-600" />
          <span className="text-2xl font-bold text-teal-600">MXRidee</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/book-ride" className="text-gray-600 hover:text-teal-600">Request Ride</Link>
          <Link href="/#" className="text-gray-600 hover:text-teal-600">About</Link>
          <Link href="/support" className="text-gray-600 hover:text-teal-600">Support</Link>
        </nav>
        <div className="flex items-center space-x-2">
          
          <Link href="/login">Log In</Link>
          <Link href={"/register"}>Sign Up</Link>
        </div>
      </div>
    </header>
  )
}