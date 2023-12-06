import { useState } from 'react';
import { Link } from 'wouter';

import EmptyCart from "../assets/cart/shopping-cart-14-svgrepo-com.svg";

function Cart({ toggleCart, showCart, cartItemCount, updateCartItemCount }) {

    return (
        <>
            <div className={`w-[360px] ${cartItemCount == 0 ? 'h-[240px]' : 'min-h-[240px] max-h-[488px]'} bg-white rounded-lg fixed z-50 top-28 right-2 p-6 ${showCart ? 'flex' : 'hidden'}`}>
                
                <div className={`w-full h-full ${cartItemCount == 0 ? 'flex' :'hidden'} justify-center items-center p-1`}>
                    <div className="w-full h-full flex flex-col justify-center items-center text-center">
                        <img src={EmptyCart} className="w-16 mb-3" />
                        <p className="text-xl font-bold mb-2">Your cart is <span className="text-theme-dark-orange">empty</span>!</p>
                        <p className="text-xs">
                            Add items you're interested in with the "Add to cart" button. 
                            Click back here to check your cart, or to proceed to checkout.
                        </p>
                        <p className="text-xs">
                        </p>
                    </div>
                </div>

                <div className={`w-full h-full ${cartItemCount != 0 ? 'flex' : 'hidden'} flex-col justify-between border-black border-2 border-solid`}>
                    <div className="flex justify-between items-center mb-8">
                        <h5 className="text-lg tracking-[1.29px] font-bold text-black uppercase">
                            Cart ({cartItemCount})
                        </h5>
                        <span className="font-medium text-[15px] leading-[25px] opacity-50 text-black underline">
                            Remove all
                        </span>
                    </div>

                    <div className="min-h-[64px] max-h-[240px]">

                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <span className="text-black opacity-50 text-[15px] leading-[25px] uppercase font-medium">
                            Total
                        </span>
                        <span className="text-black text-lg font-bold">
                            $5,396
                        </span>
                    </div>

                    <Link to="/checkout">
                        <button className="w-full h-12 bg-theme-dark-orange rounded-sm text-white uppercase font-bold tracking-[1px] text-[13px] hover:bg-theme-light-orange">
                            Checkout
                        </button>
                    </Link>
                </div>

            </div>

            <div className={`w-screen h-screen fixed z-40 top-0 bg-theme-light-translucent-grey ${showCart ? 'block' : 'hidden'}`}>
            </div>
        </>
    );
};

export default Cart;