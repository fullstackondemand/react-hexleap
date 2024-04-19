import { ReactNode } from "react";

export type BreakPoint = {
    allowSlidePrev?: boolean;
    allowSlideNext?: boolean;
    slidesPerView: number;
    spaceBetween: number;
}

export type BreakPoints = {
    [width: number]: BreakPoint;
}

export type SwiperOptions = {
    name: string;
    children: ReactNode,
    className: string,
    autoplay?: boolean,
    slidesPerView?: number;
    spaceBetween: number,
    breakpoints?: BreakPoints;
}