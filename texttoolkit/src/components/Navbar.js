import React from 'react'
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <div>

      <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand mx-2" to="/">Text Toolkit</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarSupportedContent">
            <ul className="navbar-nav mx-4 mb-lg-0">
              <li className="nav-item mx-1">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link" to="/about">About us</NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link" to="/signin">Sign in</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  )
}
