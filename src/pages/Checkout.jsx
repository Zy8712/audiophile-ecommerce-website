import EmptyCart from "../assets/cart/shopping-cart-14-svgrepo-com.svg";
import PlusCart from "../assets/cart/shopping-cart-16-white-svgrepo-com.svg";

import "../App.css";
import XX99M2CheckoutProductCard from "../components/checkout-items/XX99M2CheckoutProductCard";
import XX99M1CheckoutProductCard from "../components/checkout-items/XX99M1CheckoutProductCard";
import XX59CheckoutProductCard from "../components/checkout-items/XX59CheckoutProductCard";
import ZX9CheckoutProductCard from "../components/checkout-items/ZX9CheckoutProductCard";
import ZX7CheckoutProductCard from "../components/checkout-items/ZX7CheckoutProductCard";
import YX1CheckoutProductCard from "../components/checkout-items/YX1CheckoutProductCard";

function Checkout(props) {

    return (
        <>
            <div className="w-full h-[1506px] flex justify-center items-start pt-[176px] pb-[141px] bg-theme-light-grey">

                <div className="w-[95%] lg:w-[1110px] h-[1189px] flex flex-col justify-start">

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
                            <div className="w-full h-full relative flex bg-gradient-to-tr from-white to-theme-grayish-black rounded-lg overflow-hidden group">
                                <div className="w-1/3 h-full relative transform -skew-x-12 hover:cursor-pointer">
                                    <div className="w-[120%] h-full absolute bg-cover bg-no-repeat bg-center bg-[url('./assets/checkout/image-gallery-1-ai-upscaled400.jpg')] transform skew-x-12">
                                    </div>
                                    <div className="w-[120%] h-full absolute z-30 bg-cover bg-no-repeat bg-center bg-theme-light-translucent-grey transform skew-x-12 hover:bg-transparent">
                                    </div>
                                </div>

                                <div className="w-1/3 h-full relative z-10 overflow-hidden transform -skew-x-12 hover:cursor-pointer">
                                    <div className="w-[140%] h-full absolute -left-12 bg-cover bg-no-repeat bg-center bg-[url('./assets/checkout/image-gallery-2-ai-upscaled400.jpg')] transform skew-x-12">
                                    </div>
                                    <div className="w-[140%] h-full absolute z-30 -left-12 bg-cover bg-no-repeat bg-center bg-theme-light-translucent-grey transform skew-x-12 hover:bg-transparent">
                                    </div>
                                </div>

                                <div className="w-1/3 h-full relative transform -skew-x-12 hover:cursor-pointer">
                                    <div className="w-[140%] h-full absolute -left-12 bg-cover bg-no-repeat bg-center bg-[url('./assets/checkout/image-gallery-3-ai-upscaled400.jpg')] transform skew-x-12">
                                    </div>
                                    <div className="w-[140%] h-full absolute z-30 -left-12 bg-cover bg-no-repeat bg-center bg-theme-light-translucent-grey transform skew-x-12 hover:bg-transparent">
                                    </div>
                                </div>

                                <span className="inline-block absolute z-40 text-center top-[50%] translate-y-[-50%] text-white font-bold text-5xl uppercase opacity-95 mx-28 group-hover:hidden">Your one stop shop for <span className="text-theme-dark-orange">everything</span> audio</span>
                            </div>
                        </div>

                    </div>

                    <div className={`w-full h-[1126px] ${props.cartItemCount == 0 ? 'hidden' : 'flex'} justify-between`}>

                        <div className="w-[730px] h-full bg-white rounded-lg px-12 py-[54px]">
                            <div className="w-full h-full flex flex-col justify-between">
                                <h1 className="text-black text-[32px] leading-9 tracking-[1.14px] font-bold uppercase">Checkout</h1>

                                <div className="w-full h-[227px] flex flex-col">
                                    <h3 className="text-theme-dark-orange text-[13px] leading-[25px] font-bold tracking-[0.93px] uppercase mb-4">
                                        Billing Details
                                    </h3>

                                    <div className="w-full h-[81px] flex justify-between">
                                        <div className="w-[309px] h-full flex flex-col justify-between">
                                            <p className="text-black text-xs font-bold">Name</p>
                                            <input type="text" className="w-full h-14 rounded-md border-[1px] border-solid border-theme-checkout-grey px-6 text-sm -tracking-[0.25px]" />
                                        </div>
                                        <div className="w-[309px] h-full flex flex-col justify-between">
                                            <p className="text-black text-xs font-bold">Email Address</p>
                                            <input type="email" className="w-full h-14 rounded-md border-[1px] border-solid border-theme-checkout-grey px-6 text-sm -tracking-[0.25px]" />
                                        </div>
                                    </div>

                                    <div className="w-full h-[81px] flex mt-6">
                                        <div className="w-[309px] h-full flex flex-col justify-between">
                                            <p className="text-black text-xs font-bold">Phone Number</p>
                                            <input type="text" className="w-full h-14 rounded-md border-[1px] border-solid border-theme-checkout-grey px-6 text-sm -tracking-[0.25px]" />
                                        </div>
                                    </div>

                                </div>

                                <div className="w-full h-[332px] flex flex-col">
                                    <h3 className="text-theme-dark-orange text-[13px] leading-[25px] font-bold tracking-[0.93px] uppercase mb-4">
                                        Shipping Info
                                    </h3>

                                    <div className="w-full h-[291px] flex flex-col justify-between">

                                        <div className="w-full h-[81px] flex flex-col justify-between">
                                            <p className="text-black text-xs font-bold">Address</p>
                                            <input type="text" className="w-full h-14 rounded-md border-[1px] border-solid border-theme-checkout-grey px-6 text-sm -tracking-[0.25px]" />
                                        </div>

                                        <div className="w-full h-[81px] flex justify-between">
                                            <div className="w-[309px] h-full flex flex-col justify-between">
                                                <p className="text-black text-xs font-bold">ZIP Code</p>
                                                <input type="text" className="w-full h-14 rounded-md border-[1px] border-solid border-theme-checkout-grey px-6 text-sm -tracking-[0.25px]" />
                                            </div>

                                            <div className="w-[309px] h-full flex flex-col justify-between">
                                                <p className="text-black text-xs font-bold">City</p>
                                                <input type="text" className="w-full h-14 rounded-md border-[1px] border-solid border-theme-checkout-grey px-6 text-sm -tracking-[0.25px]" />
                                            </div>
                                        </div>

                                        <div className="w-[309px] h-[81px] flex flex-col justify-between">
                                            <p className="text-black text-xs font-bold">Country</p>
                                            <input type="text" className="w-full h-14 rounded-md border-[1px] border-solid border-theme-checkout-grey px-6 text-sm -tracking-[0.25px]" />
                                        </div>

                                    </div>

                                </div>

                                <div className="w-full h-[274px] flex flex-col">
                                    <h3 className="text-theme-dark-orange text-[13px] font-bold tracking-[0.93px] uppercase mb-4">
                                        Payment Details
                                    </h3>

                                    <div className="w-full h-[233px] flex flex-col justify-between">

                                        <div className="w-full h-32 flex justify-between">
                                            <p className="text-black text-xs font-bold">Payment Method</p>
                                            <div className="w-[309px] h-full flex flex-col justify-between">

                                                <div className="w-full h-14 flex items-center border-[1px] border-solid border-theme-checkout-grey rounded-md">
                                                    <label className="flex items-center font-bold text-sm">
                                                        <input type="radio" name="payment_method" value="e-money" checked className="w-5 h-5 mx-4 checked:" />
                                                        e-Money
                                                    </label>
                                                </div>

                                                <div className="w-full h-14 flex items-center border-[1px] border-solid border-theme-checkout-grey rounded-md">
                                                    <label className="flex items-center font-bold text-sm">
                                                        <input type="radio" name="payment_method" value="cnd" checked className="w-5 h-5 mx-4 checked:" />
                                                        Cash on Delivery
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full h-[81px] flex justify-between">
                                            <div className="w-[309px] h-full flex flex-col justify-between">
                                                <p className="text-black text-xs font-bold">e-Money Number</p>
                                                <input type="text" className="w-full h-14 rounded-md border-[1px] border-solid border-theme-checkout-grey px-6 text-sm -tracking-[0.25px]" />
                                            </div>

                                            <div className="w-[309px] h-full flex flex-col justify-between">
                                                <p className="text-black text-xs font-bold">e-Money PIN</p>
                                                <input type="text" className="w-full h-14 rounded-md border-[1px] border-solid border-theme-checkout-grey px-6 text-sm -tracking-[0.25px]" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="w-[350px] min-h-[500px] max-h-[612px] flex flex-col bg-white rounded-lg px-[33px]">
                            <div className="w-full flex flex-col mt-8">
                                <h2 className="text-black text-lg font-bold tracking-[1.29px] uppercase mb-8">
                                    Summary
                                </h2>

                                <div className="w-full min-h-24 max-h-60 mb-8 overflow-x-hidden overflow-y-auto example">
                                    {props.xx99m2ItemCount != 0 ?
                                        <XX99M2CheckoutProductCard
                                            xx99m2ItemCount={props.xx99m2ItemCount}
                                        /> : null
                                    }
                                    {props.xx99m1ItemCount != 0 ?
                                        <XX99M1CheckoutProductCard
                                            xx99m1ItemCount={props.xx99m1ItemCount}
                                        /> : null
                                    }

                                    {props.xx59ItemCount != 0 ?
                                        <XX59CheckoutProductCard
                                            xx59ItemCount={props.xx59ItemCount}
                                        /> : null
                                    }

                                    {props.zx9ItemCount != 0 ?
                                        <ZX9CheckoutProductCard
                                            zx9ItemCount={props.zx9ItemCount}
                                        /> : null
                                    }

                                    {props.zx7ItemCount != 0 ?
                                        <ZX7CheckoutProductCard
                                            zx7ItemCount={props.zx7ItemCount}
                                        /> : null
                                    }

                                    {props.yx1ItemCount != 0 ?
                                        <YX1CheckoutProductCard
                                        yx1ItemCount={props.yx1ItemCount}
                                        /> : null
                                    }
                                </div>

                                <div className="w-full h-[91px] flex flex-col justify-between mb-6">
                                    <div className="w-full flex justify-between">
                                        <span className="text-black text-[15px] leading-[25px] font-medium opacity-50 uppercase">
                                            Total
                                        </span>
                                        <span className="text-black text-lg leading-[25px] font-bold">
                                            $5,396
                                        </span>
                                    </div>

                                    <div className="w-full flex justify-between">
                                        <span className="text-black text-[15px] leading-[25px] font-medium opacity-50 uppercase">
                                            Shipping
                                        </span>
                                        <span className="text-black text-lg leading-[25px] font-bold">
                                            $50
                                        </span>
                                    </div>

                                    <div className="w-full flex justify-between">
                                        <span className="text-black text-[15px] leading-[25px] font-medium opacity-50 uppercase">
                                            VAT (Included)
                                        </span>
                                        <span className="text-black text-lg leading-[25px] font-bold">
                                            $1,079
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full flex justify-between mb-8">
                                    <span className="text-black text-[15px] leading-[25px] font-medium opacity-50 uppercase">
                                        Grand Total
                                    </span>
                                    <span className="text-theme-dark-orange text-lg leading-[25px] font-bold">
                                        $5,446
                                    </span>
                                </div>

                                <button className="w-full h-12 bg-theme-dark-orange text-white text-[13px] tracking-[1px] font-bold uppercase">
                                    Continue & Pay
                                </button>

                            </div>

                        </div>

                    </div>
                </div>
            </div >
        </>
    );
};

export default Checkout;