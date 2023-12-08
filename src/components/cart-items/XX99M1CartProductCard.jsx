import CartProductCard from "./CartProductCard";

import CartProductImage from "../../assets/cart/image-xx99-mark-one-headphones.jpg";

function XX99M1CartProductCard({xx99m1ItemCount, updateXX99M1ItemCount}){

    return(
        <>
            <CartProductCard 
                cartProductImage={CartProductImage}
                productName="XX99 MK I"
                productPrice="$1,750"
                itemCount={xx99m1ItemCount}
                updateItemCount={updateXX99M1ItemCount}
            />
        </>
    );
};

export default XX99M1CartProductCard;