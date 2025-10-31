import React from 'react'
import Contact from '../contact/Contact'
import Navbar from '../navbar/Navbar'
import ContactForm from '../form/ContactForm'

const ContactPage = () => {
  return (
    <div>
      <Navbar/>
      <ContactForm/>
      <Contact/>
    </div>
  )
}

export default ContactPage