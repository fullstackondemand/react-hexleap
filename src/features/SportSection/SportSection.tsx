import { ReactSwiper } from "@creativeworlds/react-swiper";
import { AdsCard, PlayerCard } from "../../shared";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import SportCard from "./sport-card.json";

export default function SportSection() {

    return (
        <section className="sportSection">
            <div className="py-5 px-3 mx-auto lg:my-5 p-3">

                <div className="flex gap-[30px] items-center mb-6 lg:mb-8">
                    <div className="inline-block w-full">
                        <h3 className="text-black font-default text-bold text-[24px] leading-[36px] my-0 dark:text-white">Sports</h3>
                        <hr className="w-[80px] h-[2px] bg-alt ml-0 border-0" />
                    </div>

                    <ThemeSwitcher />
                </div>

                <div className="gap-3 hidden lg:flex">
                    {SportCard.map(sport =>
                        <PlayerCard {...sport} key={sport._id} />
                    )}
                    <AdsCard />
                </div>

                <ReactSwiper.Slider className="lg:hidden -mx-3" name="sport" autoplay spaceBetween={30} slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        }
                    }}>

                    {SportCard.map(sport =>
                        <ReactSwiper.Slide key={sport._id}>
                            <div className="p-3 flex justify-center">
                                <PlayerCard {...sport} />
                            </div>
                        </ReactSwiper.Slide>
                    )}

                    <ReactSwiper.Pagination className="sport" />
                </ReactSwiper.Slider>

                <div className="mt-6 lg:mt-12 pb-9">
                    <a href="#" className="shadow-card btn-primary mx-auto">See More</a>
                </div>

            </div>
        </section>
    )
}
