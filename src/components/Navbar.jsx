import React, { useState } from 'react';
import { Link, Route, useLocation } from 'wouter';

import Audiophile_Logo from "../assets/shared/desktop/logo.svg";
import Cart_Icon from "../assets/shared/desktop/icon-cart.svg";

function Navbar() {
    const [location] = useLocation();

    return (
        <>
            <div className="w-full h-24 flex justify-center items-center bg-black fixed z-30 rounded-b-2xl">
                <div className="w-full h-full flex justify-between items-center mx-[165px] relative">
                    <div>
                        <img src={Audiophile_Logo} className="w-[143px] h-[25px]" />
                    </div>

                    <div className="w-[429px] flex justify-between items-center">
                        <Link to="/">
                            <span className="text-white text-[13px] uppercase font-bold tracking-[2px] leading-[25px] hover:text-theme-dark-orange hover:cursor-pointer">
                                Home
                            </span>
                        </Link>
                        <Link to="/headphones">
                            <span className="text-white text-[13px] uppercase font-bold tracking-[2px] leading-[25px] hover:text-theme-dark-orange hover:cursor-pointer">
                                Headphones
                            </span>
                        </Link>
                        <Link to="/speakers">
                            <span className="text-white text-[13px] uppercase font-bold tracking-[2px] leading-[25px] hover:text-theme-dark-orange hover:cursor-pointer">
                                Speakers
                            </span>
                        </Link>
                        <Link to="/earphones">
                            <span className="text-white text-[13px] uppercase font-bold tracking-[2px] leading-[25px] hover:text-theme-dark-orange hover:cursor-pointer">
                                Earphones
                            </span>
                        </Link>
                    </div>

                    <div>
                        <button>
                            <img src={Cart_Icon} />
                        </button>
                    </div>

                    <div className="w-full h-[1px] absolute bottom-0 bg-white opacity-20">

                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;