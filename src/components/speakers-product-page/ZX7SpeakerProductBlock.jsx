import ProductPageListingBlock from "../product-details-pages/ProductPageListingBlock";
import Product_Preview from "../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";

function ZX7SpeakerProductBlock() {

    return (
        <>
            <ProductPageListingBlock
                productPreviewImage={Product_Preview}
                newProduct={false}
                productNameFront="ZX7"
                productNameBack="Speaker"
                productDescription="Stream high quality sound wirelessly with 
                minimal to no loss. The ZX7 speaker uses high-end audiophile 
                components that represents the top of the line powered speakers 
                for home or studio use."  
                productPrice="3,500"          
            />
        </>
    );
};

export default ZX7SpeakerProductBlock;