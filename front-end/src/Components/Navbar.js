import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav' style={{position:'sticky',width:'100%',overflowY:'scroll'}}>
      <Link id='SpeakUp' to ='/'><h3 id='WebName'>SpeakUp</h3></Link>
      <div className='part-2'>
       <Link id='Article' to ='/Articles'>Articles</Link>
       <Link id='Portfolio' to ='/Portfolios'>Portfolio</Link>
       <Link id='AddData' to ='/AddData' >AddData</Link>
      </div>
      {/* <hr style={{backgroundColor:"black",height:'1px'}}/> */}
    </div>
  )
}

export default Navbar
