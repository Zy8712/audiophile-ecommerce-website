import CheckoutProductCard from "./CheckoutProductCard";

import CartProductImage from "../../assets/cart/image-zx9-speaker.jpg";

function ZX9CheckoutProductCard({ zx9ItemCount }) {

    return (
        <>
            <CheckoutProductCard
                cartProductImage={CartProductImage}
                productName="ZX9"
                productPrice="$4,500"
                itemCount={zx9ItemCount}
            />
        </>
    );
};

export default ZX9CheckoutProductCard;