import Product_Recommend_Preview_Desktop from "../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import Product_Recommend_Preview_Tablet from "../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import Product_Recommend_Preview_Mobile from "../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import UltimateProductRecommendationCard from "./UltimateProductRecommendationCard";

function XX99MarkIRecommendation() {

    return (
        <>
            <UltimateProductRecommendationCard
                previewImageDesktop={Product_Recommend_Preview_Desktop}
                previewImageTablet={Product_Recommend_Preview_Tablet}
                previewImageMobile={Product_Recommend_Preview_Mobile}
                productName="XX99 Mark I"
                pageLink="/headphones/xx99markiheadphones"
            />
        </>
    );
}

export default XX99MarkIRecommendation;