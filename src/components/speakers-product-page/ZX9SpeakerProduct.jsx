import ZX9SpeakerProductBlock from "./ZX9SpeakerProductBlock";
import ZX9SpeakerProductFeatures from "./ZX9SpeakerProductFeatures";
import ZX9SpeakerProductGallery from "./ZX9SpeakerProductGallery";
import ZX9SpeakerProductPageRecommendations from "./ZX9SpeakerProductPageRecommendations";

import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";

function ZX9SpeakerProduct() {

    return (
        <>
            <div className="w-full">
                <div className="block text-[15px] font-medium leading-[25px] opacity-50 mb-14">
                    <span className="text-black hover:text-theme-dark-orange cursor-pointer">
                        Go Back
                    </span>
                </div>
                <div className="w-full h-[3713px] flex flex-col justify-between">
                    <ZX9SpeakerProductBlock />
                    <ZX9SpeakerProductFeatures />
                    <ZX9SpeakerProductGallery />
                    <ZX9SpeakerProductPageRecommendations />
                    <ProductCategories />
                    <SiteDescription />
                </div>
            </div>
        </>
    );
};

export default ZX9SpeakerProduct;