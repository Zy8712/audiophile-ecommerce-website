import CartProductCard from "./CartProductCard";

import CartProductImage from "../../assets/cart/image-xx99-mark-two-headphones.jpg";

function XX99M2CartProductCard({xx99m2ItemCount, updateXX99M2ItemCount}){

    return(
        <>
            <CartProductCard 
                cartProductImage={CartProductImage}
                productName="XX99 MK II"
                productPrice="$2,999"
                itemCount={xx99m2ItemCount}
                updateItemCount={updateXX99M2ItemCount}
            />
        </>
    );
};

export default XX99M2CartProductCard;