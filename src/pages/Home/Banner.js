import React from 'react'
import './Banner.css'
import linkedinIcon from './linkedin.svg'
import githubIcon from './github.svg'
import facebookIcon from './facebook.svg'
import emailIcon from './email.svg'

export default function() {
  return (
    <section className="section-dark">
      <h2 className="banner-tagline">
        Hello I'm <span className="banner-special">David Yu</span> a Frontend
        Engineer specialising in Vue JS
      </h2>
      <div className="banner-icons">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} className="icon" alt="linkedin" />
        </a>
        <a href="http://github.com" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} className="icon" alt="github" />
        </a>
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} className="icon" alt="facebook-icon" />
        </a>
        <a
          href="mailto:david.yu@readify.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={emailIcon} className="icon" alt="email-icon" />
        </a>
      </div>

      <a href="#studies" className="primary-btn">
        Learn More
      </a>
    </section>
  )
}
