import { SliderData } from "./SliderData";
import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //if there is no data then show nothing
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  //next picture function
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  //previous picture function
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(SliderData);
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="slider pics"
                className="slider-image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
