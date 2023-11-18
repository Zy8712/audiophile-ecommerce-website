import ProductCategories from "../ProductCategories";
import HomeProductListings from "./HomeProductListings";
import SiteDescription from "../SiteDescription";

function HomeProductsDirectories() {

    return (
        <>
            <div className="w-full flex justify-center items-center pt-[120px] pb-[200px]">
                <div className="w-[1110px] h-[2536px] flex flex-col justify-between">

                    <ProductCategories />

                    <HomeProductListings />

                    <SiteDescription />                

                </div>
            </div>
        </>
    );
}

export default HomeProductsDirectories;