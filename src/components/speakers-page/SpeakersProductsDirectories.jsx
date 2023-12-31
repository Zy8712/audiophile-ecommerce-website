import SpeakersProductListings from "./SpeakersProductListings";
import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";

function SpeakersProductsDirectories() {

    return (
        <>
            <div className="w-full flex justify-center items-center pt-[120px] pb-[196px]">
                <div className="w-[95%] lg:w-[1110px] h-[3146px] sm:h-[2587px] lg:h-[2472px] flex flex-col justify-between">

                    <SpeakersProductListings />
                    <ProductCategories />
                    <SiteDescription />                

                </div>
            </div>
        </>
    );
}

export default SpeakersProductsDirectories;