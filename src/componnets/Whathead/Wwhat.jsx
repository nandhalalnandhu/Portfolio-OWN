import React, { useContext } from "react";
import "./Wwhat.css";
import { Mycont } from "../Context";

function Wwhat() {

  const{textStyle, divStyle} = useContext(Mycont);



  
  return (
    <div id="wwhat" style={divStyle} className="wwhat">
      <div  className="in-wwhat">
        <span style={textStyle} className="head-pro">What i Provide</span>

        <span style={textStyle} >I provide Frontend web development. I can provide UI/UX</span>
        <span style={textStyle}> designing for the website and mobile app.</span>
      </div>
    </div>
  );
}

export default Wwhat;
