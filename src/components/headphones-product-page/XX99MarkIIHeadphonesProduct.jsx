import XX99MarkIIHeadphonesProductBlock from "./XX99MarkIIHeadphonesProductBlock";
import XX99MarkIIHeadphonesProductFeatures from "./XX99MarkIIHeadphonesProductFeatures";
import XX99MarkIIHeadphonesProductGallery from "./XX99MarkIIHeadphonesProductGallery";
import XX99MarkIIHeadphonesProductPageRecommendations from "./XX99MarkIIHeadphonesProductPageRecommendations";

import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";

function XX99MarkIIHeadphonesProduct() {

    return (
        <>
            <div className="w-full">
                <div className="block text-[15px] font-medium leading-[25px] opacity-50 mb-14">
                    <span className="text-black hover:text-theme-dark-orange cursor-pointer">
                        Go Back
                    </span>
                </div>
                <div className="w-full h-[5251px] sm:h-[3456px] lg:h-[3713px] flex flex-col justify-between items-center">
                    <XX99MarkIIHeadphonesProductBlock />
                    <XX99MarkIIHeadphonesProductFeatures />
                    <XX99MarkIIHeadphonesProductGallery />
                    <XX99MarkIIHeadphonesProductPageRecommendations />
                    <ProductCategories />
                    <SiteDescription />
                </div>
            </div>
        </>
    );
};

export default XX99MarkIIHeadphonesProduct;