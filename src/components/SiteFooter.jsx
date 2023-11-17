import { Link } from 'wouter';

import Audiophile_Logo from "../assets/shared/desktop/logo.svg";
import Facebook_Logo from "../assets/shared/desktop/icon-facebook.svg";
import Twitter_Logo from "../assets/shared/desktop/icon-twitter.svg";
import Instagram_Logo from "../assets/shared/desktop/icon-instagram.svg";

import "../App.css";

function SiteFooter() {

    return (
        <>
            <footer className="w-full h-[365px] flex justify-center bg-black relative">
                <div className="w-full mx-[165px] relative">

                    <div className="w-[101px] h-1 bg-theme-dark-orange absolute top-0"></div>

                    <div className="w-full flex justify-between items-center mt-[75px]">
                        <div>
                            <img src={Audiophile_Logo} className="w-[143px] h-[25px]" />
                        </div>

                        <div className="w-[429px] flex justify-between items-center">
                            <Link to="/">
                                <span className="text-white text-[13px] tracking-[2px] leading-[25px] uppercase font-bold hover:text-theme-dark-orange hover:cursor-pointer">
                                    Home
                                </span>
                            </Link>
                            <Link to="/headphones">
                                <span className="text-white text-[13px] tracking-[2px] leading-[25px] uppercase font-bold hover:text-theme-dark-orange hover:cursor-pointer">
                                    Headphones
                                </span>
                            </Link>
                            <Link to="/speakers">
                                <span className="text-white text-[13px] tracking-[2px] leading-[25px] uppercase font-bold hover:text-theme-dark-orange hover:cursor-pointer">
                                    Speakers
                                </span>
                            </Link>
                            <Link to="/earphones">
                                <span className="text-white text-[13px] tracking-[2px] leading-[25px] uppercase font-bold hover:text-theme-dark-orange hover:cursor-pointer">
                                    Earphones
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full h-[100px] flex justify-between items-center mt-9">
                        <div className="w-[540px] h-full">
                            <p className="text-white opacity-50 font-medium text-[15px] leading-[25px]">
                                Audiophile is an all in one stop to fulfill your audio needs.
                                We're a small team of music lovers and sound specialists who are devoted to 
                                helping you get the most out of personal audio.
                                Come and visit our demo facility - we’re open 7 days a week.
                            </p>
                        </div>

                        <div className="h-full flex flex-col justify-end items-end">
                            <div className="w-[104px] flex justify-between items-center">
                                <img src={Facebook_Logo} className="w-6" />
                                <img src={Twitter_Logo} className="w-6" />
                                <img src={Instagram_Logo} className="w-6" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-start mt-14">
                        <span className="text-white opacity-50 font-medium text-[15px] leading-[25px]">
                            Copyright 2021. All Rights Reserved
                        </span>
                    </div>


                </div>


                <div className="absolute bottom-2 text-white opacity-90 text-xs">
                    Original site design by
                    <a className="text-theme-light-orange"
                        href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"> Frontend Mentor</a>.
                    Coded by: <a className="text-theme-light-orange" href="https://github.com/Zy8712">Bryan Li</a>
                </div>
            </footer>
        </>
    );
};

export default SiteFooter;