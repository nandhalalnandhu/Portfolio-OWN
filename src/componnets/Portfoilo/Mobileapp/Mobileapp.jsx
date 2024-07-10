import React, { useContext } from "react";

import gemini from "../Assets/gemini.png";
import Stockx from "../Assets/stockx.png";
import netfilx from "../Assets/netfilx.png";
import { Mycont } from "../../Context";

function Mobileapp() {
  const { divStyle } = useContext(Mycont);
  return (
    <div style={divStyle} className="phome">
      <div className="phome-inside">
        <a data-aos="zoom-in" data-aos-duration="300" href="">
          <div class="card">
            <div class="icon">
              <img src={gemini} alt="" />
            </div>
            <strong>Gemini clone </strong>

            <span>
              <p>
                {" "}
                This is Responsive <br />
                websitei made for study purpose <br /> (FULL STACK)
              </p>

              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </a>

        <a data-aos="zoom-in" data-aos-duration="300" href="">
          <div class="card">
            <div class="icon">
              <img src={Stockx} alt="" />
            </div>
            <strong>Sneaker Culture</strong>

            <span>
              <p>
                This is fully responsive <br />
                E-commerce website <br />i made for Study purpose <br />
                (MERN STACK)
              </p>

              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </a>
        <a data-aos="zoom-in" data-aos-duration="300" href="">
          <div class="card">
            <div class="icon">
              <img src={netfilx} alt="" />
            </div>
            <strong>Netfilx clone</strong>

            <span>
              <p>
                This is responsive <br />
                netifilx clone website <br /> (FULL STACK)
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                alt=""
                width={40}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </a>

      </div>
    </div>
  );
}

export default Mobileapp;
