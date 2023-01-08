import React from 'react'



const SingleCard = (props) => {
  const {title,totalnumber,icon}=props.item
    return (
    <div className="single-card">
    <div className="card-content">
    <span className="card-icon" ><i class={icon}></i></span>
       <h3>{title}</h3>
       <div className="circle" ><div className="value-container" >{totalnumber}%</div></div>
      
    </div>
    
  </div>
  )
}

export default SingleCard
