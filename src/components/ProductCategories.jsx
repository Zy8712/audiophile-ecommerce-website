import { Link } from 'wouter';

import RightArrow_Icon from "../assets/shared/desktop/icon-arrow-right.svg";
import HeadphoneCategory from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerCategory from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphoneCategory from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

import "../App.css";

function ProductCategories() {

    return (
        <>
            <div className="w-full h-[284px] flex justify-between">

                <div className="w-[350px] h-full flex flex-col justify-end">
                    <div className="w-full h-[204px] flex flex-col justify-end items-center bg-theme-light-grey rounded-lg relative group hover:cursor-pointer">

                        <img src={HeadphoneCategory} className="h-52 absolute -top-20" />

                        <div className="w-full h-[58px] text-center mb-[30px]">
                            <Link to="/headphones">
                                <span className="text-black block text-lg font-bold uppercase leading-none tracking-[1.29px] mb-[15px]">
                                    Headphones
                                </span>
                                <div className="flex justify-center items-center">
                                    <span className="text-[13px] tracking-[1px] uppercase font-bold opacity-50 group-hover:text-theme-dark-orange group-hover:opacity-100">Shop</span>
                                    <img src={RightArrow_Icon} className="h-2.5 ml-[13.32px]" />
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>


                <div className="w-[350px] h-full flex flex-col justify-end">
                    <div className="w-full h-[204px] flex flex-col justify-end items-center bg-theme-light-grey rounded-lg relative group hover:cursor-pointer">

                        <img src={SpeakerCategory} className="h-48 absolute -top-16" />

                        <div className="w-full h-[58px] text-center mb-[30px]">
                            <Link to="/speakers">
                                <span className="text-black block text-lg font-bold uppercase leading-none tracking-[1.29px] mb-[15px]">
                                    Speakers
                                </span>
                                <div className="flex justify-center items-center">
                                    <span className="text-[13px] tracking-[1px] uppercase font-bold opacity-50 group-hover:text-theme-dark-orange group-hover:opacity-100">Shop</span>
                                    <img src={RightArrow_Icon} className="h-2.5 ml-[13.32px]" />
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>


                <div className="w-[350px] h-full flex flex-col justify-end">
                    <div className="w-full h-[204px] flex flex-col justify-end items-center bg-theme-light-grey rounded-lg relative group hover:cursor-pointer">

                        <img src={EarphoneCategory} className="h-44 absolute -top-14" />

                        <div className="w-full h-[58px] text-center mb-[30px]">
                            <Link to="/earphones">
                                <span className="text-black block text-lg font-bold uppercase leading-none tracking-[1.29px] mb-[15px]">
                                    Earphones
                                </span>
                                <div className="flex justify-center items-center">
                                    <span className="text-[13px] tracking-[1px] uppercase font-bold opacity-50 group-hover:text-theme-dark-orange group-hover:opacity-100">Shop</span>
                                    <img src={RightArrow_Icon} className="h-2.5 ml-[13.32px]" />
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
};

export default ProductCategories;