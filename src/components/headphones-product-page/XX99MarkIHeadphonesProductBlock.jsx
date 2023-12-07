import ProductPageListingBlock from "../product-details-pages/ProductPageListingBlock";
import Product_Preview_Desktop from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import Product_Preview_Tablet from "../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import Product_Preview_Mobile from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";

function XX99MarkIHeadphonesProductBlock({xx99m1ItemCount, updateXX99M1ItemCount}) {

    return (
        <>
            <ProductPageListingBlock
                productPreviewImageDesktop={Product_Preview_Desktop}
                productPreviewImageTablet={Product_Preview_Tablet}
                productPreviewImageMobile={Product_Preview_Mobile}
                newProduct={false}
                productNameFront="XX99 Mark I"
                productNameBack="Headphones"
                productDescription="As the gold standard for headphones, the classic XX99 Mark I 
                offers detailed and accurate audio reproduction for audiophiles, mixing engineers, 
                and music aficionados alike in studios and on the go."
                productPrice="1,750"
                itemCount={xx99m1ItemCount}
                updateItemCount={updateXX99M1ItemCount}
            />
        </>
    );
};

export default XX99MarkIHeadphonesProductBlock;