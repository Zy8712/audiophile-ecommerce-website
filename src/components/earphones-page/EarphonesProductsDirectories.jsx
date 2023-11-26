import EarphonesProductListings from "./EarphonesProductListings";
import ProductCategories from "../ProductCategories";
import SiteDescription from "../SiteDescription";

function EarphonesProductsDirectories() {

    return (
        <>
            <div className="w-full flex justify-center items-center pt-[120px] pb-[196px]">
                <div className="w-[95%] lg:w-[1110px] h-[2345px] sm:h-[1796px] lg:h-[1752px] flex flex-col justify-between">

                    <EarphonesProductListings />
                    <ProductCategories />
                    <SiteDescription />                

                </div>
            </div>
        </>
    );
}

export default EarphonesProductsDirectories;