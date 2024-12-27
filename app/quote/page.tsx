'use client'

import QuoteGenerator from '@/components/QuoteGenerator'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Home as HomeIcon, Quote } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">

      <nav className="p-4 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Button variant="ghost" className="hover:bg-gray-300 border-2 border-black">
            <Link href="/" className="flex items-center gap-2">
              <HomeIcon className="w-4 h-4" />
              Home
            </Link>
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" className="border-2 border-black hover:bg-gray-300">
              <Link href="/fact" className="flex items-center gap-2">
                Random Facts
              </Link>
            </Button>
            <Button variant="outline" className="border-2 border-black hover:bg-gray-300">
              <Link href="/quote" className="flex items-center gap-2">
                <Quote className="w-4 h-4" />
                Quotes
              </Link>
            </Button>
          </div>
        </div>
      </nav>


      <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center">

        <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Random Quote <span className="text-blue-600">Generator</span>
          </h1>
          <div className="w-full max-w-2xl  flex justify-center items-center">
            <QuoteGenerator />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}