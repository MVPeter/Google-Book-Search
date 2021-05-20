import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <nav className="navbar navbar-default">
        <div className="container-fluid">
  
          <div className='navbar-header'>
            <Link to="/" className="navbar-brand">
              Google Books search
        </Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/Favorite">Favorites
           </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar;