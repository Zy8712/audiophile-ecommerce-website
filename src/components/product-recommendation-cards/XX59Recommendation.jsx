import Product_Recommend_Preview_Desktop from "../../assets/shared/desktop/image-xx59-headphones.jpg";
import Product_Recommend_Preview_Tablet from "../../assets/shared/tablet/image-xx59-headphones.jpg";
import Product_Recommend_Preview_Mobile from "../../assets/shared/mobile/image-xx59-headphones.jpg";
import UltimateProductRecommendationCard from "./UltimateProductRecommendationCard";

function XX59Recommendation() {

    return (
        <>
            <UltimateProductRecommendationCard
                previewImageDesktop={Product_Recommend_Preview_Desktop}
                previewImageTablet={Product_Recommend_Preview_Tablet}
                previewImageMobile={Product_Recommend_Preview_Mobile}
                productName="XX59"
                pageLink="/headphones/xx59headphones"
            />
        </>
    );
}

export default XX59Recommendation;