import React, { useState, useEffect } from "react";

function CartProductCard(props) {

    // Initialize productCount state with props.itemCount
    const [productCount, setProductCount] = useState(props.itemCount);

    // useEffect to update productCount if props.itemCount changes
    useEffect(() => {
        // Update productCount if props.itemCount changes
        setProductCount(props.itemCount);
    }, [props.itemCount]);

    const incrementCounter = () => {
        if (productCount < 99) {
            const updatedCount = productCount + 1;
            setProductCount(updatedCount);
            props.updateItemCount(updatedCount); // Update itemCount using props function
        }
    };

    const decrementCounter = () => {
        if (productCount > 1) {
            const updatedCount = productCount - 1;
            setProductCount(updatedCount);
            props.updateItemCount(updatedCount); // Update itemCount using props function
        }
    };

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

                <div className="w-24 h-full flex items-center">

                    <div className="w-full h-8 bg-theme-light-grey flex">
                        <button onClick={decrementCounter}
                            className="w-8 h-8 flex justify-center items-center hover:text-theme-dark-orange hover:bg-theme-super-light-grey">
                            -
                        </button>
                        <span className="w-8 h-8 flex justify-center items-center text-xs font-bold">
                            {productCount}
                        </span>
                        <button onClick={incrementCounter}
                            className="w-8 h-8 flex justify-center items-center hover:text-theme-dark-orange hover:bg-theme-super-light-grey">
                            +
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProductCard;