import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div>
        <h1>Home</h1>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
        <Link to="/login">Login</Link>
      </div>
  )
}

export default Home;