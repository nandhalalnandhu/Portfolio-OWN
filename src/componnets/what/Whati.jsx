import React, { useContext } from "react";
import "./Whati.css";
import Card from "react-bootstrap/Card";
import { Mycont } from "../Context";

function Whati() {

  const{textStyle,divpro2Style, divStyle} = useContext(Mycont);
  return (
    <div style={divStyle} className="Whati-cards">


      <div style={divpro2Style} data-aos="zoom-in" data-aos-delay="200" className="cardd" >
        <Card.Body className="card-body">
          <div className="img-div">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10700/10700902.png"
              alt=""
            />
          </div>
          <p className="cardpara">Fast</p>
          <span style={textStyle} className="cardspan">Fast load times and lag free interaction.my highest priority</span>
        </Card.Body>
      </div>


      <div style={divpro2Style} data-aos="zoom-in" data-aos-delay="300" className="cardd">
        <Card.Body className="card-body">
          <div className="img-div">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2696/2696459.png"
              alt=""
            />
          </div>
          <p className="cardpara" >Responsive</p>
          <span style={textStyle} className="cardspan">My layouts will work on any device. big or small</span>
        </Card.Body>
      </div>



      
      <div style={divpro2Style} data-aos="zoom-in" data-aos-delay="400" className="cardd" >
        <Card.Body className="card-body">
          <div className="img-div">
            <img
              src="https://cdn-icons-png.flaticon.com/128/12282/12282410.png"
              alt="" 
            />
          </div>
          <p className="cardpara" >Intuitive</p>
          <span style={textStyle} className="cardspan">Storng preference for easy to use. inuitive UX/UI</span>
        </Card.Body>
      </div>


      <div style={divpro2Style}  data-aos="zoom-in" data-aos-delay="500" className="cardd" >
        <Card.Body className="card-body">
          <div className="img-div">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4999/4999603.png"
              alt="" 
            />
          </div>
          <p className="cardpara" >Dynamic</p>
          <span style={textStyle} className="cardspan">Websites don't have to be static. i love making pages come to life</span>
        </Card.Body>
      </div>
    </div>
  );
}

export default Whati;
