'use server'


const API_KEY = process.env.API_KEY

interface Quote {
  quote: string;
  author: string;
}

async function fetchFactFromAPI(): Promise<string> {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/facts`, {
      headers: {
        'X-Api-Key': API_KEY!
      }
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch fact')
    }

    const data = await response.json()
    return data[0]?.fact || 'Could not generate a fact at this time.'
  } catch (error) {
    console.error('Error fetching fact:', error)
    return 'Could not generate a fact at this time.'
  }
}

async function fetchQuoteFromAPI(category: string = 'happiness'): Promise<Quote> {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        'X-Api-Key': API_KEY!
      }
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch quote')
    }

    const data = await response.json()
    return data[0] || { quote: 'Could not generate a quote at this time.', author: 'Unknown' }
  } catch (error) {
    console.error('Error fetching quote:', error)
    return { quote: 'Could not generate a quote at this time.', author: 'Unknown' }
  }
}

export async function generateFact(): Promise<string> {
  return fetchFactFromAPI()
}

export async function generateQuote(category: string = 'happiness'): Promise<Quote> {
  return fetchQuoteFromAPI(category)
}



