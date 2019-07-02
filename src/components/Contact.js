import React from 'react'
import './Contact.css'

export default function() {
  return (
    <section
      id="contact"
      style={{ height: '100%', padding: '50px 0' }}
      className="section-dark"
    >
      <img src="contact.svg" className="icon" alt="contact-icon" />
      <h2 className="tagline">Contact Me</h2>
      <form className="contact-form" action="#">
        <input
          className="contact-input"
          name="name"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="contact-input"
          email="email"
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          className="contact-textarea"
          name="message"
          id=""
          cols="30"
          rows="10"
          defaultValue="Your Message"
        />

        <button type="submit" className="primary-btn" style={{ width: '50%' }}>
          Submit
        </button>
      </form>
    </section>
  )
}
