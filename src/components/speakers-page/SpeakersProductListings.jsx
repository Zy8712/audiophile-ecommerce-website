import ZX9SPEAKER from "../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ZX7SPEAKER from "../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";

import NewProductCard from "../NewProductCard";
import ProductCardImageRight from "../ProductCardImageRight";


function SpeakersProductListings() {

    return (
        <>
            <div className="w-full h-[1280px] flex flex-col justify-between mb-40">

                <NewProductCard
                    previewImage={ZX9SPEAKER}
                    nameFront="ZX9"
                    nameBack="Speaker"
                    description="Upgrade your sound system with the all new ZX9 active speaker. 
                    It’s a bookshelf speaker system that offers truly wireless connectivity -- 
                    creating new possibilities for more pleasing and practical audio setups."
                    lineBreak={true}
                    link="/zx9speaker"
                />

                <ProductCardImageRight
                    previewImage={ZX7SPEAKER}
                    nameFront="ZX7"
                    nameBack="Speaker"
                    description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf 
                    speaker uses high-end audiophile components that represents the top of the line powered 
                    speakers for home or studio use."
                    lineBreak={true}
                    link="/zx7speaker"
                />
                
            </div>
        </>
    );
};

export default SpeakersProductListings;