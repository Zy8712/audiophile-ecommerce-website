
function YX1WirelessEarphonesProductGallery(props) {

    return (
        <>
            <div className="w-full h-[592px] flex justify-between">
                <div className="w-[445px] h-full flex flex-col justify-between">
                    <img src={props.image1} className="rounded-lg" />
                    <img src={props.image2} className="rounded-lg" />
                </div>

                <div className="w-[635px] h-full">
                    <img src={props.image3} className="rounded-lg" />
                </div>
            </div>

        </>
    );
};

export default YX1WirelessEarphonesProductGallery;