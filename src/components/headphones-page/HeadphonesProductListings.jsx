import XX99MARKII from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX99MARKI from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59 from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import OrangeProductButton from "../OrangeProductButton";

function HeadphonesProductListings() {

    return (
        <>
            <div className="w-full h-[2000px] flex flex-col justify-between mb-40">

                <div className="w-full h-[560px] flex justify-between items-center">
                    <img src={XX99MARKII} className="h-full" />
                    <div className="w-[445px] h-[343px] flex flex-col">
                        <span className="text-theme-dark-orange text-sm tracking-[10px] uppercase mb-4">New Product</span>
                        <h2 className="text-black text-[40px] leading-[44px] tracking-[1.43px] font-bold uppercase">XX99 Mark II Headphones</h2>
                        <p className="text-black text-[15px] leading-[25px] font-medium opacity-50 mt-8 mb-10">
                            The new XX99 Mark II headphones is the pinnacle of pristine audio.
                            It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                        </p>
                        <OrangeProductButton />
                    </div>
                </div>

                <div className="w-full h-[560px] flex justify-between items-center">
                    <div className="w-[445px] h-[308px] flex flex-col">
                        <h2 className="text-black text-[40px] leading-[44px] tracking-[1.43px] font-bold uppercase">XX99 Mark I Headphones</h2>
                        <p className="text-black text-[15px] leading-[25px] font-medium opacity-50 mt-8 mb-10">
                            As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles,
                            mixing engineers, and music aficionados alike in studios and on the go.
                        </p>
                        <OrangeProductButton />
                    </div>
                    <img src={XX99MARKI} className="h-full" />
                </div>

                <div className="w-full h-[560px] flex justify-between items-center">
                    <img src={XX59} className="h-full" />
                    <div className="w-[445px] h-[308px] flex flex-col">
                        <h2 className="text-black text-[40px] leading-[44px] tracking-[1.43px] font-bold uppercase">XX59<br /> Headphones</h2>
                        <p className="text-black text-[15px] leading-[25px] font-medium opacity-50 mt-8 mb-10">
                            Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
                            The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                        </p>
                        <OrangeProductButton />
                    </div>
                </div>

            </div>
        </>
    );
};

export default HeadphonesProductListings;