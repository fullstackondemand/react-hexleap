import Card from "../types/Card";

export default function PlayerCard({ img, name, total_events, sport }: Card) {
    return (
        <div className="shadow-card dark:bg-alt2 bg-white p-[10px] inline-block w-100">
            <img src={`/assets/${img}`} className="object-center object-cover w-100" alt="Sacramento River Cats" height="385" width="218" />
            <h3 className="my-3 dark:text-white text-black font-alt font-medium text-[17px] leading-[21px]">{name}</h3>
            <div className="px-3 dark:bg-darkTheme bg-lightTheme rounded-[2px] flex">
                <div className="w-100">
                    <p className="font-alt leading-[15px] text-[12px] font-normal text-alt1 dark:text-alt3">Total Events</p>
                    <p className="font-alt leading-[17px] text-[12px] font-medium text-black dark:text-white">{total_events} Events</p>
                </div>
                <div className="w-100">
                    <p className="font-alt leading-[15px] text-[12px] font-normal text-alt1 dark:text-alt3">Sport</p>
                    <p className="font-alt leading-[17px] text-[12px] font-medium text-black dark:text-white">{sport}</p>
                </div>
            </div>
        </div>
    )
}
