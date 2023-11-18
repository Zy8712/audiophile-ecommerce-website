import Product_Recommend_Preview from "../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import UltimateProductRecommendationCard from "./UltimateProductRecommendationCard";

function ZX9SpeakerRecommendation() {

    return (
        <>
            <UltimateProductRecommendationCard
                previewImage={Product_Recommend_Preview}
                productName="ZX9 Speaker"
                pageLink="/speakers/zx9speaker"
            />
        </>
    );
}

export default ZX9SpeakerRecommendation;