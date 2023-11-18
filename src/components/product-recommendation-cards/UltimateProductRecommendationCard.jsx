import { Link } from 'wouter';

import OrangeProductButton from "../product-category-pages/OrangeProductButton";

function UltimateProductRecommendationCard(props) {

    return (
        <>
            <div className="w-[350px] h-[471px] flex flex-col justify-between items-center">
                <div className="w-full h-[318px] flex flex-col justify-center rounded-lg overflow-hidden mb-10">
                    <img src={props.previewImage} className="w-full" />
                </div>
                <h4 className="text-black text-2xl font-bold tracking-[1.14px] uppercase mb-8">{props.productName}</h4>
                <Link to={props.pageLink}>
                    <OrangeProductButton />
                </Link>
            </div>
        </>
    );
}

export default UltimateProductRecommendationCard;