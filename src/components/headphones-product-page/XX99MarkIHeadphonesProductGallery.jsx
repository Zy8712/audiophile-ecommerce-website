import LargeImage from "../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import SmallImage1 from "../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import SmallImage2 from "../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";

import ProductPageGallery from "../product-details-pages/ProductPageGallery";

function XX99MarkIHeadphonesProductGallery() {

    return (
        <>
            <ProductPageGallery 
                image1={SmallImage1}
                image2={SmallImage2}
                image3={LargeImage}
            />
        </>
    );
};

export default XX99MarkIHeadphonesProductGallery;