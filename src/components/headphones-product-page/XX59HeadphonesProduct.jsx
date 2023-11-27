import XX59HeadphonesProductBlock from "./XX59HeadphonesProductBlock";
import XX59HeadphonesProductFeatures from "./XX59HeadphonesProductFeatures";
import XX59HeadphonesProductGallery from "./XX59HeadphonesProductGallery";
import XX59HeadphonesProductPageRecommendations from "./XX59HeadphonesProductPageRecommendations";

import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";
import GoBackButton from "../GoBackButton";

function XX59HeadphonesProduct() {

    return (
        <>
            <div className="w-full">
                <GoBackButton 
                    backLink="/headphones"
                />
                <div className="w-full h-[5251px] sm:h-[3456px] lg:h-[3713px] flex flex-col justify-between items-center">
                    <XX59HeadphonesProductBlock />
                    <XX59HeadphonesProductFeatures />
                    <XX59HeadphonesProductGallery />
                    <XX59HeadphonesProductPageRecommendations />
                    <ProductCategories />
                    <SiteDescription />
                </div>
            </div>
        </>
    );
};

export default XX59HeadphonesProduct;