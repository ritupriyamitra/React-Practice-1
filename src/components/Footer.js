import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <div>copyrights &copy; 2021</div>
      <div><Link to ='/about' >About</Link></div>
    </footer>
  )
}

export default Footer
