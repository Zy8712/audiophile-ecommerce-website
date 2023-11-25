import EarphonesHomeProductListingDesktop from "../../assets/home/desktop/image-earphones-yx1.jpg";
import EarphonesHomeProductListingTablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import EarphonesHomeProductListingMobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import SpeakerZX9Desktop from "../../assets/home/desktop/image-speaker-zx9.png";

import { Link } from "wouter";

function HomeProductListings() {

    return (
        <>
            <div className="w-full h-[1392px] custom-sm:h-[1423px] md:h-[1296px] flex flex-col justify-between mb-10">

                <div className="w-full h-[600px] custom-sm:h-[720px] md:h-[560px] flex flex-col md:flex-row bg-theme-dark-orange bg-[url('./assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-[left_50%_top_120%] md:bg-[left_-140px_top_-40px] rounded-lg">
                    <div className="w-full md:w-1/2 h-2/5 md:h-full overflow-hidden relative flex justify-center items-center md:inline-block">
                        <img src={SpeakerZX9Desktop} className="w-36 custom-sm:w-44 md:w-96 absolute md:-bottom-4 md:right-6 mt-4" />
                    </div>
                    <div className="w-full md:w-1/2 h-3/5 md:h-full flex flex-col justify-center items-center text-center md:text-left">
                        <div className="w-[349px] h-[303px] flex flex-col items-center md:items-start">
                            <span className="block h-[116px] text-white text-4xl custom-sm:text-[56px] tracking-[2px] leading-[58px] font-bold">
                                ZX9 SPEAKER
                            </span>
                            <p className="text-white text-[15px] opacity-75 leading-[25px] mt-6 mb-10">
                                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                            </p>
                            <Link to="/speakers/zx9speaker">
                                <button className="w-40 h-12 bg-black text-white text-[13px] uppercase tracking-[1px] font-bold hover:bg-theme-grayish-black hover:text-white">
                                    See Product
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-full h-80 flex flex-col justify-center rounded-lg bg-[url('./assets/home/mobile/image-speaker-zx7.jpg')] custom-sm:bg-[url('./assets/home/tablet/image-speaker-zx7.jpg')] md:bg-[url('./assets/home/desktop/image-speaker-zx7.jpg')]">
                    <div className="w-[204px] h-[118px] flex flex-col items-start ml-6 custom-sm:ml-[95px]">
                        <span className="text-black text-[28px] tracking-[2px] font-bold">ZX7 SPEAKER</span>
                        <Link to="/speakers/zx7speaker">
                            <button className="w-40 h-12 border-black border-solid border-2 text-black text-[13px] uppercase tracking-[1px] font-bold mt-8 hover:bg-black hover:text-white">
                                See Product
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full h-[424px] custom-sm:h-80 flex flex-col custom-sm:flex-row justify-between">
                    <div className="w-full custom-sm:w-[339px] lg:w-[540px] h-[200px] custom-sm:h-full rounded-lg overflow-hidden">
                        <img src={EarphonesHomeProductListingDesktop} className="hidden lg:inline-block" />
                        <img src={EarphonesHomeProductListingTablet} className="hidden custom-sm:inline-block lg:hidden" />
                        <img src={EarphonesHomeProductListingMobile} className="inline-block custom-sm:hidden" />
                    </div>
                    <div className="w-full custom-sm:w-[339px] lg:w-[520px] h-[200px] custom-sm:h-full flex flex-col justify-center items-center rounded-lg bg-theme-light-grey">
                        <div className="w-full custom-sm:w-[247px] h-[118px] flex flex-col items-start ml-6 custom-sm:ml-0  custom-sm:mr-[61.5px]">
                            <span className="text-black text-[28px] tracking-[2px] font-bold">YX1 EARPHONES</span>
                            <Link to="/earphones/yx1wirelessearphones">
                                <button className="w-40 h-12 border-black border-solid border-2 text-black text-[13px] uppercase tracking-[1px] font-bold mt-8 hover:bg-black hover:text-white">
                                    See Product
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
};

export default HomeProductListings;