import ProductCategoryCard from "./ProductCategoryCard";
import HeadphoneCategory from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerCategory from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphoneCategory from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

function MobileMenu(props) {

    return (
        <>
            <div className={`w-full h-[580px] sm:h-[340px] ${props.showMobileMenu ? 'inline-block' : 'hidden'} lg:hidden bg-white border-black border-2 border-solid rounded-b-3xl absolute bottom-[-580px] sm:bottom-[-340px] px-10 transition-all duration-1000 ease-in-out`}>
                <div className="w-full h-[550px] sm:h-[284px] flex flex-col md:flex-row justify-around items-center mt-2" >

                    <ProductCategoryCard
                        categoryLink="/headphones"
                        categoryImage={HeadphoneCategory}
                        categoryName="Headphones"
                        categoryImageCSS="h-32 md:h-52 absolute -top-16"
                        mobileMenuVer={true}
                    />

                    <ProductCategoryCard
                        categoryLink="/speakers"
                        categoryImage={SpeakerCategory}
                        categoryName="Speakers"
                        categoryImageCSS="h-28 md:h-48 absolute -top-12"
                        mobileMenuVer={true}
                    />

                    <ProductCategoryCard
                        categoryLink="/earphones"
                        categoryImage={EarphoneCategory}
                        categoryName="Earphones"
                        categoryImageCSS="h-24 md:h-44 absolute -top-11"
                        mobileMenuVer={true}
                    />

                </div>
            </div>
        </>
    );
};

export default MobileMenu;