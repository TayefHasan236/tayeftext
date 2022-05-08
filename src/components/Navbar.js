import React from 'react'

import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (


    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
              </li>
            </ul>

          {/* mode changing with 3 colors */}
          {/* <div className="colorMode mx-2">
            <button type="button" onClick={darModeTory} className="btn btn-outline-success">Tory</button>
            <button type="button" onClick={darModeMarron} className="btn btn-outline-danger mx-2">Marron</button>
            <button type="button" onClick={darModeBlue} className="btn btn-outline-primary">Blue</button>
          </div> */}


            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switchText}</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title : 'Set title here',
  aboutText : 'About'
}