import { Link } from "react-router-dom";
import { MenuStyle } from "../Style/MenuStyle";

const Menu = () => {
  return (
    <div id="navbarSupportedContent">
      <MenuStyle className="d-flex">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/series" className="nav-link ">
            Series
          </Link>
        </li>
      </MenuStyle>
    </div>
  );
};

export default Menu;
