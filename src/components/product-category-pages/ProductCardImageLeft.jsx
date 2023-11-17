import { Link } from 'wouter';

import OrangeProductButton from "./OrangeProductButton";

function ProductCardImageLeft(props) {

    return (
        <>
            <div className="w-full h-[560px] flex justify-between items-center">
                <img src={`${props.previewImage}`} className="h-full" />
                <div className={`w-[445px] ${props.newProduct ? 'h-[343px]' : 'h-[308px]'} flex flex-col`}>
                    <span className={`${props.newProduct ? 'block' : 'hidden'} text-theme-dark-orange text-sm tracking-[10px] uppercase mb-4`}>
                        New Product
                    </span>
                    <h2 className="text-black text-[40px] leading-[44px] tracking-[1.43px] font-bold uppercase">
                        {props.nameFront} <br className={`${props.lineBreak ? 'inline' : 'hidden'}`} /> {props.nameBack}
                    </h2>
                    <p className="text-black text-[15px] leading-[25px] font-medium opacity-50 mt-8 mb-10">
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