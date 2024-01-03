import React from 'react'
import parse from 'html-react-parser'

const Detail = ({data}) => {
  console.log(data.data)
  return (
    <div style={{ textAlign:'center'}}>
      <h1 style={{padding:'50px', marginBottom:'20px',fontSize:'60px',
      fontWeight:'bolder',textAlign:'center',backgroundColor:'#FDEFE4'}}
      className="card-title">{data.title}</h1>
      <div style={{marginLeft:'30px'}}>
      <image src={data.url}
      style={{ height: "200px", width: "250px" ,marginBottom:'50px'}}
      alt="Card image cap"
      />
      <div style={{marginBottom:'50px',width:'55%',marginLeft:'20px',
      textAlign:'left', fontSize:'larger'}}>
      {parse(data.data)}
        </div>
      </div>
    </div>
  )
}

export default Detail
