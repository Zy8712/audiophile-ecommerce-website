import CartProductCard from "./CartProductCard";

import CartProductImage from "../../assets/cart/image-yx1-earphones.jpg";

function YX1CartProductCard({yx1ItemCount, updateYX1ItemCount}){

    return(
        <>
            <CartProductCard 
                cartProductImage={CartProductImage}
                productName="YX1"
                productPrice="$599"
                itemCount={yx1ItemCount}
                updateItemCount={updateYX1ItemCount}
            />
        </>
    );
};

export default YX1CartProductCard;