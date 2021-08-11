import React from "react";
import { Link } from "react-router-dom";
import css from "../App.css";

function Home() {
  return (
    <div className="center">
      <div className=" home-image">
        <h1 className="home-words ">
          Let us customize the T-shirt of your dreams!{" "}
        </h1>
        <Link to="/contact">
          <button className="button">Get started</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
