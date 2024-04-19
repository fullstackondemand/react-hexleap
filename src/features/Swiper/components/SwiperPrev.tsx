import { Swiper } from "../types/Swiper";

export default function SwiperPrev({ children, className }: Swiper) {
    return (
        <div className={`swiper-button-prev ${className}`}>
            {children}
        </div>
    )
}
