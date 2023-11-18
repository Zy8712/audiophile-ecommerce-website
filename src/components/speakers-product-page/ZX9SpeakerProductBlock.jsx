import ProductPageListingBlock from "../product-details-pages/ProductPageListingBlock";
import Product_Preview from "../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";

function ZX9SpeakerProductBlock() {

    return (
        <>
            <ProductPageListingBlock
                productPreviewImage={Product_Preview}
                newProduct={true}
                productNameFront="ZX9"
                productNameBack="Speaker"
                productDescription="Upgrade your sound system with the all new 
                ZX9 active speaker. It’s a bookshelf speaker system that offers 
                truly wireless connectivity -- creating new possibilities for more 
                pleasing and practical audio setups."  
                productPrice="4,500"          
            />
        </>
    );
};

export default ZX9SpeakerProductBlock;