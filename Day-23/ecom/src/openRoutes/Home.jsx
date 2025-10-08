import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Home = () => {
  const {auth , role} = useContext(AuthContext);

  console.log(auth)
  console.log(role)
  return (
    <div>Home</div>
  )
}

export default Home