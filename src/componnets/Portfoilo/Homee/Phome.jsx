import React, { useContext, useEffect } from "react";
import "./Phome.css";

import AS from "../Assets/AS.png";
import EDU from "../Assets/uk.png";
import FIX from "../Assets/Fix.png";
import thri from "../Assets/thrilok.png";
import gemini from "../Assets/gemini.png";
import Stockx from "../Assets/stockx.png";
import netfilx from "../Assets/netfilx.png";
import dtdc from "../Assets/dtdc.png";
import licious from "../Assets/licious.png";
import practo from "../Assets/practo.png";

import AOS from "aos";
import { Mycont } from "../../Context";

function Phome() {
  const { divStyle } = useContext(Mycont);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div style={divStyle} className="phome">
      <div className="phome-inside">
        <a
          data-aos="zoom-in"
          data-aos-duration="300"
          href="https://astonmartin-clone.netlify.app/"
        >
          <div class="card">
            <div class="icon">
              <img src={AS} alt="" />
            </div>
            <strong>Aston Martin Clone</strong>

            <span>
              <p>
                This is Responsive <br />
                clone website <br />i made for study purpose
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

        <a
          data-aos="zoom-in"
          data-aos-duration="300"
          href="https://www.edumetrix.uk/"
        >
          <div class="card">
            <div class="icon">
              <img src={EDU} alt="" />
            </div>
            <strong>Edumetrix.uk</strong>

            <span>
              <p>
                {" "}
                This is Responsive <br />
                website <br />i made for client
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

        <a
          data-aos="zoom-in"
          data-aos-duration="300"
          href="https://fixpointsuae.com/"
        >
          <div class="card">
            <div class="icon">
              <img src={FIX} alt="" />
            </div>
            <strong>Fix point</strong>

            <span>
              <p>
                {" "}
                This is Responsive <br />
                website <br />i made for own client project
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
              <img src={thri} alt="" />
            </div>
            <strong>Thrilok.co</strong>

            <span>
              <p>
                {" "}
                This is Responsive <br />
                website <br />i made for <br /> My Signature Website
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

        <a
          data-aos="zoom-in"
          data-aos-duration="300"
          href="https://gemini-thrilok.netlify.app/"
        >
          <div class="card">
            <div class="icon">
              <img src={gemini} alt="" />
            </div>
            <strong>Gemini clone </strong>

            <span>
              <p>
                {" "}
                This is Responsive <br />
                website i made for study purpose <br /> (FULL STACK)
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBF3Y9fCMAXThIDtSvY1BBw42OUAe5JMwww&s"
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
                netifilx clone website (FULLSTACK)
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

        <a data-aos="zoom-in" data-aos-duration="300" href="">
          <div class="card">
            <div class="icon">
              <img src={licious} alt="" />
            </div>
            <strong>Licious Clone</strong>

            <span>
              <p>
                {" "}
                This is responsive <br />
                clone website <br />i made for study purpose
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
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

        <a
          data-aos="zoom-in"
          data-aos-duration="300"
          href="https://dtdc-clone-nan.netlify.app/"
        >
          <div class="card">
            <div class="icon">
              <img src={dtdc} alt="" />
            </div>
            <strong>DTDC Clone</strong>

            <span>
              <p>
                {" "}
                This is responsive <br />
                clone website <br />i made for study purpose
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

        <a
          data-aos="zoom-in"
          data-aos-duration="300"
          href="https://practo-clone-nan.netlify.app/"
        >
          <div class="card">
            <div class="icon">
              <img src={practo} alt="" />
            </div>

            <strong>Practo Clone</strong>

            <span>
              <p>
                {" "}
                This is responsive <br />
                clone website <br />i made for study purpose
              </p>

              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
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

export default Phome;
