import React from "react";
import shirts from "../images/olguinImages/manyShirts.jpg";
import "../App.css";
import Typical from "react-typical";
import MyMap from "./Map";
function Home() {
  return (
    <div className="container center">
      <div>
        <h3 className="home-banner">We make shirts for ...</h3>
        <h2 className="examples">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Birthdays",
              3000,
              "Proposals",
              3000,
              "Bridal Showers",
              3000,
              "Baby Showers",
              3000,
              "Gender Reveals",
              3000,
              "Holidays",
              3000,
              "Graduations",
              3000,
              "Vacations",
              3000,
              "EVERYTHING!!!",
              10000,
            ]}
          />
        </h2>
      </div>

      <h3 className="home-words">
        With the Olguin Co. we will work with you to make sure your dream shirts
        are made perfectly, from the sizes to the colors.
      </h3>
      <div className=" center ">
        <img className=" center home-image" src={shirts} alt="many shirts" />
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

        <div>
          <h2 className="conroe">Serving the greater Conroe area!</h2>
          <div className="map">
            <MyMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
// sammys token 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
//git remote set-url origin https://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@github.com/<git_url>
//git remote set-url origin https://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@github.com/1travelintexan/OlguinCo.git
