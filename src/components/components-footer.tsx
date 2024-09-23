'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function FooterComponent() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About MXRidee</h3>
            <p className="text-sm text-gray-600">MXRidee is a leading ride-hailing service in Minna, Nigeria, providing safe and reliable transportation for our community.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-teal-600">About Us</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-teal-600">Careers</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-teal-600">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-teal-600">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600">123 Main Street, Minna, Nigeria</p>
            <p className="text-sm text-gray-600">Email: support@mxridee.com</p>
            <p className="text-sm text-gray-600">Phone: +234 123 456 7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2024 MXRidee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}