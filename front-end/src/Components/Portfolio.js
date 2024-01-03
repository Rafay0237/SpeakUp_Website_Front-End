import React from 'react'
import'./ArticleAndPortfolio.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Card from './Card'
const queryClient = new QueryClient()

function Portfolio() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetData />
    </QueryClientProvider>
  )
}

function GetData() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://cute-blue-chiton-fez.cyclic.app/portfolios').then(res =>
      res.json()
    )
  )

  if (isLoading) return <h1 className='header'>Loading...</h1>
  

  if (error) return <h1>An error has occurred: {error.message }</h1>
  let name='Portfolios'
  return (
    <div className='row mapRow '  >
      {data.map(card=>(
        <Card card={card} name={name}/>
      ))}
    </div>
  )
}

export default Portfolio
