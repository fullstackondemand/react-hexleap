export default function AdsCard() {
    return (
        <div className="shadow-card dark:bg-alt2 bg-white p-[10px] w-100">

            <div className="border-alt4-0_2 h-100">
                <div className="ads">
                    <img src="/assets/ad.jpg" className="object-center object-cover w-100" alt="Dick Ads" height="218" width="218" />
                </div>

                <div className="pt-3 px-3">
                    <h3 className="mb-2 dark:text-white text-alt5 font-alt font-semibold text-[20px] leading-[24px]">Advertisement Title</h3>
                    <p className="font-alt leading-[19px] text-[13px] font-normal text-alt1 dark:text-alt3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

            </div>
        </div>
    )
}
