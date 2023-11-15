
import Product_Preview from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

function YX1WirelessEarphonesProductBlock(){

    return(
        <>
            <div className="w-full h-[560px] flex justify-between items-center">
                <img src={Product_Preview} alt="" className="h-full" />
                <div className="w-[445.5px] h-[372px] relative">
                    <span className="absolute">New Product</span>
                </div>
            </div>
        </>
    );
};

export default YX1WirelessEarphonesProductBlock;