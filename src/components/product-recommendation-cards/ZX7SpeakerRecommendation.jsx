import Product_Recommend_Preview from "../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import UltimateProductRecommendationCard from "./UltimateProductRecommendationCard";

function ZX7SpeakerRecommendation() {

    return (
        <>
            <UltimateProductRecommendationCard
                previewImage={Product_Recommend_Preview}
                productName="ZX9 Speaker"
                pageLink="/speakers/zx7speaker"
            />
        </>
    );
}

export default ZX7SpeakerRecommendation;