import React, { useContext, useState } from "react";
import "./Nm.css";

import LOgo from "./logonav.png";

import vidA from "../Nav&main/video1.mp4";
import vidB from "../Nav&main/video2.mp4";

import me from "../assets/iam.png";
// import res from "../assets/cvv.pdf";
import Ania from "./ani.mp4";
import Anib from "./ani2.mp4";

import { Link, Outlet } from "react-router-dom";
import { Mycont } from "../Context";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Nm() {
  const { convert, onChange, textmainStyle, btn1Style, btn2Style } =
    useContext(Mycont);

  const videoStyle = {
    video: convert ? "vidB" : "vidA",
  };

  const video2Style = {
    video: convert ? "Ania" : "Anib",
  };

  const [light, setlight] = useState(true);

  const click = () => {
    setlight(!light);
  };

  return (
    <>
      <div id="mainzz" className="mainz">
        <video
          style={videoStyle}
          autoPlay
          loop
          muted
          src={convert ? vidB : vidA}
        ></video>

        <nav>
          <div className="nav-inside">
            <img src={LOgo} alt="" />

            <div className="nav-content">
              <a className="nav-atag" href="">
                <span className="spp" style={textmainStyle}>
                  Home
                </span>
              </a>
              <a className="nav-atag" href="#Protfolio">
                <span className="spp" style={textmainStyle}>
                  Portfolio{" "}
                </span>
              </a>
              <a className="nav-atag" href="#skill">
                <span className="spp" style={textmainStyle}>
                  Skills{" "}
                </span>
              </a>
              <Link className="nav-atag" to={"/contact"}>
                <span className="spp" style={textmainStyle}>
                  Contact
                </span>
              </Link>
              <div onClick={onChange} className="nav-atag">
                <span onClick={click}>
                  {light ? (
                    <MdOutlineDarkMode className="darkl" />
                  ) : (
                    <MdLightMode className="darkl" />
                  )}
                </span>
              </div>
            </div>
          </div>
        </nav>

        <header>
          <div id="head" className="head-text">
            <div style={textmainStyle} className="contentxx">
              Hi, There <br />
              {/* <video autoPlay loop muted src={Ania}></video> */}
              <video
                style={video2Style}
                autoPlay
                loop
                muted
                src={convert ? Anib : Ania}
              ></video>
              With Emphasis on <br /> Responsive Design
            </div>

            <div className="buttonh">
              <a href="#wwhat">
                {" "}
                <button style={btn1Style} className="bta">
                  Know More
                </button>
              </a>
              <Link className="nav-atag" to={"/contact"}>
                <button style={btn2Style} className="btb">
                  Connect Me
                </button>
              </Link>
            </div>
          </div>
          <div className="my-img">
            <img src={me} alt="" />
          </div>
        </header>
      </div>
    </>
  );
}

export default Nm;
