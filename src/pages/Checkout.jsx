import EmptyCart from "../assets/cart/shopping-cart-14-svgrepo-com.svg";
import PlusCart from "../assets/cart/shopping-cart-16-white-svgrepo-com.svg";

function Checkout(props) {

    return (
        <>
            <div className="w-full h-[1506px] flex justify-center items-start pt-[176px] pb-[141px] bg-theme-light-grey">

                <div className="w-[95%] lg:w-[1110px] h-[1189px] flex flex-col justify-start border-black border-2 border-solid">

                    <div className="block text-[15px] font-medium leading-[25px] opacity-50 mb-14">
                        <span className="text-black hover:text-theme-dark-orange cursor-pointer">
                            Go Back
                        </span>
                    </div>

                    <div className={`w-full lg:[1110px] h-[1126px] ${props.cartItemCount == 0 ? 'flex' : 'hidden'} flex flex-col justify-between items-center`}>

                        <div className="w-full h-[520px] flex flex-col items-center bg-gradient-to-tr from-white to-theme-light-orange rounded-lg p-10">
                            <div className="w-full h-full flex flex-col justify-center items-center text-center bg-white rounded-lg px-36">
                                <img src={EmptyCart} className="h-40" />
                                <h1 className="text-black text-3xl font-semibold mt-5">
                                    Your cart is <span className="text-theme-dark-orange">empty</span>!
                                </h1>
                                <p className="text-lg flex items-center mt-5">
                                    Add items you're interested in with the
                                    <span className="inline mx-2">
                                        <button className={`w-40 h-12 flex justify-center items-center uppercase bg-theme-dark-orange text-white font-bold tracking-[1px] text-[13px] hover:bg-theme-light-orange disabled:cursor-not-allowed disabled:opacity-60`}>
                                            <img src={PlusCart} className="h-8 mr-2" />
                                            Add to Cart
                                        </button>
                                    </span>
                                    button.
                                </p>

                                <p className="text-lg flex mt-5">
                                    Click on the cart icon to check your cart and click on the checkout button when you are ready to finalize your purchase.
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-[520px] flex flex-col items-center bg-gradient-to-tr from-white to-theme-grayish-black rounded-lg p-10">
                            <div className="w-full h-full relative flex bg-gradient-to-tr from-white to-theme-grayish-black rounded-lg overflow-hidden">
                                <div className="w-1/3 h-full relative transform -skew-x-12">
                                    <div className="w-[120%] h-full absolute bg-cover bg-no-repeat bg-center bg-[url('./assets/checkout/image-gallery-1-ai-upscaled400.jpg')] transform skew-x-12">
                                    </div>
                                </div>
                                <div className="w-1/3 h-full relative z-10 overflow-hidden transform -skew-x-12">
                                    <div className="w-[140%] h-full absolute -left-12 bg-cover bg-no-repeat bg-center bg-[url('./assets/checkout/image-gallery-2-ai-upscaled400.jpg')] transform skew-x-12">
                                    </div>
                                </div>
                                <div className="w-1/3 h-full relative transform -skew-x-12">
                                    <div className="w-[140%] h-full absolute -left-12 bg-cover bg-no-repeat bg-center bg-[url('./assets/checkout/image-gallery-3-ai-upscaled400.jpg')] transform skew-x-12">
                                    </div>
                                </div>
                                
                                <div className="w-full h-full flex justify-center items-center text-center absolute z-30 bg-theme-light-translucent-grey px-28"> 
                                    <span className="text-white font-bold text-5xl uppercase opacity-95">Your one stop shop for <span className="text-theme-dark-orange">everything</span> audio</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`w-full h-[1126px] ${props.cartItemCount == 0 ? 'hidden' : 'flex'} justify-between border-blue-500 border-2 border-solid`}>

                        <div className="w-[730px] h-full bg-white rounded-lg px-12 py-[54px]">
                            <div className="w-full h-full flex flex-col justify-between border-black border-2 border-solid">
                                <h1 className="text-black text-[32px] leading-9 tracking-[1.14px] font-bold uppercase">Checkout</h1>

                                <div className="w-full h-[227px] border-black border-2 border-solid">

                                </div>

                                <div className="w-full h-[332px] border-black border-2 border-solid">

                                </div>

                                <div className="w-full h-[274px] border-black border-2 border-solid">

                                </div>
                            </div>
                        </div>

                        <div className="w-[350px] h-[612px] bg-white rounded-lg">


                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Checkout