import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div>
        <h1>User</h1>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
    </div>
  )
}

export default User