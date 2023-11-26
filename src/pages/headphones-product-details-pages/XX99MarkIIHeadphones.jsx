import XX99MarkIIHeadphonesProduct from "../../components/headphones-product-page/XX99MarkIIHeadphonesProduct";
import JumpToTopButton from "../JumpToTopButton";

function XX99MarkIIHeadphones() {

    return (
        <>
            <div className="w-full flex justify-center pt-[176px] pb-40">
                <div className="w-[95%] lg:w-[1110px] h-[5300px] sm:h-[3505px] lg:h-[3794px] flex flex-col">
                    <XX99MarkIIHeadphonesProduct />
                    <JumpToTopButton />
                </div>
            </div>
        </>
    );
};

export default XX99MarkIIHeadphones;