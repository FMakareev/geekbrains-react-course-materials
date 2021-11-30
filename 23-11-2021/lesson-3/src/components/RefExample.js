import React, { useEffect, useRef } from "react";
import "@splidejs/splide/dist/css/splide-core.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import Splide from "@splidejs/splide";

export const RefExample = ({list}) => {
  const sliderContainer = useRef(null);

  useEffect(() => {
    console.log(sliderContainer);
    if (sliderContainer.current) {
      const slide = new Splide(sliderContainer.current).mount();
      return () => {
        slide.destroy();
      }
    }
  }, [list]);

  return (
    <div ref={sliderContainer} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {
            list.map((item) => <li key={item} className="splide__slide">{item}</li>)
          }
        </ul>
      </div>
    </div>
  );
};
