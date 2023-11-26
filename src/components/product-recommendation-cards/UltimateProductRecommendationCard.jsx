import { Link } from 'wouter';

import OrangeProductButton from "../product-category-pages/OrangeProductButton";

function UltimateProductRecommendationCard(props) {

    return (
        <>
            <div className="w-[327px] sm:w-[223px] lg:w-[350px] h-[265px] sm:h-[471px] flex flex-col justify-between items-center transition-all duration-500 ease-in-out">
                <div className="w-full h[120px] sm:h-[318px] flex flex-col justify-center rounded-lg overflow-hidden mb-10 transition-all duration-500 ease-in-out">
                    <img src={props.previewImageDesktop} className="w-full hidden lg:inline-block" />
                    <img src={props.previewImageTablet} className="w-full hidden sm:inline-block lg:hidden" />
                    <img src={props.previewImageMobile} className="w-full inline-block sm:hidden" />
                </div>
                <h4 className="text-black text-2xl font-bold tracking-[1.14px] uppercase mb-8">
                    {props.productName}
                </h4>
                <Link to={props.pageLink}>
                    <OrangeProductButton />
                </Link>
            </div>
        </>
    );
}

export default UltimateProductRecommendationCard;