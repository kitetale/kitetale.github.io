import React, { useState, useEffect } from "react";
import {
  container,
  wrapper,
  left,
  right,
  contentWrapper,
  caroContent,
} from "./Carousel.module.css";

const Carousel = (props) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className={container}>
      <div className={wrapper}>
        {currentIndex > 0 && (
          <button className={left} onClick={prev}>
            &lt;
          </button>
        )}

        <div className={contentWrapper}>
          <div
            className={caroContent}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "1.5s",
            }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - 1 && (
          <button className={right} onClick={next}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
