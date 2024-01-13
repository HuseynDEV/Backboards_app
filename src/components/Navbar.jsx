import React from 'react'

const Navbar = () => {
  return (
   <div className="navbar">
    <div className="nav-center">
        <div className="nav-header">
            <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
            </button>
        </div>
    </div>
   </div>
  )
}

export default Navbar