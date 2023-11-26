import Product_Recommend_Preview_Desktop from "../../assets/shared/desktop/image-zx7-speaker.jpg";
import Product_Recommend_Preview_Tablet from "../../assets/shared/tablet/image-zx7-speaker.jpg";
import Product_Recommend_Preview_Mobile from "../../assets/shared/mobile/image-zx7-speaker.jpg";
import UltimateProductRecommendationCard from "./UltimateProductRecommendationCard";

function ZX7SpeakerRecommendation() {

    return (
        <>
            <UltimateProductRecommendationCard
                previewImageDesktop={Product_Recommend_Preview_Desktop}
                previewImageTablet={Product_Recommend_Preview_Tablet}
                previewImageMobile={Product_Recommend_Preview_Mobile}
                productName="ZX7 Speaker"
                pageLink="/speakers/zx7speaker"
            />
        </>
    );
}

export default ZX7SpeakerRecommendation;