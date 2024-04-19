import { SwiperSlide } from "swiper/react";
import SwiperSlider from "./SwiperSlider";
import SwiperNext from "./components/SwiperNext";
import SwiperPagination from "./components/SwiperPagination";
import SwiperPrev from "./components/SwiperPrev";

export const Swiper = {
    Slider: SwiperSlider,
    Prev: SwiperPrev,
    Next: SwiperNext,
    Pagination: SwiperPagination,
    Slide: SwiperSlide
}