import ZX7SpeakerRecommendation from "../product-recommendation-cards/ZX7SpeakerRecommendation";
import XX99MarkIRecommendation from "../product-recommendation-cards/XX99MarkIRecommendation";
import XX59Recommendation from "../product-recommendation-cards/XX59Recommendation";

function ZX9SpeakerProductPageRecommendations() {

    return (
        <>
            <div className="w-full h-[571px] flex flex-col justify-between">
                <h3 className="text-black text-[32px] leading-9 font-bold tracking-[1.14px] uppercase text-center">
                    You May Also Like
                </h3>

                <div className="w-full h-[471px] flex justify-between">
                    <ZX7SpeakerRecommendation />
                    <XX99MarkIRecommendation />
                    <XX59Recommendation />
                </div>
            </div>
        </>
    );
};

export default ZX9SpeakerProductPageRecommendations;