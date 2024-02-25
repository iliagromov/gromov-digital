import React, { ComponentProps, FC } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper } from "swiper/react";
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// style
import "./SwiperSlider.sass";
// import { SwiperToggles } from "./SwiperToggles";
import cn from "classnames";

type SwiperProps = ComponentProps<typeof Swiper>;

type SwiperSliderProps = {
  children?: any[];
  swiperParams?: SwiperProps;
  classNames?: any;
  items?: any[];
};

const SwiperSlider: FC<SwiperSliderProps> = ({
  children,
  swiperParams,
  classNames,
}) => {
  const params: SwiperProps = swiperParams
    ? swiperParams
    : {
        spaceBetween: 20,
        slidesPerView: 2,
        initialSlide: 2,
        navigation: false,
        onSwiper: (swiper) => console.log(swiper),
        onSlideChange: () => console.log("slide change"),
      };

  return (
    <Swiper className={cn("slider", classNames)} {...params}>
      <div className="slider__items swiper-wrapper">{children}</div>
    </Swiper>
  );
};

export { SwiperSlider };
