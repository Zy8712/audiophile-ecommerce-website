import HeadphoneCategory from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerCategory from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphoneCategory from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ProductCategoryCard from "./ProductCategoryCard";

function ProductCategories() {

    return (
        <>
            <div className="w-full h-[683px] md:h-[284px] flex flex-col md:flex-row justify-between items-center">

                <ProductCategoryCard
                    categoryLink="/headphones"
                    categoryImage={HeadphoneCategory}
                    categoryName="Headphones"
                    categoryImageCSS="h-40 md:h-52 absolute -top-16"
                />

                <ProductCategoryCard
                    categoryLink="/speakers"
                    categoryImage={SpeakerCategory}
                    categoryName="Speakers"
                    categoryImageCSS="h-36 md:h-48 absolute -top-12"
                />

                <ProductCategoryCard
                    categoryLink="/earphones"
                    categoryImage={EarphoneCategory}
                    categoryName="Earphones"
                    categoryImageCSS="h-32 md:h-44 absolute -top-11"
                />

            </div>
        </>
    );
};

export default ProductCategories;