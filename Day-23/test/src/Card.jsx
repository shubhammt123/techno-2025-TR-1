import React, { useState } from 'react'

const Card = ({title , description , image  , setOpen , id , setId}) => {

  return (
    <div className='card' onClick={()=>{setOpen(true); setId(id)}}>
        <img src={image} alt=""   className='image' />
        <h1 className='title'>{title}</h1>
        <p className='para'>{description}</p>
    </div>
  )
}

export default Card