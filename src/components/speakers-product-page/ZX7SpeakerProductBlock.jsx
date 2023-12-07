import ProductPageListingBlock from "../product-details-pages/ProductPageListingBlock";
import Product_Preview_Desktop from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
import Product_Preview_Tablet from "../../assets/product-zx7-speaker/tablet/image-product.jpg";
import Product_Preview_Mobile from "../../assets/product-zx7-speaker/mobile/image-product.jpg";

function ZX7SpeakerProductBlock({zx7ItemCount, updateZX7ItemCount}) {

    return (
        <>
            <ProductPageListingBlock
                productPreviewImageDesktop={Product_Preview_Desktop}
                productPreviewImageTablet={Product_Preview_Tablet}
                productPreviewImageMobile={Product_Preview_Mobile}
                newProduct={false}
                productNameFront="ZX7"
                productNameBack="Speaker"
                productDescription="Stream high quality sound wirelessly with 
                minimal to no loss. The ZX7 speaker uses high-end audiophile 
                components that represents the top of the line powered speakers 
                for home or studio use."
                productPrice="3,500"
                itemCount={zx7ItemCount}
                updateItemCount={updateZX7ItemCount}
            />
        </>
    );
};

export default ZX7SpeakerProductBlock;