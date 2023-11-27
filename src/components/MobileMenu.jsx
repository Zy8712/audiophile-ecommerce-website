import ProductCategories from "./ProductCategories";

function MobileMenu(props){

    return(
        <>
            <div className={`w-full h-[750px] sm:h-[340px] ${props.showMobileMenu ? 'inline-block' : 'hidden'} lg:hidden bg-white border-black border-2 border-solid rounded-b-3xl absolute bottom-[-750px] sm:bottom-[-340px] px-10 transition-all duration-1000 ease-in-out`}>
                <ProductCategories />
            </div>
        </>
    );
};

export default MobileMenu;