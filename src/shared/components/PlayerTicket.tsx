import Ticket from "../types/Ticket";

export default function PlayerTicket({ img, date, weekend, time, name, about, button_text }: Ticket) {
    return (
        <div className="w-[250px]">
            <div className="ticket p-4 text-center ticket-light dark:ticket-dark">

                <img src={`/assets/${img}`} className="shadow-ticket-img object-center object-cover" height="401" width="226" />
                <hr className="border-dashed border-[0.9px] border-alt7 dark:border-alt10 my-5 mx-auto w-[90%]" />

                <h3 className="dark:text-white font-default font-medium text-[17px] leading-7 text-black mt-0 mb-3">{name}</h3>
                <p className="dark:text-white mt-0 mb-4 font-default font-normal text-[14px] leading-5 text-black">{date} | {weekend} | {time}</p>
                <p className="dark:text-white mt-0 mb-5 font-alt font-normal text-[14px] leading-5 text-black">{about}</p>

                <button className="btn-secondary w-full">{button_text}</button>

            </div>
        </div>
    )
}