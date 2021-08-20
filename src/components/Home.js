import React from "react";
import { Link } from "react-router-dom";
import shirts from "../images/olguinImages/manyShirts.jpg";
import css from "../App.css";

function Home() {
  return (
    <div className="container center">
      <h3 className="home-words">
        With the Olguin Co. we will work with you to make sure your dream shirt
        is made perfectly to your taste from size to colors. We make shirts for
        any type of occasion!
      </h3>
      <div className=" center ">
        <img className=" center home-image" src={shirts} alt="many shirts" />
      </div>
      <div>
        <h1>Some ideas for Special occasion's</h1>
      </div>
      <div className="home-ex">
        <h3>Birthday's</h3>
        <h3>Proposals & Bridal Showers</h3>
        <h3>Baby Showers</h3>
        <h3>Gender Reveals</h3>
        <h3>Graduations</h3>
        <h3>Holidays</h3>
        <h3>Family Events & Vacations</h3>
        <h3>Everyday Casual Fashion</h3>
      </div>
      <div className="footer">
        <div>
          <h2>Contact us!</h2>
          <h5>Instagram:</h5>
          <h5>Facebook:</h5>
          <h5>Phone:</h5>
          <h5>Email:</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
