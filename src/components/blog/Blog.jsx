import React from 'react'
import './blog.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Contact from '../contact/Contact'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <div className='blog-page'>
            <h2>Blogs</h2>
            <p>We are coming soon with our blogs.</p>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Blog