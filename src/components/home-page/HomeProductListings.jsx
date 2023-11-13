import EarphonesHomeProductListing from "../../assets/home/desktop/image-earphones-yx1.jpg";
import SpeakerZX9 from "../../assets/home/desktop/image-speaker-zx9.png";

import { Link } from "wouter";

function HomeProductListings() {

    return (
        <>
            <div className="w-full h-[1296px] flex flex-col justify-between mt-[196px] mb-10">

                <div className="w-full h-[560px] flex bg-theme-dark-orange bg-[url('./assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-[left_-140px_top_-40px] rounded-lg">
                    <div className="w-1/2 h-full overflow-hidden relative">
                        <img src={SpeakerZX9} className="w-96 absolute -bottom-4 right-6" />
                    </div>

                    <div className="w-1/2 h-full flex flex-col justify-center items-center">
                        <div className="w-[349px] h-[303px] flex flex-col">
                            <span className="block h-[116px] text-white text-[56px] tracking-[2px] leading-[58px] font-bold">
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

                <div className="w-full h-80 flex flex-col justify-center rounded-lg bg-[url('./assets/home/desktop/image-speaker-zx7.jpg')]">
                    <div className="w-[204px] h-[118px] flex flex-col items-start ml-[95px]">
                        <span className="text-black text-[28px] tracking-[2px] font-bold">ZX7 SPEAKER</span>
                        <Link to="/speakers/zx7speaker">
                            <button className="w-40 h-12 border-black border-solid border-2 text-black text-[13px] uppercase tracking-[1px] font-bold mt-8 hover:bg-black hover:text-white">
                                See Product
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full h-80 flex justify-between">
                    <div className="w-[540px] h-full rounded-lg overflow-hidden">
                        <img src={EarphonesHomeProductListing} />
                    </div>

                    <div className="w-[520px] h-full flex flex-col justify-center items-center rounded-lg bg-theme-light-grey">
                        <div className="w-[247px] h-[118px] flex flex-col items-start mr-[61.5px]">
                            <span className="text-black text-[28px] tracking-[2px] font-bold">YX1 EARPHONES</span>
                            <Link to="/earphones/yx1earphones">
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