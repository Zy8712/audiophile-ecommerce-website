import CheckoutProductCard from "./CheckoutProductCard";

import CartProductImage from "../../assets/cart/image-zx7-speaker.jpg";

function ZX7CheckoutProductCard({ zx7ItemCount }) {

    return (
        <>
            <CheckoutProductCard
                cartProductImage={CartProductImage}
                productName="ZX7"
                productPrice="$3,500"
                itemCount={zx7ItemCount}
            />
        </>
    );
};

export default ZX7CheckoutProductCard;