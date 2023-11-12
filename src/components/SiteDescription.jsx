import SiteDescriptionPortrait from "../assets/shared/desktop/image-best-gear.jpg";

function SiteDescription() {

    return (
        <>
            <div className="w-full h-[588px] flex justify-between items-center mt-40">
                <div className="w-[445px] h-[295px] flex flex-col">
                    <p className="text-black text-[40px] leading-[44px] tracking-[1.43px] uppercase font-bold">
                        Bringing you the <span className="text-theme-dark-orange">best </span> audio gear
                    </p>

                    <p className="text-black opacity-50 font-medium text-[15px] leading-[25px] mt-8">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
                        We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
                        Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <img src={SiteDescriptionPortrait} />
                </div>
            </div>
        </>
    );
};

export default SiteDescription