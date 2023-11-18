import ZX9SpeakerProduct from "../../components/speakers-product-page/ZX9SpeakerProduct";
import JumpToTopButton from "../JumpToTopButton";

function ZX9Speaker(){

    return(
        <>
            <div className="w-full flex justify-center pt-[176px] pb-40">
                <div className="w-[1110px] h-[3794px] flex flex-col">
                    <ZX9SpeakerProduct />
                    <JumpToTopButton />
                </div>
            </div>
        </>
    );
};

export default ZX9Speaker;