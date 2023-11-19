import { Link } from 'wouter';

import RightArrow_Icon from "../assets/shared/desktop/icon-arrow-right.svg";

import "../App.css";

function ProductCategoryCard(props) {

    return (
        <>
            <Link to={props.categoryLink}>
                <div className="w-[350px] h-full flex flex-col justify-end">
                    <div className="w-full h-[204px] flex flex-col justify-end items-center bg-theme-light-grey rounded-lg relative group hover:cursor-pointer">

                        <img src={props.categoryImage} className={props.categoryImageCSS} />

                        <div className="w-full h-[58px] text-center mb-[30px]">
                            <span className="text-black block text-lg font-bold uppercase leading-none tracking-[1.29px] mb-[15px]">
                                {props.categoryName}
                            </span>
                            <div className="flex justify-center items-center">
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