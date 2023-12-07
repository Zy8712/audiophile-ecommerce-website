import ProductPageListingBlock from "../product-details-pages/ProductPageListingBlock";
import Product_Preview_Desktop from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import Product_Preview_Tablet from "../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import Product_Preview_Mobile from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";

function XX99MarkIIHeadphonesProductBlock({xx99m2ItemCount, updateXX99M2ItemCount}) {

    return (
        <>
            <ProductPageListingBlock
                productPreviewImageDesktop={Product_Preview_Desktop}
                productPreviewImageTablet={Product_Preview_Tablet}
                productPreviewImageMobile={Product_Preview_Mobile}
                newProduct={true}
                productNameFront="XX99 Mark II"
                productNameBack="Headphones"
                productDescription="The new XX99 Mark II headphones is the pinnacle of pristine 
                audio. It redefines your premium headphone experience by reproducing the balanced 
                depth and precision of studio-quality sound."
                productPrice="2,999"
                itemCount={xx99m2ItemCount}
                updateItemCount={updateXX99M2ItemCount}
            />
        </>
    );
};

export default XX99MarkIIHeadphonesProductBlock;