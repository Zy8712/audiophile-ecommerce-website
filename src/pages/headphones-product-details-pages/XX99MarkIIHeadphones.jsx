import XX99MarkIIHeadphonesProduct from "../../components/headphones-product-page/XX99MarkIIHeadphonesProduct";
import JumpToTopButton from "../JumpToTopButton";

function XX99MarkIIHeadphones({xx99m2ItemCount, updateXX99M2ItemCount}) {

    return (
        <>
            <div className="w-full flex justify-center pt-[176px] pb-40">
                <div className="w-[95%] lg:w-[1110px] h-[5300px] sm:h-[3505px] lg:h-[3794px] flex flex-col">
                    <XX99MarkIIHeadphonesProduct xx99m2ItemCount={xx99m2ItemCount} updateXX99M2ItemCount={updateXX99M2ItemCount} />
                    <JumpToTopButton />
                </div>
            </div>
        </>
    );
};

export default XX99MarkIIHeadphones;