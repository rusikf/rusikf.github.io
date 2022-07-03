import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  const navLinkClass = (routeTarget: string) => {
    return routeTarget === pathname ? 'active nav-link' : 'nav-link'
  }

  return(
    <ul className="nav justify-content-center my-2">
      <li className="nav-item">
        <Link className={navLinkClass('/')} aria-current="page" to="/"><span>About me</span></Link>
      </li>
      <li className="nav-item">
        <Link className={navLinkClass('/portfolio')} to="/portfolio"><span>Portfolio</span></Link>
      </li>
      <li className="nav-item">
        <Link className={navLinkClass('/summary')} to="/summary"><span>Work experience & Education</span></Link>
      </li>
      <li className="nav-item">
        <Link className={navLinkClass('/contacts')} to="/contacts"><span>Contacts</span></Link>
      </li>
    </ul>
  )
}
