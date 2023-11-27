
function Checkout() {

    return (
        <>
            <div className="w-full h-[1506px] flex justify-center items-center pt-[176px] pb-[141px] bg-theme-light-grey">
                <div className="w-[95%] lg:w-[1110px] h-[1189px] flex flex-col justify-between border-black border-2 border-solid">
                    <div className="block text-[15px] font-medium leading-[25px] opacity-50 mb-14">
                        <span className="text-black hover:text-theme-dark-orange cursor-pointer">
                            Go Back
                        </span>
                    </div>

                    <div className="w-full h-[1126px] flex justify-between border-blue-500 border-2 border-solid">
                        <div className="w-[730px] h-full bg-white rounded-lg px-12 py-[54px]">
                            <div className="w-full h-full border-black border-2 border-solid">
                                <h1 className="text-black text-[32px] leading-9 tracking-[1.14px] font-bold uppercase">Checkout</h1>

                            </div>
                        </div>
                        <div className="w-[350px] h-[612px] bg-white rounded-lg">


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout