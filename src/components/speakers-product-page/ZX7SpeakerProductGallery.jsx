import LargeImage from "../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";
import SmallImage1 from "../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import SmallImage2 from "../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";

import ProductPageGallery from "../product-details-pages/ProductPageGallery";

function ZX7SpeakerProductGallery() {

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

export default ZX7SpeakerProductGallery;