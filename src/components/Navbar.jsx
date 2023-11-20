import { Link, useLocation } from 'wouter';

import Audiophile_Logo from "../assets/shared/desktop/logo.svg";
import Cart_Icon from "../assets/shared/desktop/icon-cart.svg";
import Menu_Icon from "../assets/shared/tablet/icon-hamburger.svg";

import "../App.css";

function Navbar({ toggleCart, showCart }) {

    const [location] = useLocation();

    const isActive = (route) => location === route;

    return (
        <>
            <div className="w-full h-24 flex justify-center items-center bg-black fixed z-50 rounded-b-3xl">
                <div className="w-full h-full flex justify-between items-center mx-6 sm:mx-10 md:mx-20 lg:mx-[165px] relative transition-all duration-500 ease-in-out">
                    <div className="inline-block custom-lg:hidden">
                        <button>
                            <img src={Menu_Icon} className="w-6 h-5" />
                        </button>
                    </div>

                    <div>
                        <img src={Audiophile_Logo} className="w-[143px] h-[25px]" />
                    </div>

                    <div className="w-[429px] hidden custom-lg:flex justify-between items-center">
                        <Link to="/">
                            <span className={`text-[13px] uppercase font-bold tracking-[2px] leading-[25px] hover:cursor-pointer 
                                ${isActive('/') ? 'text-theme-dark-orange' : 'text-white hover:text-theme-dark-orange'}`}>
                                Home
                            </span>
                        </Link>
                        <Link to="/headphones">
                            <span className={`text-[13px] uppercase font-bold tracking-[2px] leading-[25px] hover:cursor-pointer 
                                ${isActive('/headphones') ? 'text-theme-dark-orange' : 'text-white hover:text-theme-dark-orange'}`}>
                                Headphones
                            </span>
                        </Link>
                        <Link to="/speakers">
                            <span className={`text-[13px] uppercase font-bold tracking-[2px] leading-[25px] hover:cursor-pointer
                                ${isActive('/speakers') ? 'text-theme-dark-orange' : 'text-white hover:text-theme-dark-orange'}`}>
                                Speakers
                            </span>
                        </Link>
                        <Link to="/earphones">
                            <span className={`text-[13px] uppercase font-bold tracking-[2px] leading-[25px] hover:cursor-pointer 
                                ${isActive('/earphones') ? 'text-theme-dark-orange' : 'text-white hover:text-theme-dark-orange'}`}>
                                Earphones
                            </span>
                        </Link>
                    </div>

                    <div className="relative">
                        <button onClick={toggleCart}>
                            <img src={Cart_Icon} className={`${showCart ? 'custom-dark-orange-filter-selected' : 'custom-dark-orange-filter'}`} />
                        </button>

                        <div className="bg-theme-dark-orange absolute z-[60px] -top-2 -right-3 rounded-full w-4 h-4 text-[8px] text-center flex flex-col justify-center items-center text-white font-bold">
                            <span>0</span>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;