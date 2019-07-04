import React from 'react'
import futureIcon from './future.svg'

export default function() {
  return (
    <section id="future" className="section">
      <img src={futureIcon} className="icon" alt="future-icon" />
      <h2 className="tagline">Where I see the world in the next 10 years</h2>
      <h1 className="main-text">Coders for Causes functions without me</h1>
      <a href="#contact" className="primary-btn">
        Contact Me
      </a>
    </section>
  )
}
