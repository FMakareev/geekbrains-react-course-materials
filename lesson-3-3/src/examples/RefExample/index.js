import React, {useEffect, useRef} from 'react';
import '@splidejs/splide/dist/css/splide-core.min.css';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import Splide from "@splidejs/splide";



export const RefExample = () => {
  const sliderContainer = useRef(null);

  useEffect(() => {
    if (sliderContainer.current) {
      new Splide( sliderContainer.current ).mount();
    }
  }, [])

  return (
    <div ref={sliderContainer} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">Slide 01</li>
          <li className="splide__slide">Slide 02</li>
          <li className="splide__slide">Slide 03</li>
        </ul>
      </div>
    </div>
  );
};
