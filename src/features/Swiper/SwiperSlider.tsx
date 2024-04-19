import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';

/* Styles File  */
import './swiper.scss';

import { SwiperOptions } from './types/SwiperOptions';

export default function SwiperSlider({ className, children, autoplay, breakpoints, name, spaceBetween, slidesPerView }: SwiperOptions) {
  return (
    <Swiper
      allowSlidePrev={true}
      allowSlideNext={true}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      autoplay={autoplay && {
        delay: 5000,
      }}
      loop={autoplay}
      navigation={{
        nextEl: `.swiper-button-next.${name}`,
        prevEl: `.swiper-button-prev.${name}`,
      }}
      pagination={{
        clickable: true,
        el: `.swiper-pagination.${name}`,
      }}
      modules={[Navigation, Pagination, Autoplay, Thumbs]}
      className={`${name} swiper swiper-horizontal ${className} `}
      id={name}>
      {children}
    </Swiper>
  );
}
