import React from 'react'
import "./Header.css"
import logo from "../../images/logo.png"

const Header = () => {
    const navLinks = ["Front-end", "Back-end", "Full-stack", "JavaScript", "Python Dev", "Ruby Dev", "iOS Dev","Android Dev" ]
  return (
    <div className="nav_container">
        <div className='container'>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="links">
                    {
                        navLinks.map(navlink=> <li>{navlink}<span>1</span> </li> )
                    }
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header