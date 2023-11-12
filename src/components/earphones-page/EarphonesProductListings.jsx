import YX1EARPHONES from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import OrangeProductButton from "../OrangeProductButton";

function EarphonesProductListings() {

    return (
        <>
            <div className="w-full h-[560px] flex justify-between items-center mb-40">
                <img src={YX1EARPHONES} className="h-full" />
                <div className="w-[445px] h-[343px] flex flex-col">
                    <span className="text-theme-dark-orange text-sm tracking-[10px] uppercase mb-4">New Product</span>
                    <h2 className="text-black text-[40px] leading-[44px] tracking-[1.43px] font-bold uppercase">YX1 Wireless Earphones</h2>
                    <p className="text-black text-[15px] leading-[25px] font-medium opacity-50 mt-8 mb-10">
                        Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
                        Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                    </p>
                    <OrangeProductButton />
                </div>
            </div>
        </>
    );
};

export default EarphonesProductListings;