import ZX9SpeakerRecommendation from "../product-recommendation-cards/ZX9SpeakerRecommendation";
import XX99MarkIRecommendation from "../product-recommendation-cards/XX99MarkIRecommendation";
import XX59Recommendation from "../product-recommendation-cards/XX59Recommendation";

function ZX7SpeakerProductPageRecommendations() {

    return (
        <>
            <div className="w-full h-[571px] flex flex-col justify-between">
                <h3 className="text-black text-[32px] leading-9 font-bold tracking-[1.14px] uppercase text-center">
                    You May Also Like
                </h3>

                <div className="w-full h-[471px] flex justify-between">
                    <ZX9SpeakerRecommendation />
                    <XX99MarkIRecommendation />
                    <XX59Recommendation />
                </div>
            </div>
        </>
    );
};

export default ZX7SpeakerProductPageRecommendations;