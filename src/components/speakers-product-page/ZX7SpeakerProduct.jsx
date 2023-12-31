import ZX7SpeakerProductBlock from "./ZX7SpeakerProductBlock";
import ZX7SpeakerProductFeatures from "./ZX7SpeakerProductFeatures";
import ZX7SpeakerProductGallery from "./ZX7SpeakerProductGallery";
import ZX7SpeakerProductPageRecommendations from "./ZX7SpeakerProductPageRecommendations";

import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";
import GoBackButton from "../GoBackButton";

function ZX7SpeakerProduct({zx7ItemCount, updateZX7ItemCount}) {

    return (
        <>
            <div className="w-full">
                <GoBackButton 
                    backLink="/speakers"
                />
                <div className="w-full h-[5251px] sm:h-[3456px] lg:h-[3713px] flex flex-col justify-between items-center">
                    <ZX7SpeakerProductBlock zx7ItemCount={zx7ItemCount} updateZX7ItemCount={updateZX7ItemCount} />
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