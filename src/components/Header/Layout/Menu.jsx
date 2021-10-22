/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
// import { MenuStyle } from "../Style/MenuStyle";

import SearchIcon from "@material-ui/icons/Search";

const Menu = () => {

  return (
    <nav class="navbar navbar-expand-lg  ">
      <div class="container">
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                <div className="d-flex">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" className="nav-link">
                <div className="d-flex">Movies</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/series" className="nav-link ">
                <div className="d-flex">Tv Series</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link ">
                <div className="d-flex">
                  {<SearchIcon />}
                  Search
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
