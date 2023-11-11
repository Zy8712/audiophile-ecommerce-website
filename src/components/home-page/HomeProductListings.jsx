import EarphonesHomeProductListing from "../../assets/home/desktop/image-earphones-yx1.jpg";


function HomeProductListings() {

    return (
        <>
            <div className="w-full h-[1296px] flex flex-col justify-between mt-[196px] mb-10">

                <div className="w-full h-[560px] bg-theme-dark-orange rounded-lg">
                    <div>

                    </div>

                    <div>

                    </div>
                </div>

                <div className="w-full h-80 rounded-lg bg-[url('./assets/home/desktop/image-speaker-zx7.jpg')]">

                </div>

                <div className="w-full h-80 flex justify-between">
                    <div className="w-[540px] h-full rounded-lg overflow-hidden">
                        <img src={EarphonesHomeProductListing} />
                    </div>

                    <div className="w-[520px] h-full rounded-lg bg-theme-light-grey">

                    </div>
                </div>

            </div>

        </>
    );
};

export default HomeProductListings;