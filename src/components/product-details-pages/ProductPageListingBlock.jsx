import { useState } from "react";
import PlusCart from "../../assets/cart/shopping-cart-16-white-svgrepo-com.svg";
import MinusCart from "../../assets/cart/shopping-cart-17-white-svgrepo-com.svg";
import CheckCart from "../../assets/cart/shopping-cart-21-white-svgrepo-com.svg";

import EmptyCart from "../../assets/cart/shopping-cart-11-svgrepo-com.svg";

function ProductPageListingBlock(props) {

    const [productCount, setCount] = useState(1);

    function incrementCounter() {
        if (productCount != 99) {
            setCount(prevState => prevState + 1);
        }
    }

    function decrementCounter() {
        if (productCount != 0) {
            setCount(prevState => prevState - 1);
        }
    }

    const adjustCartCount = () => {
        props.updateItemCount(productCount);
    }

    return (
        <>
            <div className={`w-[327px] sm:w-[690px] custom-md:w-[85%] lg:w-full ${props.newProduct ? 'h-[755px]' : 'h-[720px]'} sm:h-[480px] lg:h-[560px] flex flex-col sm:flex-row justify-between items-center transition-all duration-500 ease-in-out`}>

                <img src={props.productPreviewImageDesktop} alt="" className="h-full rounded-lg hidden lg:inline-block" />
                <img src={props.productPreviewImageTablet} alt="" className="h-full rounded-lg hidden sm:inline-block lg:hidden" />
                <img src={props.productPreviewImageMobile} alt="" className="w-full rounded-lg inline-block sm:hidden" />

                <div className="w-full sm:w-[339.5px] lg:w-[445.5px] h-[353px] sm:h-[357px] lg:h-[372px] relative transition-all duration-500 ease-in-out">
                    <span className={`absolute -top-[37px] text-sm tracking-[10px] text-theme-dark-orange font-normal uppercase ${props.newProduct ? 'block' : 'hidden'}`}>
                        New Product
                    </span>

                    <h1 className="text-black text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] tracking-[1.43px] font-bold uppercase transition-all duration-500 ease-in-out">
                        {props.productNameFront} <br /> {props.productNameBack}
                    </h1>

                    <p className="w-full my-6 sm:my-8 text-[15px] leading-[25px] font-medium opacity-50 transition-all duration-500 ease-in-out">
                        {props.productDescription}
                    </p>

                    <span className="block text-lg tracking-[1.29px] font-bold">
                        $ {props.productPrice}
                    </span>

                    <div className="flex items-center mt-[31px] lg:mt-[49px] transition-all duration-500 ease-in-out">
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

                        <button className={`w-40 h-12 flex justify-center items-center uppercase bg-theme-dark-orange text-white font-bold tracking-[1px] text-[13px] hover:bg-theme-light-orange disabled:cursor-not-allowed disabled:opacity-60`}
                            onClick={adjustCartCount}
                            disabled={productCount == props.itemCount}
                            title={productCount == props.itemCount ? 'You already have this many in your cart' : 'Add/Remove from Cart'} >
                            {props.itemCount < productCount ? (
                                <img src={PlusCart} className="h-8 mr-2" />
                            ) : props.itemCount === productCount ? (
                                <img src={CheckCart} className="h-8 mr-2" />
                            ) : (
                                <img src={MinusCart} className="h-8 mr-2" />
                            )}
                            {props.itemCount == 0 ? 'Add to Cart' : 'Update Cart'}
                        </button>

                        <div className="w-12 h-12 relative flex justify-center items-center ml-3"
                            title={`You currently have ${props.itemCount} of this item in your cart`}>
                            <img src={EmptyCart} className="h-12" />
                            <span className="w-6 h-6 flex justify-center items-center text-center font-bold text-theme-dark-orange absolute z-10 top-[6px] left-[17px]">
                                {props.itemCount}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPageListingBlock;