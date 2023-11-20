import ProductCategories from "../ProductCategories";
import HomeProductListings from "./HomeProductListings";
import SiteDescription from "../SiteDescription";

function HomeProductsDirectories() {

    return (
        <>
            <div className="w-full flex justify-center items-center pt-[120px] pb-[200px]">
                <div className="w-[95%] md:w-[740px] custom-md:w-[860px] lg:w-[980px] custom-lg:w-[1110px] h-[3013px] sm:h-[2866px] md:h-[2536px] flex flex-col justify-between transition-all duration-500 ease-in-out">

                    <ProductCategories />

                    <HomeProductListings />

                    <SiteDescription />                

                </div>
            </div>
        </>
    );
}

export default HomeProductsDirectories;