import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom' 

function Header() {
  return (
    <div className="header">
            <a href="/" className="logo">Logo</a>

            <nav className="navbar">
                <Link to="/hello">Hello</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/post">Post</Link>
                <Link to="/">Home</Link>
                
            </nav>

        </div>
  )
}

export default Header