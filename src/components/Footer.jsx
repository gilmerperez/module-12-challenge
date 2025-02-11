const Footer = () => {
  return (
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item">
        <a href="https://github.com/" className="nav-link px-2 text-body-secondary" target="blank"><i className="fab fa-github fa-2x"></i></a>
      </li>

      <li className="nav-item">
        <a href="https://www.linkedin.com/" className="nav-link px-2 text-body-secondary" target="blank"><i className="fab fa-linkedin fa-2x"></i></a>
      </li>

      <li className="nav-item">
        <a href="https://stackoverflow.com/questions" className="nav-link px-2 text-body-secondary" target="blank"><i className="fab fa-stack-overflow fa-2x"></i></a>
      </li>
    </ul>
    <p className="text-center text-body-secondary">Copyright © 2025 Gilmer Perez</p>
  </footer>
  )
}

export default Footer