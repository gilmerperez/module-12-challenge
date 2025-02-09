import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-1">Gilmer Perez</span>
      </a>
      <Navigation />
    </header>
  )
}

export default Header