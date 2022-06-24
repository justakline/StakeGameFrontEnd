import { useState } from "react";
import { NavLink } from "react-router-dom";
import { List, X } from "react-bootstrap-icons";
// import Logo from "../../assets/Logo.png";
// import Logo from "../../assets/newLogoNoRed.png";
// import Logo from "../../assets/newLogoWithRed.png";
import Logo from "../../assets/newLogoWithLittleRed.png";
import "./navigation.css";

const Navigation = () => {
  const [toggleButton, setToggleButton] = useState("");

  window.onscroll = function () {
    const navi = document.querySelector(".navWrapper");
    let height = window.pageYOffset;
    if (height >= 10) navi.classList.add("secondNav");
    else navi.classList.remove("secondNav");
  };
  // toggleButton="showNav";
   

  // handle connection use same function for two buttons line => 38,79
  const handleConnection = () => {
    alert("Connnection Handler! ");
  };


  return (
    <div className="navWrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-2 helper">
            <div className={`menubar`}  style={{ justifyContent: `${toggleButton=="hideNav" || toggleButton== ""? "space-between": "right"}`}}  >
              <button
                className={`hambargarMenu hideMenu ${toggleButton=="hideNav"|| toggleButton== "" ? "showNav": "hideNav"}`}
                onClick={() => setToggleButton("showNav")}
              >
                <List />
              </button>
              <NavLink to="/" className="Logo">
                <img src={Logo} alt="Logo" />
              </NavLink>

              <button className={`cBtn btn_Hide`} onClick={handleConnection}>
                Connect
              </button>
            </div>
          </div>

          <div className= {`col-md-10 ${toggleButton==""?"hideNav":""}`}>
            <ul className={`navigation ${toggleButton}`}>
              <NavLink to="/" className="HambargarLogo">
                <img src={Logo} alt="Logo" />
              </NavLink>
              {/* Tages go here */}
              <span
                className="hideNavigation" style={{background:"none"} }
                onClick={() => setToggleButton("hideNav")}
              >
                <button className="crossButton">
                  <X style={{background:"none"} }/>
                </button>
              </span>
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
              <button className="cBtn btnToggle" onClick={handleConnection}>
                Connect
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
