import React from 'react'
import PageLinks from './PageLinks'
import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'


const Navbar = () => {
  return (
   <div className="navbar">
    <div className="nav-center">
        <div className="nav-header">
            <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
            </button>
        </div>
        <PageLinks />
        <ul className='nav-icons'>

        </ul>
    </div>
   </div>
  )
}

export default Navbar