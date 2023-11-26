import { useState } from "react";

function ProductPageListingBlock(props) {

    const [productCount, setCount] = useState(1);

    function incrementCounter() {
        if (productCount != 99) {
            setCount(prevState => prevState + 1);
        }
    }

    function decrementCounter() {
        if (productCount != 1) {
            setCount(prevState => prevState - 1);
        }
    }

    return (
        <>
            <div className={`w-[327px] sm:w-[95%] custom-md:w-[85%] lg:w-full ${props.newProduct ? 'h-[755px]' : 'h-[720px]'} sm:h-[480px] lg:h-[560px] flex flex-col sm:flex-row justify-between items-center`}>
                <img src={props.productPreviewImageDesktop} alt="" className="h-full rounded-lg hidden lg:inline-block" />
                <img src={props.productPreviewImageTablet} alt="" className="h-full rounded-lg hidden sm:inline-block lg:hidden" />
                <img src={props.productPreviewImageMobile} alt="" className="w-full rounded-lg inline-block sm:hidden" />
                <div className="w-full sm:w-[339.5px] lg:w-[445.5px] h-[353px] sm:h-[357px] lg:h-[372px] relative">
                    <span className={`absolute -top-[37px] text-sm tracking-[10px] text-theme-dark-orange font-normal uppercase ${props.newProduct ? 'block' : 'hidden'}`}>
                        New Product
                    </span>
                    <h1 className="text-black text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] tracking-[1.43px] font-bold uppercase">
                        {props.productNameFront} <br /> {props.productNameBack}
                    </h1>
                    <p className="w-full my-6 sm:my-8 text-[15px] leading-[25px] font-medium opacity-50">
                        {props.productDescription}
                    </p>
                    <span className="block text-lg tracking-[1.29px] font-bold">
                        $ {props.productPrice}
                    </span>
                    <div className="flex mt-[31px] lg:mt-[49px]">
                        <div className="w-[120px] h-12 bg-theme-light-grey flex mr-[16.5px]">
                            <button onClick={decrementCounter}
                                className="w-12 h-12 flex justify-center items-center hover:text-theme-dark-orange hover:bg-theme-super-light-grey">
                                -
                            </button>
                            <span className="w-6 h-12 flex justify-center items-center">
                                {productCount}
                            </span>
                            <button onClick={incrementCounter}
                                className="w-12 h-12 flex justify-center items-center hover:text-theme-dark-orange hover:bg-theme-super-light-grey">
                                +
                            </button>
                        </div>

                        <button className="w-40 h-12 uppercase bg-theme-dark-orange text-white font-bold tracking-[1px] text-[13px] hover:bg-theme-light-orange">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPageListingBlock;