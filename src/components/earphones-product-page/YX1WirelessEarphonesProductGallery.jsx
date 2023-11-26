import LargeImage from "../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import SmallImage1 from "../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import SmallImage2 from "../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";

import LargeImage_Tablet from "../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg";
import SmallImage1_Tablet from "../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg";
import SmallImage2_Tablet from "../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg";

import LargeImage_Mobile from "../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg";
import SmallImage1_Mobile from "../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg";
import SmallImage2_Mobile from "../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg";

import ProductPageGallery from "../product-details-pages/ProductPageGallery";

function YX1WirelessEarphonesProductGallery() {

    return (
        <>
            <ProductPageGallery 
                image1={SmallImage1}
                image2={SmallImage2}
                image3={LargeImage}
                
                image1_Tablet={SmallImage1_Tablet}
                image2_Tablet={SmallImage2_Tablet}
                image3_Tablet={LargeImage_Tablet}

                image1_Mobile={SmallImage1_Mobile}
                image2_Mobile={SmallImage2_Mobile}
                image3_Mobile={LargeImage_Mobile}
            />
        </>
    );
};

export default YX1WirelessEarphonesProductGallery;