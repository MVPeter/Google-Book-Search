import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar navbar-default">
        <div className="container-fluid">
  
          <div className='navbar-header'>
            <Link to="/" className="navbar-brand">
              Google Books search and save
        </Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/Favorites">Favorites
           </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar;