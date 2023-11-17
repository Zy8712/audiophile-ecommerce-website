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
            <div className="max-w-full h-[560px] flex justify-between items-center">
                <img src={props.productPreviewImage} alt="" className="h-full" />
                <div className="w-[445.5px] h-[372px] relative">
                    <span className={`absolute -top-[37px] text-sm tracking-[10px] text-theme-dark-orange font-normal uppercase ${props.newProduct ? 'block' : 'hidden'}`}>
                        New Product
                    </span>
                    <h1 className="text-black text-[40px] leading-[44px] tracking-[1.43px] font-bold uppercase">
                        {props.productNameFront} <br /> {props.productNameBack}
                    </h1>
                    <p className="w-full my-8 text-[15px] leading-[25px] font-medium opacity-50">
                        {props.productDescription}
                    </p>
                    <span className="block text-lg tracking-[1.29px] font-bold">
                        $ {props.productPrice}
                    </span>
                    <div className="flex mt-[49px]">
                        <div className="w-[120px] h-12 bg-theme-light-grey flex mr-[16.5px]">
                            <button onClick={decrementCounter}
                                className="w-12 h-12 flex justify-center items-center hover:text-theme-dark-orange">
                                -
                            </button>
                            <span className="w-6 h-12 flex justify-center items-center">
                                {productCount}
                            </span>
                            <button onClick={incrementCounter}
                                className="w-12 h-12 flex justify-center items-center hover:text-theme-dark-orange">
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