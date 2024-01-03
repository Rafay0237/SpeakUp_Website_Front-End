import React from 'react'
import Navbar from '../Components/Navbar'
import Detail from '../Components/Detail'
import {  useParams } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

function ArticleDetailPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetData />
    </QueryClientProvider>
  )
}
function GetData() {
    let {id}=useParams();
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://cute-blue-chiton-fez.cyclic.app/articles/'+id).then(res =>
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

export default ArticleDetailPage
