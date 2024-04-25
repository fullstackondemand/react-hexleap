export default function PlayerTicket() {
    return (
        <div className="w-[250px]">
            <div className="ticket p-4 text-center ticket-light dark:ticket-dark">

                <img src="/assets/ticket-one.jpg" className="shadow-ticket-img object-center object-cover" height="401" width="226" />
                <hr className="border-dashed border-[0.9px] border-alt7 dark:border-alt10 my-5 mx-auto w-[90%]" />

                <h3 className="dark:text-white font-default font-medium text-[17px] leading-7 text-black mt-0 mb-3">Las Vegas Aviators</h3>
                <p className="dark:text-white mt-0 mb-4 font-default font-normal text-[14px] leading-5 text-black">Oct 15 | Sun | 4:30 PM</p>
                <p className="dark:text-white mt-0 mb-5 font-alt font-normal text-[14px] leading-5 text-black">Las Vegas Ballpark, Las Vegas, Nevada</p>

                <button className="btn-secondary w-full">Take Flight Collection</button>

            </div>
        </div>
    )
}