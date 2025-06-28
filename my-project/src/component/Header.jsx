import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex justify-between shadow-2xl p-5 ">
    <div className="flex gap-2">
    <img src="" alt="logo" />
    <Link to="/">
    <h1 className="font-bold">RivanCyber</h1>
    </Link>
    </div>

    <div className="flex gap-5">
    <Link to = "/">Home</Link>
    <Link to = "/about">About</Link>
    <Link to = "/contact">Contact</Link>
    </div>

    <div className="flex gap-2">
    <a href="#"> Login</a>
    <a href="#"> Register</a>
    </div>
  </nav>
  )
}

export default Header