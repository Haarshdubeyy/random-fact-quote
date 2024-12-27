'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select } from "@/components/ui/select"
import { generateFact } from '@/app/actions'
import { Loader2 } from 'lucide-react'

export default function FactGenerator() {
  const [category, setCategory] = useState<string>('history')
  const [fact, setFact] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateFact = async () => {
    setIsLoading(true)
    try {
      const newFact = await generateFact()
      setFact(newFact)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(fact)
      .then(() => {
        alert('Fact copied to clipboard!')
      })
      .catch(err => console.error('Failed to copy: ', err))
  }

  return (
    <Card className="w-[350px]">
      <CardContent>
        <Select onValueChange={setCategory} defaultValue={category}>
        </Select>
        {fact && (
          <p className="mt-4 text-sm">{fact}</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleGenerateFact} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            'Generate Fact'
          )}
        </Button>
        <Button onClick={handleCopyToClipboard} disabled={!fact || isLoading}>
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}

