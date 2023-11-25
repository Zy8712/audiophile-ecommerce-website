import XX99MARKII from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX99MARKI from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59 from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

import XX99MARKII_Tablet from "../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import XX99MARKI_Tablet from "../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import XX59_Tablet from "../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";

import XX99MARKII_Mobile from "../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import XX99MARKI_Mobile from "../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import XX59_Mobile from "../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";

import ProductCardImageLeft from "../product-category-pages/ProductCardImageLeft";
import ProductCardImageRight from "../product-category-pages/ProductCardImageRight";


function HeadphonesProductListings() {

    return (
        <>
            <div className="w-full h-[2326px] sm:h-[2288px] lg:h-[2000px] flex flex-col justify-between">

                <ProductCardImageLeft
                    previewImageDesktop={XX99MARKII}
                    previewImageTablet={XX99MARKII_Tablet}
                    previewImageMobile={XX99MARKII_Mobile}
                    nameFront="XX99 Mark II"
                    nameBack="Headphones"
                    description="The new XX99 Mark II headphones is the pinnacle of pristine audio. 
                    It redefines your premium headphone experience by reproducing the balanced depth 
                    and precision of studio-quality sound."
                    lineBreak={true}
                    link="/headphones/xx99markiiheadphones"
                    newProduct={true}
                />

                <ProductCardImageRight
                    previewImageDesktop={XX99MARKI}
                    previewImageTablet={XX99MARKI_Tablet}
                    previewImageMobile={XX99MARKI_Mobile}
                    nameFront="XX99 Mark I"
                    nameBack="Headphones"
                    description="As the gold standard for headphones, the classic XX99 Mark I offers 
                    detailed and accurate audio reproduction for audiophiles, mixing engineers, and music 
                    aficionados alike in studios and on the go."
                    lineBreak={true}
                    link="/headphones/xx99markiheadphones"
                    newProduct={false}
                />

                <ProductCardImageLeft
                    previewImageDesktop={XX59}
                    previewImageTablet={XX59_Tablet}
                    previewImageMobile={XX59_Mobile}
                    nameFront="XX59"
                    nameBack="Headphones"
                    description="Enjoy your audio almost anywhere and customize it to your specific tastes with 
                    the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion 
                    at home or on the move."
                    lineBreak={true}
                    link="/headphones/xx59headphones"
                    newProduct={false}
                />
            </div>
        </>
    );
};

export default HeadphonesProductListings;