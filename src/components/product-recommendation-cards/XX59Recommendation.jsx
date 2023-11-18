import Product_Recommend_Preview from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import UltimateProductRecommendationCard from "./UltimateProductRecommendationCard";

function XX59Recommendation() {

    return (
        <>
            <UltimateProductRecommendationCard
                previewImage={Product_Recommend_Preview}
                productName="XX59"
                pageLink="/headphones/xx59headphones"
            />
        </>
    );
}

export default XX59Recommendation;