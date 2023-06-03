import { useState } from 'react'
import Link from 'next/link'


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link href="/news">Top News</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="search">Search</Link>
            </li>
           
          </ul>
        </div>
        <div>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar