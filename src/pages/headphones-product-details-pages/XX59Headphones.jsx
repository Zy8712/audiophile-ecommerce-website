import XX59HeadphonesProduct from "../../components/headphones-product-page/XX59HeadphonesProduct";
import JumpToTopButton from "../JumpToTopButton";

function XX59Headphones({xx59ItemCount, updateXX59ItemCount}){

    return(
        <>
            <div className="w-full flex justify-center pt-[176px] pb-40">
                <div className="w-[95%] lg:w-[1110px] h-[5300px] sm:h-[3505px] lg:h-[3794px] flex flex-col">
                    <XX59HeadphonesProduct xx59ItemCount={xx59ItemCount} updateXX59ItemCount={updateXX59ItemCount} />
                    <JumpToTopButton />
                </div>
            </div>
        </>
    );
};

export default XX59Headphones;