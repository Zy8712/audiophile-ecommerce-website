import HeadphonesProductListings from "./HeadphonesProductListings";
import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";

function HeadphonesProductsDirectories() {

    return (
        <>
            <div className="w-full flex justify-center items-center pt-[120px] pb-[196px]">
                <div className="w-[1110px] h-[3192px] flex flex-col justify-between">

                    <HeadphonesProductListings />
                    <ProductCategories />
                    <SiteDescription />                

                </div>
            </div>
        </>
    );
}

export default HeadphonesProductsDirectories;