import { useState } from "react";
import { NavLink } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import Logo from "../../assets/Logo.png";
import "./navigation.css";

const Navigation = () => {
  const [toggleButton, setToggleButton] = useState("");

  window.onscroll = function () {
    const navi = document.querySelector(".navWrapper");
    let height = window.pageYOffset;
    if (height >= 10) navi.classList.add("secondNav");
    else navi.classList.remove("secondNav");
  };

  return (
    <div className="navWrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <div className="menubar">
              <button
                className="hideMenu"
                onClick={() => setToggleButton("showNav")}
              >
                <List />
              </button>
              <NavLink to="/" className="Logo">
                <img src={Logo} alt="Logo" />
              </NavLink>
            </div>
          </div>
          <div className="col-md-10">
            <ul className={`navigation ${toggleButton}`}>
              {/* Tages go here */}
              <span
                className="hideNavigation"
                onClick={() => setToggleButton("hideNav")}
              ></span>
              <li>
                <NavLink to="/">STAKE</NavLink>
              </li>
              <li>
                <NavLink to="/speculate">SPECULATE</NavLink>
              </li>
              <li>
                <NavLink to="/risk">RISK</NavLink>
              </li>
              <li>
                <NavLink to="/presale">PRESALE</NavLink>
              </li>
              <li>
                <NavLink to="/token">TOKEN</NavLink>
              </li>
              <li>
                <NavLink to="/docs">DOCS</NavLink>
              </li>
              <li>
                <NavLink to="/linktree">LINKTREE</NavLink>
              </li>
              <button className="cBtn">Connect</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
