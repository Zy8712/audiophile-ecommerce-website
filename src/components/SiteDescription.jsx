import SiteDescriptionPortrait from "../assets/shared/desktop/image-best-gear.jpg";

function SiteDescription() {

    return (
        <>
            <div className="w-full h-[588px] flex justify-between mt-40">
                <div>

                </div>
                <div className="rounded-lg overflow-hidden">
                    <img src={SiteDescriptionPortrait} />
                </div>
            </div>
        </>
    );
};

export default SiteDescription