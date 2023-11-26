import ProductPageListingBlock from "../product-details-pages/ProductPageListingBlock";
import Product_Preview_Desktop from "../../assets/product-yx1-earphones/desktop/image-product.jpg";
import Product_Preview_Tablet from "../../assets/product-yx1-earphones/tablet/image-product.jpg";
import Product_Preview_Mobile from "../../assets/product-yx1-earphones/mobile/image-product.jpg";

function YX1WirelessEarphonesProductBlock() {

    return (
        <>
            <ProductPageListingBlock
                productPreviewImageDesktop={Product_Preview_Desktop}
                productPreviewImageTablet={Product_Preview_Tablet}
                productPreviewImageMobile={Product_Preview_Mobile}
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