import * as React from "react"
import { Link } from "gatsby"
import { nav, navLink } from './navigation.module.css'

export function Navigation() {
  
  return (
    <nav>
      <ul>
        <li><Link to="/shop" className={navLink}>Shop</Link></li>
        <li><Link to="/about" className={navLink}>About</Link></li>
        <li><Link to="/contact" className={navLink}>Contact</Link></li>
      </ul>
    </nav>
  )
}
