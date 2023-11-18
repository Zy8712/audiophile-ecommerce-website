
function Cart() {

    return (
        <>
            <div className="w-[360px] h-[488px] bg-white rounded-lg absolute z-50 top-20 right-2 p-7">
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <h5>Cart (0)</h5>
                        <span>Remove all</span>
                    </div>

                    <div>

                    </div>

                    <div className="flex justify-between items-center">
                        <span>Total</span>
                        <span>$5,396</span>
                    </div>

                    <button className="w-full h-12 bg-theme-dark-orange rounded-sm text-white uppercase font-bold tracking-[1px] text-[13px]">
                        Checkout
                    </button>

                </div>
            </div>
        </>
    );
};

export default Cart;