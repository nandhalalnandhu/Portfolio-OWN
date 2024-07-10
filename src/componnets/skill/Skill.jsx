import React, { useContext, useEffect } from "react";
import "./Skill.css";
import AOS from "aos";
import mongo from "../assets/mongo.png"
import htcs from "../assets/htcs.png"
import { Mycont } from "../Context";

function Skill() {

  const{textStyle, divpro2Style} = useContext(Mycont);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div id="skill" className="Skill">
      <div className="tecskill">
        <h3>TECHNICAL SKILLS</h3>

        <div className="box-main-div">
          <div style={divpro2Style} data-aos="fade-up" className="box">
            <img
              src={htcs}
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span >HTML5 & CSS</span>
          </div>

          <div style={divpro2Style} data-aos="fade-up" className="box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/919/919825.png"
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span>NODE Js</span>
          </div>

          <div style={divpro2Style} data-aos="fade-up" className="box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png"
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span>JAVASCRIPT</span>
          </div>

          <div style={divpro2Style} data-aos="fade-up" className="box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span>REACT</span>
          </div>
 
          <div style={divpro2Style}  data-aos="fade-up" className="box">
            <img
              src={mongo}
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span>MONGO DB</span>
          </div>

          <div style={divpro2Style} data-aos="fade-up" className="box">
            <img
              src="https://1.bp.blogspot.com/-jkSmywQ57sA/Wer3KKSqgaI/AAAAAAAACc4/07TexMsBBI4v7WlVKo76YvxM3TvrMxIdwCLcBGAs/s640/express.js.png"
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span>EXPRESS Js</span>
          </div>
        </div>
      </div>

      <div  data-aos="fade-up" className="tecskill">
        <h3>PERSONAL SKILLS</h3>

        <div  className="box-main-div">
          <div style={divpro2Style} className="box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9445/9445799.png"
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span>SELF LEARNING</span>
          </div>

          <div style={divpro2Style} data-aos="fade-up" className="box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6526/6526257.png"
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span>PATIENCE</span>
          </div>

          <div style={divpro2Style} data-aos="fade-up" className="box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/13161/13161084.png"
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span>TIME MANAGEMENT</span>
          </div>

          <div style={divpro2Style} data-aos="fade-up" className="box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9242/9242095.png"
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span>FLEXIBILITY</span>
          </div>

          <div style={divpro2Style} data-aos="fade-up" className="box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5485/5485850.png"
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span>ADAPTABILITY</span>
          </div>
          <div style={divpro2Style} data-aos="fade-up" className="box">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2857/2857527.png"
              alt=""
              className="icon-ski"
              width={40}
              height={40}
            />

            <span>CREATIVITY</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skill;
