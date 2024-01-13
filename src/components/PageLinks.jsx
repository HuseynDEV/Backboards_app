import React from 'react'
import { pageLinks } from '../data'

const PageLinks = () => {
  return (
    <ul className={parentClass} id='nav-links'>
    {pageLinks.map((link) => {
      return <PageLink key={link.id} link={link} itemClass={itemClass} />
    })}
  </ul>
  )
}

export default PageLinks