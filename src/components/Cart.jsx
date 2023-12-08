import React, { useState } from 'react';
import { Link } from 'wouter';

import EmptyCart from "../assets/cart/shopping-cart-14-svgrepo-com.svg";

import XX99M2CartProductCard from './cart-items/XX99M2CartProductCard';
import XX99M1CartProductCard from './cart-items/XX99M1CartProductCard';
import XX59CartProductCard from './cart-items/XX59CartProductCard';
import ZX9CartProductCard from './cart-items/ZX9CartProductCard';
import ZX7CartProductCard from './cart-items/ZX7CartProductCard';
import YX1CartProductCard from './cart-items/YX1CartProductCard';

import '../App.css';

function Cart(props) {

    // Function to format number with a comma for thousands separator
    const formatNumberWithComma = (number) => {
        return number.toLocaleString(); // This will use the default locale settings
    };

    return (
        <>
            <div className={`w-[360px] ${props.cartItemCount == 0 ? 'h-[240px]' : 'min-h-[240px] max-h-[488px]'} bg-white rounded-lg fixed z-50 top-28 right-2 p-6 ${props.showCart ? 'flex' : 'hidden'}`}>

                <div className={`w-full h-full ${props.cartItemCount == 0 ? 'flex' : 'hidden'} justify-center items-center p-1`}>
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

                <div className={`w-full h-full ${props.cartItemCount != 0 ? 'flex' : 'hidden'} flex-col justify-between`}>
                    <div className="flex justify-between items-center mb-6">
                        <h5 className="text-lg tracking-[1.29px] font-bold text-black uppercase">
                            Cart ({props.cartItemCount})
                        </h5>
                        <span className="font-medium text-[15px] leading-[25px] opacity-50 text-black underline">
                            Remove all
                        </span>
                    </div>

                    <div className="min-h-[64px] example max-h-[240px] overflow-y-auto">
                        {props.xx99m2ItemCount != 0 ?
                            <XX99M2CartProductCard
                                xx99m2ItemCount={props.xx99m2ItemCount}
                                updateXX99M2ItemCount={props.updateXX99M2ItemCount}
                            /> : null
                        }

                        {props.xx99m1ItemCount != 0 ?
                            <XX99M1CartProductCard
                                xx99m1ItemCount={props.xx99m1ItemCount}
                                updateXX99M1ItemCount={props.updateXX99M1ItemCount}
                            /> : null
                        }

                        {props.xx59ItemCount != 0 ?
                            <XX59CartProductCard
                                xx59ItemCount={props.xx59ItemCount}
                                updateXX59ItemCount={props.updateXX59ItemCount}
                            /> : null
                        }

                        {props.zx9ItemCount != 0 ?
                            <ZX9CartProductCard
                                zx9ItemCount={props.zx9ItemCount}
                                updateZX9ItemCount={props.updateZX9ItemCount}
                            /> : null
                        }

                        {props.zx7ItemCount != 0 ?
                            <ZX7CartProductCard
                                zx7ItemCount={props.zx7ItemCount}
                                updateZX7ItemCount={props.updateZX7ItemCount}
                            /> : null
                        }

                        {props.yx1ItemCount != 0 ?
                            <YX1CartProductCard
                                yx1ItemCount={props.yx1ItemCount}
                                updateYX1ItemCount={props.updateYX1ItemCount}
                            /> : null
                        }
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <span className="text-black opacity-50 text-[15px] leading-[25px] uppercase font-medium">
                            Total
                        </span>
                        <span className="text-black text-lg font-bold">
                            $ {formatNumberWithComma(props.totalBill)}
                        </span>
                    </div>

                    <Link to="/checkout">
                        <button className="w-full h-12 bg-theme-dark-orange rounded-sm text-white uppercase font-bold tracking-[1px] text-[13px] hover:bg-theme-light-orange">
                            Checkout
                        </button>
                    </Link>

                </div>

            </div>

            <div className={`w-screen h-screen fixed z-40 top-0 bg-theme-light-translucent-grey ${props.showCart ? 'block' : 'hidden'}`}>
            </div>
        </>
    );
};

export default Cart;