import React, { useContext, useState } from "react";
import "./Portnav.css";

import Mobileapp from "../Mobileapp/Mobileapp";
import Phome from "../Homee/Phome";
import Freela from "../Freel/Freela";
import Livee from "../Live/Livee";
import { Mycont } from "../../Context";

const Portnav = () => {
  const [view, setView] = useState("allProjects");

  const { textStyle, divStyle } = useContext(Mycont);

  return (
    <>
      <div style={divStyle} id="Protfolio" className="nav-protfolio">
        <div className="portnav-inside">
          <span style={textStyle} onClick={() => setView("allProjects")}>
            ALL PROJECTS
          </span>

          <span style={textStyle} onClick={() => setView("freelancing")}>
            FREELANCING
          </span>

          <span style={textStyle} onClick={() => setView("mobileapp")}>
            FULLSTACK
          </span>

          <span style={textStyle} onClick={() => setView("live")}>
            HOSTED
          </span>

          
        </div>
      </div>

      {view === "freelancing" ? (
        <Freela />
      ) : view === "live" ? (
        <Livee />
      ) : view === "mobileapp" ? (
        <Mobileapp />
      ) : (
        <Phome />
      )}
    </>
  );
};

export default Portnav;
