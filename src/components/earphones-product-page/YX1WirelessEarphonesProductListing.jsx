import YX1WirelessEarphonesProductBlock from "./YX1WirelessEarphonesProductBlock";
import YX1WirelessEarphonesProductFeatures from "./YX1WirelessEarphonesProductFeatures";
import YX1WirelessEarphonesProductGallery from "./YX1WirelessEarphonesProductGallery";

function YX1WirelessEarphonesProductListing() {

    return (
        <>
            <div className="w-full">
                <span className="block text-[15px] font-medium leading-[25px] text-black opacity-50 mb-14">Go Back</span>
                <div className="w-full h-[3713px] flex flex-col justify-between">
                    <YX1WirelessEarphonesProductBlock />
                    <YX1WirelessEarphonesProductFeatures />
                    <YX1WirelessEarphonesProductGallery />
                </div>

            </div>

        </>
    );
};

export default YX1WirelessEarphonesProductListing;