import { Link } from 'wouter';

function Cart({ toggleCart, showCart }) {

    return (
        <>
            <div className={`w-[360px] h-[488px] bg-white rounded-lg fixed z-50 top-28 right-2 p-6 ${showCart ? 'flex' : 'hidden'}`}>
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <h5 className="text-lg tracking-[1.29px] font-bold text-black uppercase">
                            Cart (0)
                        </h5>
                        <span className="font-medium text-[15px] leading-[25px] opacity-50 text-black underline">
                            Remove all
                        </span>
                    </div>

                    <div>

                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-black opacity-50 text-[15px] leading-[25px] uppercase font-medium">
                            Total
                        </span>
                        <span className="text-black text-lg font-bold">
                            $5,396
                        </span>
                    </div>

                    <Link to="/checkout">
                        <button className="w-full h-12 bg-theme-dark-orange rounded-sm text-white uppercase font-bold tracking-[1px] text-[13px]">
                            Checkout
                        </button>
                    </Link>

                </div>
            </div>
            <div className={`w-screen h-screen fixed z-40 top-0 bg-theme-light-translucent-grey ${showCart ? 'block' : 'hidden'}`}>

            </div>
        </>
    );
};

export default Cart;