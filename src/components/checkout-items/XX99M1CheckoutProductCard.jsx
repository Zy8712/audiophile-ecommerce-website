import CheckoutProductCard from "./CheckoutProductCard";

import CartProductImage from "../../assets/cart/image-xx99-mark-one-headphones.jpg";

function XX99M1CheckoutProductCard({ xx99m1ItemCount }) {

    return (
        <>
            <CheckoutProductCard
                cartProductImage={CartProductImage}
                productName="XX99 MK I"
                productPrice="$1,750"
                itemCount={xx99m1ItemCount}
            />
        </>
    );
};

export default XX99M1CheckoutProductCard;