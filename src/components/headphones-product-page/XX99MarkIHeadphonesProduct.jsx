import XX99MarkIHeadphonesProductBlock from "./XX99MarkIHeadphonesProductBlock";
import XX99MarkIHeadphonesProductFeatures from "./XX99MarkIHeadphonesProductFeatures";
import XX99MarkIHeadphonesProductGallery from "./XX99MarkIHeadphonesProductGallery";
import XX99MarkIHeadphonesProductPageRecommendations from "./XX99MarkIHeadphonesProductPageRecommendations";

import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";
import GoBackButton from "../GoBackButton";

function XX99MarkIHeadphonesProduct() {

    return (
        <>
            <div className="w-full">
                <GoBackButton 
                    backLink="/headphones"
                />
                <div className="w-full h-[5251px] sm:h-[3456px] lg:h-[3713px] flex flex-col justify-between items-center">
                    <XX99MarkIHeadphonesProductBlock />
                    <XX99MarkIHeadphonesProductFeatures />
                    <XX99MarkIHeadphonesProductGallery />
                    <XX99MarkIHeadphonesProductPageRecommendations />
                    <ProductCategories />
                    <SiteDescription />
                </div>
            </div>
        </>
    );
};

export default XX99MarkIHeadphonesProduct;