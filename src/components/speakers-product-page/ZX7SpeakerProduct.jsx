import ZX7SpeakerProductBlock from "./ZX7SpeakerProductBlock";
import ZX7SpeakerProductFeatures from "./ZX7SpeakerProductFeatures";
import ZX7SpeakerProductGallery from "./ZX7SpeakerProductGallery";
import ZX7SpeakerProductPageRecommendations from "./ZX7SpeakerProductPageRecommendations";

import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";
import GoBackButton from "../GoBackButton";

function ZX7SpeakerProduct() {

    return (
        <>
            <div className="w-full">
                <div className="block text-[15px] font-medium leading-[25px] opacity-50 mb-14">
                    <span className="text-black hover:text-theme-dark-orange cursor-pointer">
                        Go Back
                    </span>
                </div>                
                <div className="w-full h-[5251px] sm:h-[3456px] lg:h-[3713px] flex flex-col justify-between items-center">
                    <ZX7SpeakerProductBlock />
                    <ZX7SpeakerProductFeatures />
                    <ZX7SpeakerProductGallery />
                    <ZX7SpeakerProductPageRecommendations />
                    <ProductCategories />
                    <SiteDescription />
                </div>
            </div>
        </>
    );
};

export default ZX7SpeakerProduct;