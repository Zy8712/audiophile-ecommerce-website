import ProductPageListingBlock from "../product-details-pages/ProductPageListingBlock";
import Product_Preview from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";

function XX99MarkIHeadphonesProductBlock() {

    return (
        <>
            <ProductPageListingBlock
                productPreviewImage={Product_Preview}
                newProduct={false}
                productNameFront="XX99 Mark I"
                productNameBack="Headphones"
                productDescription="As the gold standard for headphones, the classic XX99 Mark I 
                offers detailed and accurate audio reproduction for audiophiles, mixing engineers, 
                and music aficionados alike in studios and on the go."
                productPrice="1,750"
            />
        </>
    );
};

export default XX99MarkIHeadphonesProductBlock;