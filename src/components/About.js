import React from "react";
import css from "../App.css";
import wedding from "../images/olguinImages/wedding.jpg";
import happy from "../images/olguinImages/happy.jpg";

function About() {
  return (
    <div>
      <h1 className="center about-words">
        Met our fun, creative and crazy family
      </h1>
      <div className="about-pics">
        <img className="wedding-pic" src={wedding} alt="wedding pic" />
        <img className="wedding-pic2" src={happy} alt="couple pic" />
      </div>
      <div className="center">
        <h3 className="about-para">
          Hey y'all, we are a born and raised Texas family who loves our dog
          like they are are children. We both work full time jobs but our dream
          is to be able to make a living doing fun and creative things that we
          both enjoy. So... That is how The Olguin Co. was started, we can
          customize apparel for you or any of your loved ones. Give us the
          opportunity to show you the quality of our work, and you will not be
          disappointed.
        </h3>
      </div>
    </div>
  );
}

export default About;
