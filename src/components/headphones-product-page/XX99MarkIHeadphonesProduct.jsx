import XX99MarkIHeadphonesProductBlock from "./XX99MarkIHeadphonesProductBlock";
import XX99MarkIHeadphonesProductFeatures from "./XX99MarkIHeadphonesProductFeatures";
import XX99MarkIHeadphonesProductGallery from "./XX99MarkIHeadphonesProductGallery";
import XX99MarkIHeadphonesProductPageRecommendations from "./XX99MarkIHeadphonesProductPageRecommendations";

import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";

function XX99MarkIHeadphonesProduct() {

    return (
        <>
            <div className="w-full">
                <div className="block text-[15px] font-medium leading-[25px] opacity-50 mb-14">
                    <span className="text-black hover:text-theme-dark-orange cursor-pointer">
                        Go Back
                    </span>
                </div>
                <div className="w-full h-[5251px] sm:h-[3456px] lg:h-[3713px] flex flex-col justify-between">
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