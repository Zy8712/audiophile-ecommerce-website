
function YX1WirelessEarphonesProductGallery(props) {

    return (
        <>
            <div className="w-[327px] sm:w-[690px] lg:w-full h-[756px] sm:h-[368px] lg:h-[592px] flex flex-col sm:flex-row justify-between transition-all duration-500 ease-in-out">
                <div className="w-full sm:w-[277px] lg:w-[445px] h-[368px] sm:h-full flex flex-col justify-between transition-all duration-500 ease-in-out">
                    <img src={props.image1} className="rounded-lg hidden lg:inline-block" />
                    <img src={props.image2} className="rounded-lg hidden lg:inline-block" />

                    <img src={props.image1_Tablet} className="rounded-lg hidden sm:inline-block lg:hidden" />
                    <img src={props.image2_Tablet} className="rounded-lg hidden sm:inline-block lg:hidden" />

                    <img src={props.image1_Mobile} className="rounded-lg inline-block sm:hidden" />
                    <img src={props.image2_Mobile} className="rounded-lg inline-block sm:hidden" />
                </div>

                <div className="w-full sm:w-[395px] lg:w-[635px] h-[368px] sm:h-full transition-all duration-500 ease-in-out">
                    <img src={props.image3} className="rounded-lg hidden lg:inline-block" />
                    <img src={props.image3_Tablet} className="rounded-lg hidden sm:inline-block lg:hidden" />
                    <img src={props.image3_Mobile} className="rounded-lg inline-block sm:hidden" />
                </div>
            </div>

        </>
    );
};

export default YX1WirelessEarphonesProductGallery;