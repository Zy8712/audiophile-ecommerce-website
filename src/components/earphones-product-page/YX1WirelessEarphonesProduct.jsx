import YX1WirelessEarphonesProductBlock from "./YX1WirelessEarphonesProductBlock";
import YX1WirelessEarphonesProductFeatures from "./YX1WirelessEarphonesProductFeatures";
import YX1WirelessEarphonesProductGallery from "./YX1WirelessEarphonesProductGallery";
import YX1WirelessEarphonesProductPageRecommendations from "./YX1WirelessEarphonesProductPageRecommendations";

import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";

function YX1WirelessEarphonesProduct() {

    return (
        <>
            <div className="w-full">
                <div className="block text-[15px] font-medium leading-[25px] opacity-50 mb-14">
                    <span className="text-black hover:text-theme-dark-orange cursor-pointer">
                        Go Back
                    </span>
                </div>
                <div className="w-full h-[5251px] sm:h-[3456px] lg:h-[3713px] flex flex-col justify-between items-center">
                    <YX1WirelessEarphonesProductBlock />
                    <YX1WirelessEarphonesProductFeatures />
                    <YX1WirelessEarphonesProductGallery />
                    <YX1WirelessEarphonesProductPageRecommendations />
                    <ProductCategories />
                    <SiteDescription />
                </div>
            </div>
        </>
    );
};

export default YX1WirelessEarphonesProduct;