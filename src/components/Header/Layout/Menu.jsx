import { Link } from "react-router-dom";
import { MenuStyle } from "../Style/MenuStyle";

import { Icon, InlineIcon } from "@iconify/react";
import homeOutlined from "@iconify-icons/ant-design/home-outlined";

import bxMoviePlay from "@iconify-icons/bx/bx-movie-play";

import saveSeries from "@iconify-icons/carbon/save-series";

import movieIcon from "@iconify-icons/cil/movie";

const Menu = () => {
  return (
    <div id="navbarSupportedContent">
      <MenuStyle className="d-flex">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
            <div className="d-flex">
              <Icon className="icon" icon={homeOutlined} />
              Home
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/movies" className="nav-link">
            <div className="d-flex">
              <Icon className="icon" icon={bxMoviePlay} />
              Movies
            </div>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/series" className="nav-link ">
            <div className="d-flex">
              <Icon className="icon" icon={saveSeries} />
              Series
            </div>
          </Link>
        </li>
      </MenuStyle>
    </div>
  );
};

export default Menu;
