import ProductPageListingBlock from "../product-details-pages/ProductPageListingBlock";
import Product_Preview_Desktop from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import Product_Preview_Tablet from "../../assets/product-xx59-headphones/tablet/image-product.jpg";
import Product_Preview_Mobile from "../../assets/product-xx59-headphones/mobile/image-product.jpg";

function XX59HeadphonesProductBlock({xx59ItemCount, updateXX59ItemCount}) {

    return (
        <>
            <ProductPageListingBlock
                productPreviewImageDesktop={Product_Preview_Desktop}
                productPreviewImageTablet={Product_Preview_Tablet}
                productPreviewImageMobile={Product_Preview_Mobile}
                newProduct={false}
                productNameFront="XX59"
                productNameBack="Headphones"
                productDescription="Enjoy your audio almost anywhere and customize it to your specific 
                tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a 
                brilliant companion at home or on the move."  
                productPrice="899"       
                itemCount={xx59ItemCount}
                updateItemCount={updateXX59ItemCount}   
            />
        </>
    );
};

export default XX59HeadphonesProductBlock;