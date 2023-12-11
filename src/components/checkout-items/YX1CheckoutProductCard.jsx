import CheckoutProductCard from "./CheckoutProductCard";

import CartProductImage from "../../assets/cart/image-yx1-earphones.jpg";

function YX1CheckoutProductCard({ yx1ItemCount }) {

    return (
        <>
            <CheckoutProductCard
                cartProductImage={CartProductImage}
                productName="YX1"
                productPrice="$599"
                itemCount={yx1ItemCount}
            />
        </>
    );
};

export default YX1CheckoutProductCard;