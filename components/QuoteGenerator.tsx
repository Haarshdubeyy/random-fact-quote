'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateQuote } from '@/app/actions'
import { Loader2 } from 'lucide-react'

export default function QuoteGenerator() {
  const [quote, setQuote] = useState<{ quote: string; author: string } | null>(null)
  const [category, setCategory] = useState<string>('happiness')
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateQuote = async () => {
    setIsLoading(true)
    try {
      const newQuote = await generateQuote(category)
      setQuote(newQuote)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopyToClipboard = () => {
    if (quote) {
      const textToCopy = `"${quote.quote}" - ${quote.author}`
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert('Quote copied to clipboard!')
        })
        .catch(err => console.error('Failed to copy: ', err))
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Generate a Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <Select onValueChange={setCategory} defaultValue={category}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="happiness">Happiness</SelectItem>
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="love">Love</SelectItem>
            {/* <SelectItem value="wisdom">Wisdom</SelectItem> */}
          </SelectContent>
        </Select>
        {quote && (
          <div className="mt-4 space-y-2">
           <p className="text-sm italic">{"\"" + quote.quote + "\""}</p>
            <p className="text-sm font-semibold">- {quote.author}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleGenerateQuote} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            'Generate Quote'
          )}
        </Button>
        <Button onClick={handleCopyToClipboard} disabled={!quote || isLoading}>
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}

// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { generateQuote } from '@/app/actions'
// import { Loader2 } from 'lucide-react'

// export default function QuoteGenerator() {
//   const [quote, setQuote] = useState<{ quote: string; author: string } | null>(null)
//   const [category, setCategory] = useState<string>('happiness')
//   const [isLoading, setIsLoading] = useState(false)

//   const handleGenerateQuote = async () => {
//     setIsLoading(true)
//     try {
//       const newQuote = await generateQuote(category)
//       setQuote(newQuote)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Quote Generator</CardTitle>
//       </CardHeader>
//       <CardContent>
//         {quote ? (
//           <div className="text-center">
//             <p className="text-xl font-semibold">&ldquo;{quote.quote}&rdquo;</p>
//             <p className="mt-2 text-gray-600">&mdash; {quote.author}</p>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">Generate a quote to see it here.</p>
//         )}
//       </CardContent>
//       <CardFooter className="flex flex-col items-center gap-4">
//         <Select onValueChange={setCategory} value={category}>
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="Select a category" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="happiness">Happiness</SelectItem>
//             <SelectItem value="inspiration">Inspiration</SelectItem>
//             <SelectItem value="life">Life</SelectItem>
//           </SelectContent>
//         </Select>
//         <Button onClick={handleGenerateQuote} disabled={isLoading}>
//           {isLoading ? <Loader2 className="animate-spin" /> : 'Generate Quote'}
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }