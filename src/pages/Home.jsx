import HomeHero from "../components/home-page/HomeHero";
import HomeProductsDirectories from "../components/home-page/HomeProductsDirectories";
import JumpToTopButton from "./JumpToTopButton";

function Home() {

    return (
        <>
            <HomeHero />
            <HomeProductsDirectories />
            <JumpToTopButton />
        </>
    );
};

export default Home;