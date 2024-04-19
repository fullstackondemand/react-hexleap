import { Swiper } from "../types/Swiper";

export default function SwiperNext({ children, className }: Swiper) {
    return (
        <div className={`swiper-button-next ${className}`}>
            {children}
        </div>
    )
}
