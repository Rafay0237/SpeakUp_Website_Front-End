import React from 'react'
import Navbar from '../Components/Navbar'
import Detail from '../Components/Detail'
import {  useParams } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

function PortfolioDetailPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetData />
    </QueryClientProvider>
  )
}
function GetData() {
    let {id}=useParams();
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:5000/Portfolios/'+id).then(res =>
      res.json()
    )
  )

  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h1>An error has occurred: {error.message }</h1>

  return (
    <div className=''>
      <Navbar/>
      <Detail data={data}/>
    </div>
  )
}

export default PortfolioDetailPage
