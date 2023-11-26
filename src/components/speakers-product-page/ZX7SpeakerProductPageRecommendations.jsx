import ZX9SpeakerRecommendation from "../product-recommendation-cards/ZX9SpeakerRecommendation";
import XX99MarkIRecommendation from "../product-recommendation-cards/XX99MarkIRecommendation";
import XX59Recommendation from "../product-recommendation-cards/XX59Recommendation";

function ZX7SpeakerProductPageRecommendations() {

    return (
        <>
            <div className="w-[327px] sm:w-[691px] lg:w-full h-[983px] sm:h-[563px] lg:h-[571px] flex flex-col justify-between">
                <h3 className="text-black text-2xl sm:text-[32px] leading-9 font-bold tracking-[1.14px] uppercase text-center">
                    You May Also Like
                </h3>

                <div className="w-full h-[907px] sm:h-[471px] flex flex-col sm:flex-row justify-between">
                    <ZX9SpeakerRecommendation />
                    <XX99MarkIRecommendation />
                    <XX59Recommendation />
                </div>
            </div>
        </>
    );
};

export default ZX7SpeakerProductPageRecommendations;