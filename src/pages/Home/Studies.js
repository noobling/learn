import React from 'react'
import studiesIcon from './studies.svg'

export default function() {
  return (
    <section id="studies" className="section">
      <img src={studiesIcon} className="icon" alt="studies-icon" />
      <h2 className="tagline">
        Third Year Data Science and Finance Student at{' '}
        <a
          href="http://uwa.edu.au"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          UWA
        </a>{' '}
      </h2>

      <a href="#experience" className="primary-btn">
        Experience
      </a>
    </section>
  )
}
