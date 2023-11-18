import XX99MarkIIRecommendation from "../product-recommendation-cards/XX99MarkIIRecommendation";
import XX59Recommendation from "../product-recommendation-cards/XX59Recommendation";
import ZX9SpeakerRecommendation from "../product-recommendation-cards/ZX9SpeakerRecommendation";

function XX99MarkIHeadphonesProductPageRecommendations() {

    return (
        <>
            <div className="w-full h-[571px] flex flex-col justify-between">
                <h3 className="text-black text-[32px] leading-9 font-bold tracking-[1.14px] uppercase text-center">
                    You May Also Like
                </h3>

                <div className="w-full h-[471px] flex justify-between">
                    <XX99MarkIIRecommendation />
                    <XX59Recommendation />
                    <ZX9SpeakerRecommendation />
                </div>
            </div>
        </>
    );
};

export default XX99MarkIHeadphonesProductPageRecommendations;