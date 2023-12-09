import { Link } from 'wouter';

import RightArrow_Icon from "../assets/shared/desktop/icon-arrow-right.svg";
import ShoppingBag from "../assets/cart/shopping-bag-grey-hsl-0-0-50-svgrepo-com.svg";

import "../App.css";

function ProductCategoryCard(props) {

    return (
        <>
            <Link to={props.categoryLink}>
                <div className={`w-full md:w-[230px] custom-md:w-[275px] lg:w-[300px] custom-lg:w-[350px] ${props.mobileMenuVer ? 'h-[160px]' : 'h-[217px]'}  md:h-full flex flex-col justify-end transition-all duration-500 ease-in-out`}>
                    <div className={`w-full ${props.mobileMenuVer ? 'h-[110px]' : 'h-[160px]'} md:h-[204px] flex flex-col justify-end items-center bg-theme-light-grey rounded-lg relative group hover:cursor-pointer`}>

                        <img src={props.categoryImage} className={props.categoryImageCSS} />

                        <div className={`w-full h-[58px] text-center ${props.mobileMenuVer ? 'mb-1' : 'mb-[30px]'}`}>
                            <span className={`text-black block text-lg font-bold uppercase leading-none tracking-[1.29px] ${props.mobileMenuVer ? 'mb-2' : 'mb-[15px]'}`}>
                                {props.categoryName}
                            </span>
                            <div className="flex justify-center items-center">
                                <img src={ShoppingBag} className="h-4 mr-2" />
                                <span className="text-[13px] tracking-[1px] uppercase font-bold opacity-50 group-hover:text-theme-dark-orange group-hover:opacity-100">
                                    Shop
                                </span>
                                <img src={RightArrow_Icon} className="h-2.5 ml-[13.32px]" />
                            </div>
                        </div>

                    </div>
                </div>
            </Link>

        </>
    );
};

export default ProductCategoryCard;