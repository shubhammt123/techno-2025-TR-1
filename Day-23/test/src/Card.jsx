import React from 'react'

const Card = ({title , description , image}) => {
  
  return (
    <div className='card'>
        <img src={image} alt=""   className='image' />
        <h1 className='title'>{title}</h1>
        <p className='para'>{description}</p>
    </div>
  )
}

export default Card