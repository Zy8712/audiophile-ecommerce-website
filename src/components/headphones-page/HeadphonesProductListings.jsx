import XX99MARKII from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX99MARKI from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59 from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

import NewProductCard from "../NewProductCard";
import ProductCardImageLeft from "../ProductCardImageLeft";
import ProductCardImageRight from "../ProductCardImageRight";


function HeadphonesProductListings() {

    return (
        <>
            <div className="w-full h-[2000px] flex flex-col justify-between mb-40">

                <NewProductCard
                    previewImage={XX99MARKII}
                    nameFront="XX99 Mark II"
                    nameBack="Headphones"
                    description="The new XX99 Mark II headphones is the pinnacle of pristine audio. 
                    It redefines your premium headphone experience by reproducing the balanced depth 
                    and precision of studio-quality sound."
                    lineBreak={true}
                    link="./headphones/xx99markiiheadphones"
                />

                <ProductCardImageRight
                    previewImage={XX99MARKI}
                    nameFront="XX99 Mark I"
                    nameBack="Headphones"
                    description="As the gold standard for headphones, the classic XX99 Mark I offers 
                    detailed and accurate audio reproduction for audiophiles, mixing engineers, and music 
                    aficionados alike in studios and on the go."
                    lineBreak={true}
                    link="./headphones/xx99markiheadphones"
                />

                <ProductCardImageLeft
                    previewImage={XX59}
                    nameFront="XX59"
                    nameBack="Headphones"
                    description="Enjoy your audio almost anywhere and customize it to your specific tastes with 
                    the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion 
                    at home or on the move."
                    lineBreak={true}
                    link="./headphones/xx59headphones"
                />
            </div>
        </>
    );
};

export default HeadphonesProductListings;