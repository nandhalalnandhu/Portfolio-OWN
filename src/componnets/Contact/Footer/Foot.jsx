import React, { useContext } from "react";
import "./Foot.css";
import { Mycont } from "../../Context";

function Foot() {
  const { divStyle } = useContext(Mycont);
  return (
    <div style={divStyle} className="Foot">
      <div className="Foot-in">
        <div className="center">
          <span>
            {" "}
            Made by <b>Nandhalal</b>{" "}
          </span>
        </div>

        <div className="center">
          <a href="# mainzz">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3272/3272638.png"
              alt=""
              width={40}
            />
          </a>
        </div>

        <div className="centersocio">
          <a href="https://www.linkedin.com/in/nandhalal/">
            {" "}
            <img
              className="soico-icon"
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              alt=""
            />
          </a>

          <a href="https://github.com/dashboard">
            {" "}
            <img
              className="soico-icon"
              src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
              alt=""
            />
          </a>

          <a href="https://www.instagram.com/_thri_lok/">
            {" "}
            <img
              className="soico-icon"
              src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
              alt=""
            />
          </a>

          <a href="">
            {" "}
            <img
              className="soico-icon"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Foot;
