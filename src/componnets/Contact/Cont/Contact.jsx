import React, { useContext } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { Mycont } from "../../Context";

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   device: "",

  //   complaints: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (
  //     !formData.name ||
  //     !formData.name2 ||
  //     !formData.phone ||
  //     !formData.device ||
  //     !formData.complaints
  //   ) {
  //     alert("Please fill in all fields");

  //     return;
  //   }

  //   try {
  //     const response = await fetch(
  //       "https://script.google.com/macros/s/AKfycbxHs0T6C3hn-CQ1bg-x-79ITEaHs_dMMAvKmCBrmXgGzNrfh_SwUTIsx4c9Y1ZDZZvZlA/exec",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //         body: new URLSearchParams(formData),
  //       }
  //     );

  //     if (response.ok) {
  //       Swal.fire({
  //         title: "Thank you! We'll get back to you soon.",
  //         text: "",
  //         icon: "success",
  //       });
  //       // alert("done");

  //       setTimeout(function () {
  //         window.location.reload();
  //       }, 3000);
  //     } else {
  //       throw new Error("Something went wrong");
  //     }
  //   } catch (error) {
  //     alert("Something went wrong");
  //     console.error(error);
  //   }
  // };
  const { textStyle, divproStyle } = useContext(Mycont);
  return (
    <div style={divproStyle} id="contact" className="contact">
      <div className="navb">
        <Link className="nav-atag" to={"/"}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/14667/14667293.png"
            alt=""
            width={30}
          />
        </Link>
      </div>
      <div className="address-all">
        <div className="hed-get">
          <h1 style={textStyle}>
            Get in touch <div></div>
          </h1>
        </div>
        <br />
        <div className="Cont-all">
          <div  className="add-box">
            <h3>Address</h3>
            <span style={textStyle}>Wandoor P.O,679328</span>

            <span style={textStyle}>Malappuram,Kerala,India</span>
          </div>
          <div className="add-box">
            <h3>Contact</h3>

            <a style={textStyle} className="addbox-atag" href="tel:7025880828">
              +917025880828
            </a>

            <a style={textStyle} className="addbox-atag" href="mailto:nandhalalnandhuz@gmail.com">
              nandhuz@gmail.com
            </a>
          </div>
          <div className="add-box">
            <h3>Social Media</h3>
            <div className="Social-medi">
              <a className="socio-a" href="https://www.linkedin.com/in/nandhalal/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                  alt=""
                  width={20}
                />
              </a>
              <a className="socio-a" href="https://github.com/dashboard">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
                  alt=""
                  width={20}
                />
              </a>
              <a className="socio-a" href="">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14417/14417709.png"
                  alt=""
                  width={20}
                />
              </a>
              <a className="socio-a" href="https://www.instagram.com/_thri_lok/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                  alt=""
                  width={20}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="email">
        <div className="form-box">
          <div className="email-sec">
            <div class="input-group">
              <input
                required=""
                type="text"
                name="text"
                autocomplete="off"
                class="input"
              />
              <label class="user-label">First Name</label>
            </div>

            <div class="input-group">
              <input
                required=""
                type="text"
                name="text"
                autocomplete="off"
                class="input"
              />
              <label class="user-label">Last Name</label>
            </div>
          </div>

          <div className="email-sec">
            <div class="input-group">
              <input
                required=""
                type="text"
                name="text"
                autocomplete="off"
                class="input"
              />
              <label class="user-label">Email</label>
            </div>

            <div class="input-group">
              <input
                required=""
                type="text"
                name="text"
                autocomplete="off"
                class="input"
              />
              <label class="user-label">Phone</label>
            </div>
          </div>

          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button className="submit">SEND</button>
        </div>
      </div> */}

      <div class="contain">
        <div class="form">
          <div class="title">Welcome</div>
          {/* <div class="subtitle">Let's create your account!</div> */}

          <div class="input-container ic1">
            <input id="firstname" class="input" type="text" placeholder=" " />
            <div class="cut"></div>
            <label for="firstname" class="placeholder">
              First name
            </label>
          </div>

          <div class="input-container ic2">
            <input id="lastname" class="input" type="text" placeholder=" " />
            <div class="cut"></div>
            <label for="lastname" class="placeholder">
              Last name
            </label>
          </div>

          <div class="input-container ic2">
            <input id="email" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">
              Email
            </label>
          </div>

          <div class="input-container ic2">
            <input id="lastname" class="textarea" type="text" placeholder=" " />
            <div class="cut"></div>
            <label for="lastname" class="placeholder">
              Message*
            </label>
          </div>

          <br />
          <br />
          <br />

          <button type="text" class="submit">
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
