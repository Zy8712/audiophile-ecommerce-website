import CheckoutProductCard from "./CheckoutProductCard";

import CartProductImage from "../../assets/cart/image-xx99-mark-two-headphones.jpg";

function XX99M2CheckoutProductCard({ xx99m2ItemCount }) {

    return (
        <>
            <CheckoutProductCard
                cartProductImage={CartProductImage}
                productName="XX99 MK II"
                productPrice="$2,999"
                itemCount={xx99m2ItemCount}
            />
        </>
    );
};

export default XX99M2CheckoutProductCard;