import "./Banner.css";
import { useEffect } from "react";
import React from "react";

function Banner() {
  //Called Slider using UseEffect
  useEffect(() => Slider(0), []);
  return (
    <>
      <div className="banner">
        <div className="bannerContainer">
          <div className="bannerSliderContainer">
            <div className="bannerSlide">
              <img
                className="bannerImg"
                src="https://m.media-amazon.com/images/I/81D8QUBQx9L._SX3000_.jpg"
                alt=""
              />
            </div>

            <div className="bannerSlide">
              <img
                className="bannerImg"
                src="https://m.media-amazon.com/images/I/81D-sLpLnaL._SX3000_.jpg"
                alt=""
              />
            </div>

            <div className="bannerSlide">
              <img
                className="bannerImg"
                src="https://m.media-amazon.com/images/I/61MTFnfw6YL._SX3000_.jpg"
                alt=""
              />
            </div>

            <div className="bannerSlide">
              <img
                className="bannerImg"
                src="https://m.media-amazon.com/images/I/71czb0GARJL._SX3000_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//Banner Slider

function Slider(Counter) {
  const slides = document.querySelectorAll(".bannerImg");
  slides.forEach((slide, index) => {
    if (index !== Counter) {
      slide.style.visibility = `hidden`;
      slide.classList.add(`image-${index}`);
    }
  });
  moveImages(Counter, slides, slides.length);
}

function moveImages(Counter, slides, len) {
  if (slides) {
    if (Counter >= len - 1) Counter = 0;
    else Counter += 1;

    slides.forEach((slide, index) => {
      if (index === Counter) {
        slide.style.visibility = `visible`;
      } else {
        slide.style.visibility = `hidden`;
      }
    });
  }

  setTimeout(() => {
    moveImages(Counter, slides, len);
  }, 3000);
}
export default Banner;
