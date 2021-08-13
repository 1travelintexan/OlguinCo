import React from "react";
import { Link } from "react-router-dom";
import shirts from "../images/olguinImages/manyShirts.jpg";
import css from "../App.css";

function Home() {
  return (
    <div className="container center">
      <div className=" center home-image">
        <img className=" center home-image" src={shirts} alt="many shirts" />
        <h3 className="home-words">
          With the Olguin Co. we will work with you to make sure your dream
          shirt is made perfectly to your taste from size to colors. We make
          shirts for any type of occasion!
        </h3>

        <Link className="link" to="/contact">
          <button>Get started</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
