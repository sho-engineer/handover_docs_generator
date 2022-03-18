import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <Link to="/user">User</Link>
        <Link to="/">Home</Link>
    </div>
  )
}

export default About