import CheckoutProductCard from "./CheckoutProductCard";

import CartProductImage from "../../assets/cart/image-xx59-headphones.jpg";

function XX59CheckoutProductCard({ xx59ItemCount }) {

    return (
        <>
            <CheckoutProductCard
                cartProductImage={CartProductImage}
                productName="XX59"
                productPrice="$899"
                itemCount={xx59ItemCount}
            />
        </>
    );
};

export default XX59CheckoutProductCard;