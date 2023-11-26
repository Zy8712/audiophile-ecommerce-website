import ZX7SpeakerProduct from "../../components/speakers-product-page/ZX7SpeakerProduct";
import JumpToTopButton from "../JumpToTopButton";

function ZX7Speaker() {

    return (
        <>
            <div className="w-full flex justify-center pt-[176px] pb-40">
                <div className="w-[95%] lg:w-[1110px] h-[5300px] sm:h-[3505px] lg:h-[3794px] flex flex-col">
                    <ZX7SpeakerProduct />
                    <JumpToTopButton />
                </div>
            </div>
        </>
    );
};

export default ZX7Speaker;