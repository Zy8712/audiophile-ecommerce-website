import YX1WirelessEarphonesProductListing from "../../components/earphones-product-page/YX1WirelessEarphonesProductListing";
import SiteFooter from "../../components/SiteFooter";

function YX1WirelessEarphones(){

    return(
        <>
            <div className="w-full flex justify-center pt-24 pb-40">
                <div className="w-[1110px] h-[1460px] flex flex-col pt-20">
                    <YX1WirelessEarphonesProductListing />
                </div>
            </div>

            <SiteFooter />
        </>
    );
};

export default YX1WirelessEarphones;