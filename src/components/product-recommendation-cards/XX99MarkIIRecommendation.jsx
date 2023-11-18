import Product_Recommend_Preview from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import UltimateProductRecommendationCard from "./UltimateProductRecommendationCard";

function XX99MarkIIRecommendation() {

    return (
        <>
            <UltimateProductRecommendationCard
                previewImage={Product_Recommend_Preview}
                productName="XX99 Mark II"
                pageLink="/headphones/xx99markiiheadphones"
            />
        </>
    );
}

export default XX99MarkIIRecommendation;