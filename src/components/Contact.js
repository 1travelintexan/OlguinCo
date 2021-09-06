import { SocialIcon } from "react-social-icons";
import React from "react";
import emailjs from "emailjs-com";
import logo from "../images/olguinImages/logo.jpeg";

import bootstrap from "bootstrap";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o4poyjc",
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
            style={{ height: 60, width: 60 }}
          />
          <SocialIcon
            className="icon"
            url="https://www.instagram.com/olguinco/"
            target="_blank"
            fgColor="#fff"
            style={{ height: 60, width: 60 }}
          />
        </div>

        <div className="contact-message ">
          <h4>Call or text us!</h4>
          <img className="logo-2" src={logo} alt="logo" />
          <h5>Phone: (832) 953-6712</h5>
        </div>

        <div className="center contact-banner">
          <h3>Feel free to send us an email</h3>
          <form className="contact-form" onSubmit={sendEmail}>
            <label>Name:</label>
            <input type="text" name="name" />
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Subject:</label>
            <input type="text" name="subject" />
            <label>Message:</label>
            <textarea name="message" />
            <input className="submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
