import ProductPageListingBlock from "../product-details-pages/ProductPageListingBlock";
import Product_Preview_Desktop from "../../assets/product-zx9-speaker/desktop/image-product.jpg";
import Product_Preview_Tablet from "../../assets/product-zx9-speaker/tablet/image-product.jpg";
import Product_Preview_Mobile from "../../assets/product-zx9-speaker/mobile/image-product.jpg";

function ZX9SpeakerProductBlock({zx9ItemCount, updateZX9ItemCount}) {

    return (
        <>
            <ProductPageListingBlock
                productPreviewImageDesktop={Product_Preview_Desktop}
                productPreviewImageTablet={Product_Preview_Tablet}
                productPreviewImageMobile={Product_Preview_Mobile}
                newProduct={true}
                productNameFront="ZX9"
                productNameBack="Speaker"
                productDescription="Upgrade your sound system with the all new 
                ZX9 active speaker. It’s a bookshelf speaker system that offers 
                truly wireless connectivity -- creating new possibilities for more 
                pleasing and practical audio setups."
                productPrice="4,500"
                itemCount={zx9ItemCount}
                updateItemCount={updateZX9ItemCount}
            />
        </>
    );
};

export default ZX9SpeakerProductBlock;