import HeadphoneCategory from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerCategory from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphoneCategory from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ProductCategoryCard from "./ProductCategoryCard";


function ProductCategories() {

    return (
        <>
            <div className="w-full h-[284px] flex justify-between">

                <ProductCategoryCard
                    categoryLink="/headphones"
                    categoryImage={HeadphoneCategory}
                    categoryName="Headphones"
                    categoryImageCSS="h-52 absolute -top-20"
                />

                <ProductCategoryCard
                    categoryLink="/speakers"
                    categoryImage={SpeakerCategory}
                    categoryName="Speakers"
                    categoryImageCSS="h-48 absolute -top-16"
                />

                <ProductCategoryCard
                    categoryLink="/earphones"
                    categoryImage={EarphoneCategory}
                    categoryName="Earphones"
                    categoryImageCSS="h-44 absolute -top-14"
                />

            </div>
        </>
    );
};

export default ProductCategories;