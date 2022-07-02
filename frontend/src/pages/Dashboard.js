import React from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
        <h1>Welcome to the Dashboard Page</h1>
        <Link to="/notes">See the List of notes</Link>
        
    </div>
  )
}

export default Dashboard