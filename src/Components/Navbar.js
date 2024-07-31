import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(props) {
  return (
 <>
 {/* <nav className={`navbar navbar-expand-lg bg-body-tertiary ${props.colorCode}`} > */}
 <nav className={`navbar navbar-expand-lg navbar-${props.colorBody} bg-${props.colorBody}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/" ><i><b>TextWrite</b></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={props.cssCode}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"></hr>         </li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}

        {/* <li className="nav-item">
          <a href='/' className="nav-link disabled" aria-disabled="true">Link</a>
        </li> */}
      </ul>

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

<div className={`form-check form-switch text-${props.colorBody==='light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.colorBody==='light'?'Light mode Enable':'Dark mode enabled'}</label>
</div>
    </div>
  </div>
</nav>

 </>   
);
}
Navbar.propTypes = {home:propTypes.string}

Navbar.defaultProps = {home:"Write your title"};
