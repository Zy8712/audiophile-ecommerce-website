import ProductPageListingBlock from "../product-details-pages/ProductPageListingBlock";
import Product_Preview from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

function YX1WirelessEarphonesProductBlock() {

    return (
        <>
            <ProductPageListingBlock
                productPreviewImage={Product_Preview}
                newProduct={true}
                productNameFront="YX1 Wireless"
                productNameBack="Earphones"
                productDescription="Tailor your listening experience with bespoke dynamic drivers 
                from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy 
                environments with its active noise cancellation feature."    
                productPrice="599"        
            />
        </>
    );
};

export default YX1WirelessEarphonesProductBlock;