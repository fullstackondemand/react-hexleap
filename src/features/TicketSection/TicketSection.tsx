import { ReactSwiper } from "@creativeworlds/react-swiper";
import { PlayerTicket } from "../../shared";

export default function TicketSection() {
    return (
        <section className="ticket-section mt-12">
            <div className="gradient-light-bg dark:gradient-dark-bg p-5 lg:p-12 xxl:p-20">

                <h2 className="dark:text-white text-center font-default font-bold text-[30px] lg:text-[50px] leading-[43px] lg:leading-[53px] text-black mb-6 mt-0">Collection Spotlight</h2>
                <p className="dark:text-white text-center font-alt text-[14px] leading-[23px] font-normal mb-12 text-black">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>

                <ReactSwiper.Slider className="px-10 lg:-mx-5" name="ticket-swiper" autoplay spaceBetween={60} slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}>
                    <ReactSwiper.Slide>
                        <div className="p-3 flex justify-center">
                            <PlayerTicket />
                        </div>
                    </ReactSwiper.Slide>

                    <ReactSwiper.Slide>
                        <div className="p-3 flex justify-center">
                            <PlayerTicket />
                        </div>
                    </ReactSwiper.Slide>

                    <ReactSwiper.Slide>
                        <div className="p-3 flex justify-center">
                            <PlayerTicket />
                        </div>
                    </ReactSwiper.Slide>

                    <ReactSwiper.Slide>
                        <div className="p-3 flex justify-center">
                            <PlayerTicket />
                        </div>
                    </ReactSwiper.Slide>

                    <ReactSwiper.Next className="ticket-swiper hidden lg:flex h-[49px] w-[37px] justify-center items-center border-alt6 border border-solid">
                        <img src="/assets/svgs/chevron-right.svg" className="inline-block" width="11" height="19" />
                    </ReactSwiper.Next>
                    <ReactSwiper.Prev className="ticket-swiper hidden lg:flex h-[49px] w-[37px] justify-center items-center border-alt6 border border-solid">
                        <img src="/assets/svgs/chevron-left.svg" className="inline-block" width="11" height="19" />
                    </ReactSwiper.Prev>

                    <ReactSwiper.Pagination className="ticket-swiper lg:!hidden mb-10 mt-2" />
                </ReactSwiper.Slider>

            </div>
        </section>
    )
}
