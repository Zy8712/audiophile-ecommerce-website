import Product_Recommend_Preview_Desktop from "../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import Product_Recommend_Preview_Tablet from "../../assets/shared/tablet/image-xx99-mark-two-headphones.jpg";
import Product_Recommend_Preview_Mobile from "../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";
import UltimateProductRecommendationCard from "./UltimateProductRecommendationCard";

function XX99MarkIIRecommendation() {

    return (
        <>
            <UltimateProductRecommendationCard
                previewImageDesktop={Product_Recommend_Preview_Desktop}
                previewImageTablet={Product_Recommend_Preview_Tablet}
                previewImageMobile={Product_Recommend_Preview_Mobile}
                productName="XX99 Mark II"
                pageLink="/headphones/xx99markiiheadphones"
            />
        </>
    );
}

export default XX99MarkIIRecommendation;