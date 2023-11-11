import HomeHero from "../components/home-page/HomeHero";
import HomeProductsDirectories from "../components/home-page/HomeProductsDirectories";
import SiteFooter from "../components/SiteFooter";

function Home() {

    return (
        <>
            <HomeHero />
            <HomeProductsDirectories />
            <SiteFooter />
        </>
    );
};

export default Home;