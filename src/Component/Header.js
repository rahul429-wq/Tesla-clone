import React, { useState } from "react";
import "../index.css";
import myjson from "./Navitems.json";
import Fade from "react-reveal/Fade";
function Header() {
  // const [navstate, setnavstate] = useState(false);
  const HandleClick = () => {
    let aside1 = document.getElementById("aside");
    aside1.classList.toggle("tog");
    // let bar=document.getElementById("i1").classList.toggle("fa fa-bars");
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <strong>TESLA</strong>
        </div>
        <div className="middle">
          <li>
            <a href="#">MODEL S</a>
          </li>
          <li>
            <a href="#">MODEL 3</a>
          </li>
          <li>
            <a href="#">MODEL X</a>
          </li>
          <li>
            <a href="#">MODEL Y</a>
          </li>
          <li>
            <a href="#">SOLAR PANEL</a>
          </li>
          <li>
            <a href="#">SOLAR ROOF</a>
          </li>
        </div>
        <div className="last">
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">TESLA ACCOUNT</a>
          </li>
          <div className="burger" onClick={HandleClick}>
            <i id="i1" className="fa fa-bars"></i>
          </div>
        </div>
      </div>

      <aside id="aside">
        <Fade right>
          <ul>
            {myjson.map((a) => (
              <li key={a.id}>
                <a href="#">{a.item}</a>
              </li>
            ))}
          </ul>
        </Fade>
      </aside>
    </>
  );
}

export default Header;
