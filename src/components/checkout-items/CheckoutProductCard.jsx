
function CheckoutProductCard(props) {

    return (
        <>
            <div className="w-full h-16 flex justify-between mb-6">
                <div className="w-[160px] h-full flex justify-between items-center">
                    <img src={props.cartProductImage} className="h-full rounded-lg" />
                    <div className="w-20 h-full flex flex-col justify-center">
                        <span className="w-full text-black text-[15px] font-bold">{props.productName}</span>
                        <span className="w-full text-sm text-black opacity-50 font-bold">{props.productPrice}</span>
                    </div>
                </div>

                <div className="w-4 h-full">
                    <span>
                        x{props.itemCount}
                    </span>
                </div>
            </div>
        </>
    );
};

export default CheckoutProductCard