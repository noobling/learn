import React from 'react'

export default function() {
  return (
    <section id="experience" className="section-dark">
      <img
        src="experience.svg"
        className="icon"
        style={{ width: '60px' }}
        alt="experience-icon"
      />
      <h2 className="tagline">My past projects and experience</h2>

      <ul className="list">
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Creating this website
          </a>
        </li>
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            helped tutor five year olds for a living
          </a>
        </li>
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Built a facial recognition system that can tell people's age and
            gender
          </a>
        </li>
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Volunteered for uni camp for kids
          </a>
        </li>
      </ul>
      <a href="#future" className="primary-btn">
        The Future
      </a>
    </section>
  )
}
