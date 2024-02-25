import React, { FC } from "react";

import { ReactSVG } from "react-svg";
import { useStaticQuery, graphql } from "gatsby";

import { useSwiper } from "swiper/react";
import "./SwiperToggles.sass";

type SwiperTogglesProps = {
  isBeginning?: number;
  isEnd?: boolean;
};
const SwiperToggles: FC<SwiperTogglesProps> = ({ isEnd, isBeginning }) => {
  const selfSwiper = useSwiper();
  const onPrev = () => selfSwiper.slidePrev();
  const onNext = () => selfSwiper.slideNext();

  return (
    <div className="slider-toggles">
      <div className="slider-toggles-btns">
        <button
          onClick={onPrev}
          className="swiper-button-prev page-btn "
          disabled={isBeginning === 0}
        ></button>
        <button
          onClick={onNext}
          className="swiper-button-next page-btn "
          disabled={isEnd}
        ></button>
      </div>
    </div>
  );
};

export { SwiperToggles };
