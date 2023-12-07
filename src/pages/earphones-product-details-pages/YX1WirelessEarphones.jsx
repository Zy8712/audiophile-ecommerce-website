import YX1WirelessEarphonesProduct from "../../components/earphones-product-page/YX1WirelessEarphonesProduct";
import JumpToTopButton from "../JumpToTopButton";

function YX1WirelessEarphones({ yx1ItemCount, updateYX1ItemCount }) {

    return (
        <>
            <div className="w-full flex justify-center pt-[176px] pb-40">
                <div className="w-[95%] lg:w-[1110px] h-[5300px] sm:h-[3505px] lg:h-[3794px] flex flex-col">
                    <YX1WirelessEarphonesProduct yx1ItemCount={yx1ItemCount} updateYX1ItemCount={updateYX1ItemCount} />
                    <JumpToTopButton />
                </div>
            </div>
        </>
    );
};

export default YX1WirelessEarphones;