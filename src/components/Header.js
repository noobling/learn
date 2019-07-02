import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function() {
  return (
    <header className="header">
      <Link to="/">
        <img src="logo.png" className="header-logo" alt="logo" />
      </Link>
      <Link
        to="/stocks"
        className="link"
        style={{ marginLeft: 'auto', marginRight: '10px' }}
      >
        Stock Search
      </Link>
    </header>
  )
}
