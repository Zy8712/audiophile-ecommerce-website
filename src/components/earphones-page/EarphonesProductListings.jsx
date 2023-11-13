import YX1EARPHONES from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

import NewProductCard from "../NewProductCard";


function EarphonesProductListings() {

    return (
        <>
            <div className="w-full h-[560px] flex justify-between items-center mb-40">
                <NewProductCard
                    previewImage={YX1EARPHONES}
                    nameFront="YX1 Wireless"
                    nameBack="Earphones"
                    description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
                    Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
                    lineBreak={true}
                    link="/earphones/yx1earphones"
                />
            </div>
        </>
    );
};

export default EarphonesProductListings;