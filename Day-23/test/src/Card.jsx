import React from 'react'

const Card = ({title , description , image}) => {
  
  return (
    <div className='card'>
        <img src={image} alt=""   className='image' />
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Card