'use client'

import FactGenerator from '@/components/FactGenerator'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Home as HomeIcon, Quote } from 'lucide-react'


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col"> {/* Added flex-col to the main div */}

      <nav className="p-4 bg-white/50 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Button variant="ghost" className="hover:bg-slate-200">
            <Link href="/" className="flex items-center gap-2">
              <HomeIcon className="w-4 h-4" />
              Home
            </Link>
          </Button>
          <div className="flex gap-4">
            <Button variant="outline">
              <Link href="/fact" className="flex items-center gap-2">
                Random Facts
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/quote" className="flex items-center gap-2">
                <Quote className="w-4 h-4" />
                Quotes
              </Link>
            </Button>
          </div>
        </div>
      </nav>


      <main className="flex-1 flex flex-col items-center justify-center p-8 md:p-24"> 

        <div className="w-full max-w-2xl"> 
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Random Fact <span className='text-green-700'>Generator</span>
          </h1>
          <div className='flex justify-center items-center'>
          <FactGenerator />
          </div>
         
        </div>
      </main>
      <Footer /> 
    </div>
  )
}