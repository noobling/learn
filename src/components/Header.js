import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logoIcon from './logo.png'

export default function() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logoIcon} className="header-logo" alt="logo" />
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
