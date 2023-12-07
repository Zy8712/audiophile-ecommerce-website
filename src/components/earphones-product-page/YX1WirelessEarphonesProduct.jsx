import YX1WirelessEarphonesProductBlock from "./YX1WirelessEarphonesProductBlock";
import YX1WirelessEarphonesProductFeatures from "./YX1WirelessEarphonesProductFeatures";
import YX1WirelessEarphonesProductGallery from "./YX1WirelessEarphonesProductGallery";
import YX1WirelessEarphonesProductPageRecommendations from "./YX1WirelessEarphonesProductPageRecommendations";

import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";
import GoBackButton from "../GoBackButton";

function YX1WirelessEarphonesProduct({ yx1ItemCount, updateYX1ItemCount }) {

    return (
        <>
            <div className="w-full">
                <GoBackButton
                    backLink="/earphones"
                />
                <div className="w-full h-[5251px] sm:h-[3456px] lg:h-[3713px] flex flex-col justify-between items-center">
                    <YX1WirelessEarphonesProductBlock yx1ItemCount={ yx1ItemCount } updateYX1ItemCount={ updateYX1ItemCount } />
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