import { Link, useLocation } from 'wouter';

import Audiophile_Logo from "../assets/shared/desktop/logo.svg";
import Cart_Icon from "../assets/shared/desktop/icon-cart.svg";


function Navbar() {
    const [location] = useLocation();

    const isActive = (route) => location === route;

    return (
        <>
            <div className="w-full h-24 flex justify-center items-center bg-black fixed z-30 rounded-b-2xl">
                <div className="w-full h-full flex justify-between items-center mx-[165px] relative">
                    <div>
                        <img src={Audiophile_Logo} className="w-[143px] h-[25px]" />
                    </div>

                    <div className="w-[429px] flex justify-between items-center">
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
                        <button>
                            <img src={Cart_Icon} />
                        </button>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;