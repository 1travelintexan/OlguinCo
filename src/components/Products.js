import React from "react";
import css from "../App.css";
import pic1 from "../images/olguinImages/shirt1.jpeg";
import pic2 from "../images/olguinImages/shirt2.jpeg";
import pic3 from "../images/olguinImages/shirt3.jpeg";
import pic4 from "../images/olguinImages/shirt4.jpeg";
import pic5 from "../images/olguinImages/shirt5.jpeg";
import pic6 from "../images/olguinImages/shirt6.jpeg";

function Products() {
  return (
    <div className="center">
      <h2 className="product-words">Sample Products</h2>
      <div className="center">
        <img className="shirts" src={pic1} alt="shirt1 pic" />
      </div>
      <div className="center">
        <img className="shirts" src={pic2} alt="shirt2 pic" />
      </div>
      <div className="center">
        <img className="shirts" src={pic3} alt="shirt3 pic" />
      </div>
      <div className="center">
        <img className="shirts" src={pic4} alt="shirt4 pic" />
      </div>
      <div className="center">
        <img className="shirts" src={pic5} alt="shirt5 pic" />
      </div>
      <div className="center">
        <img className="shirts" src={pic6} alt="shirt6 pic" />
      </div>
    </div>
  );
}

export default Products;
