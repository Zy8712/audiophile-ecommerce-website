import ZX9SpeakerProduct from "../../components/speakers-product-page/ZX9SpeakerProduct";
import JumpToTopButton from "../JumpToTopButton";

function ZX9Speaker({zx9ItemCount, updateZX9ItemCount}) {

    return (
        <>
            <div className="w-full flex justify-center pt-[176px] pb-40">
                <div className="w-[95%] lg:w-[1110px] h-[5300px] sm:h-[3505px] lg:h-[3794px] flex flex-col">
                    <ZX9SpeakerProduct zx9ItemCount={zx9ItemCount} updateZX9ItemCount={updateZX9ItemCount} />
                    <JumpToTopButton />
                </div>
            </div>
        </>
    );
};

export default ZX9Speaker;