import React from "react";
import css from "../App.css";
import pic1 from "../public/olguinImages/shirt1.jpeg";
import pic2 from "../public/olguinImages/shirt2.jpeg";
import pic3 from "../public/olguinImages/shirt3.jpeg";
import pic4 from "../public/olguinImages/shirt4.jpeg";
import pic5 from "../public/olguinImages/shirt5.jpeg";
import pic6 from "../public/olguinImages/shirt6.jpeg";

function Products() {
  return (
    <div className="center">
      <h2 className="product-words">Sample Products</h2>
      <div className="center">
        <img className="shirts" src={pic1} alt="shirt pic" />
      </div>
      <div className="center">
        <img className="shirts" src={pic2} alt="shirt pic" />
      </div>
      <div className="center">
        <img className="shirts" src={pic3} alt="shirt pic" />
      </div>
      <div className="center">
        <img className="shirts" src={pic4} alt="shirt pic" />
      </div>
      <div className="center">
        <img className="shirts" src={pic5} alt="shirt pic" />
      </div>
      <div className="center">
        <img className="shirts" src={pic6} alt="shirt pic" />
      </div>
    </div>
  );
}

export default Products;
