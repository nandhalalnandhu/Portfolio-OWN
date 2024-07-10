import React, { createContext, useState } from "react";

import vidA from "./Nav&main/video1.mp4";
import vidB from "./Nav&main/video2.mp4";

export const Mycont = createContext();

const Context = ({ children }) => {
  //Darkmode//

  const [convert, setConvert] = useState(false);

  const onChange = () => {
    setConvert(!convert);
  };

  const textmainStyle = {
    color: convert ? "lightblue" : "white",
  };

  const textStyle = {
    color: convert ? "black" : "white",
  };

  // =========================================

  const btn1Style = {
    color: convert ? "lightblue" : "rgb(214,82,78)",
    background: convert ? "transparent" : "transparent",
    border: convert ? " 2px solid lightblue " : " 2px solid rgb(214,82,78)",
  };

  const btn2Style = {
    color: convert ? "black" : "black",
    background: convert ? "lightblue" : "rgb(214,82,78)",
    border: convert ? " 2px solid lightblue " : " 2px solid rgb(214,82,78)",
  };

  //  ===============================================
  const divStyle = {
    background: convert ? "lightblue" : "rgb(3,14,66)",
  };
  const divproStyle = {
    background: convert ? "lightblue" : "  rgb(3,14,66)",
  };
  const divpro2Style = {
    background: convert
      ? "linear-gradient(rgba(63, 65, 66, 0.251), rgb(18, 154, 199))"
      : "  linear-gradient(rgba(104, 5, 5, 0.515), rgb(10, 32, 120))",
  };

  return (
    <Mycont.Provider
      value={{
        convert,
        onChange,
        textmainStyle,
        divStyle,
        textStyle,
        divproStyle,
        divpro2Style,
        btn1Style,
        btn2Style,
      }}
    >
      {children}
    </Mycont.Provider>
  );
};

export default Context;
