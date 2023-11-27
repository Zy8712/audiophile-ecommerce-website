import ZX9SpeakerProductBlock from "./ZX9SpeakerProductBlock";
import ZX9SpeakerProductFeatures from "./ZX9SpeakerProductFeatures";
import ZX9SpeakerProductGallery from "./ZX9SpeakerProductGallery";
import ZX9SpeakerProductPageRecommendations from "./ZX9SpeakerProductPageRecommendations";

import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";
import GoBackButton from "../GoBackButton";

function ZX9SpeakerProduct() {

    return (
        <>
            <div className="w-full">
                <GoBackButton
                    backLink="/speakers"
                />
                <div className="w-full h-[5251px] sm:h-[3456px] lg:h-[3713px] flex flex-col justify-between items-center">
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