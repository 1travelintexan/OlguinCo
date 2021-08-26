import React from "react";
import shirts from "../images/olguinImages/manyShirts.jpg";
import "../App.css";
import GoogleMapReact from "google-map-react";

function Home() {
  const defaultProps = {
    center: {
      lat: 30.3119,
      lng: -95.4561,
    },
    zoom: 10,
  };
  return (
    <div className="container center">
      <h2 className="home-banner"> We make shirts for any type of occasion!</h2>
      <h3 className="home-words">
        With the Olguin Co. we will work with you to make sure your dream shirts
        are made perfectly, from the sizes to the colors.
      </h3>
      <div className=" center ">
        <img className=" center home-image" src={shirts} alt="many shirts" />
      </div>
      <div>
        <h1>Your next special occasion</h1>
      </div>
      <div className="home-examples">
        <div className="white">
          <h3>Birthday's</h3>
          <h3>Proposals & Bridal Showers</h3>
          <h3>Baby Showers</h3>
          <h3>Gender Reveals</h3>
          <h3>Graduations</h3>
          <h3>Holidays</h3>
          <h3>Family Events & Vacations</h3>
          <h3>Everyday Casual Fashion</h3>
        </div>
      </div>
      <div className="footer">
        <div className="footer-contact">
          <h2>Contact us!</h2>
          <div className="flex">
            {" "}
            <h3>
              Instagram:
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/olguinco/"
                target="_blank"
              >
                Olguin Co.
              </a>
            </h3>
          </div>
          <div className="flex">
            <h3>Facebook: </h3>
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/groups/166166452278121/?ref=share"
              target="_blank"
            >
              Join our group!
            </a>{" "}
          </div>

          <div className="flex">
            <h3>Phone:</h3> <h3 className="contact-home">(832) 953 - 6712</h3>
          </div>
          <div className="flex">
            <h3>Email: </h3>
            <h3 className="contact-home">OlguinCo.19@gmail.com</h3>
          </div>
        </div>

        <div className="map">
          <h3>Serving the greater Conroe area!</h3>
          <div style={{ height: "25vw", width: "25vw" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
// git hub key 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
