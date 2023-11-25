import { Link } from 'wouter';

import OrangeProductButton from "./OrangeProductButton";

function ProductCardImageLeft(props) {

    return (
        <>
            <div className={`w-full ${props.newProduct ? 'h-[724px] sm:h-[706px]' : 'h-[681px] sm:h-[671px]'} lg:h-[560px] flex flex-col lg:flex-row justify-between items-center transition-all duration-500 ease-in-out`}>
                <img src={`${props.previewImageDesktop}`} className="h-full rounded-lg hidden lg:inline-block" />
                <img src={`${props.previewImageTablet}`} className="max-w-[689px] rounded-lg hidden sm:inline-block lg:hidden" />
                <img src={`${props.previewImageMobile}`} className="max-w-[327px] rounded-lg inline-block sm:hidden" />
                <div className={`w-[327px] sm:w-[572px] lg:w-[445px] ${props.newProduct ? 'h-[340px] sm:h-[302px] lg:h-[343px]' : 'h-[297px] sm:h-[267px] lg:h-[308px]'} flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-500 ease-in-out`}>
                    <span className={`${props.newProduct ? 'block' : 'hidden'} text-theme-dark-orange text-sm tracking-[10px] uppercase mb-4`}>
                        New Product
                    </span>
                    <h2 className="text-black text-[28px] sm:text-[40px] leading-[32px] sm:leading-[44px] tracking-[1.43px] font-bold uppercase transition-all duration-500 ease-in-out">
                        {props.nameFront} <br className={`${props.lineBreak ? 'inline' : 'hidden'}`} /> {props.nameBack}
                    </h2>
                    <p className="text-black text-[15px] leading-[25px] font-medium opacity-50 mt-6 sm:mt-8 mb-6 lg:mb-10 transition-all duration-500 ease-in-out">
                        {props.description}
                    </p>
                    <Link to={props.link}>
                        <OrangeProductButton />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProductCardImageLeft;