import React from "react";
import { SocialIcon } from "react-social-icons";
import emailjs from "emailjs-com";
import logo from "../images/olguinImages/logo.jpeg";

import bootstrap from "bootstrap";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_pi86pem",
        e.target,
        "user_Y6YdfC0dSMM1EiWEZkHLC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <div className="center contact-banner">
        <h1>Follow, Like, Subscribe... Push all of our buttons!</h1>
        <div className="icons">
          <SocialIcon
            url="https://www.facebook.com/groups/166166452278121/?ref=share"
            target="_blank"
            fgColor="#fff"
            style={{ height: 80, width: 80 }}
          />
          <SocialIcon
            url="https://www.instagram.com/olguinco/"
            target="_blank"
            fgColor="#fff"
            style={{ height: 80, width: 80 }}
          />
        </div>
        <h3>We are here for any questions y'all have</h3>
        <div className="contact-message ">
          <h4>Give us a call or text us a message!</h4>
          <img className="logo-2" src={logo} alt="logo" />
          <h5>Phone: (832) 953-6712</h5>
        </div>
        <div className="form center">
          <h3>Or you can send us an email</h3>
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                >
                  {" "}
                </textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
