import ProductPageListingBlock from "../product-details-pages/ProductPageListingBlock";
import Product_Preview from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

function XX99MarkIIHeadphonesProductBlock() {

    return (
        <>
            <ProductPageListingBlock
                productPreviewImage={Product_Preview}
                newProduct={true}
                productNameFront="XX99 Mark II"
                productNameBack="Headphones"
                productDescription="The new XX99 Mark II headphones is the pinnacle of pristine 
                audio. It redefines your premium headphone experience by reproducing the balanced 
                depth and precision of studio-quality sound."
                productPrice="2,999"
            />
        </>
    );
};

export default XX99MarkIIHeadphonesProductBlock;