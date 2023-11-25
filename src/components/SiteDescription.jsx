import SiteDescriptionPortrait from "../assets/shared/desktop/image-best-gear.jpg";
import SiteDescriptionTablet from "../assets/shared/tablet/image-best-gear.jpg";
import SiteDescriptionMobile from "../assets/shared/mobile/image-best-gear.jpg";

function SiteDescription() {

    return (
        <>
            <div className="w-full h-[798px] sm:h-[600px] md:h-[660px] custom-md:h-[588px] flex flex-col-reverse custom-md:flex-row justify-between items-center transition-all duration-500 ease-in-out">
                <div className="w-full sm:w-[573px] custom-md:w-[445px] h-[358px] custom-sm:h-[295px] sm:h-[270px] md:h-[300px] custom-md:h-[295px] flex flex-col text-center custom-md:text-left transition-all duration-500 ease-in-out">
                    <p className="text-black text-[28px] sm:text-[40px] leading-[44px] tracking-[1.43px] uppercase font-bold transition-all duration-500 ease-in-out">
                        Bringing you the <span className="text-theme-dark-orange">best </span> audio gear
                    </p>
                    <p className="text-black opacity-50 font-medium text-[15px] leading-[25px] mt-8">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
                        We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
                        Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <img src={SiteDescriptionPortrait} className="hidden custom-md:inline" />
                    <img src={SiteDescriptionTablet} className="hidden sm:inline custom-md:hidden" />
                    <img src={SiteDescriptionMobile} className="inline sm:hidden" />
                </div>
            </div>
        </>
    );
};

export default SiteDescription