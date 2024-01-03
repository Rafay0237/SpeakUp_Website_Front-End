import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import ArticlePage from './Pages/ArticlePage'
import PortfolioPage from './Pages/PortfolioPage'
import AddData from "./Components/AddData"
import ArticleDetailPage from './Pages/ArticleDetailPage'
import PortfolioDetailPage from './Pages/PortfolioDetailPage'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Articles' element={<ArticlePage/>}/>
      <Route path='/Portfolios' element={<PortfolioPage/>}/>
      <Route path='/Articles/:id' element={<ArticleDetailPage/>}/>
      <Route path='/Portfolios/:id' element={<PortfolioDetailPage/>}/>
      <Route path='/AddData' element={<AddData/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
