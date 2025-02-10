import React from 'react'

const Footer = () => {
  return (
    <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <a href="https://github.com/" class="nav-link px-2 text-body-secondary" target="blank" attribute><i className="fab fa-github fa-2x"></i></a>
      </li>

      <li class="nav-item">
        <a href="https://www.linkedin.com/" class="nav-link px-2 text-body-secondary" target="blank"><i className="fab fa-linkedin fa-2x"></i></a>
      </li>

      <li class="nav-item">
        <a href="https://stackoverflow.com/questions" class="nav-link px-2 text-body-secondary" target="blank"><i className="fab fa-stack-overflow fa-2x"></i></a>
      </li>
    </ul>
    <p class="text-center text-body-secondary">Copyright © 2025 Gilmer Perez</p>
  </footer>
  )
}

export default Footer