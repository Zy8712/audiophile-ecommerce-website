import CartProductCard from "./CartProductCard";

import CartProductImage from "../../assets/cart/image-xx59-headphones.jpg";

function XX59CartProductCard({xx59ItemCount, updateXX59ItemCount}){

    return(
        <>
            <CartProductCard 
                cartProductImage={CartProductImage}
                productName="XX59"
                productPrice="$899"
                itemCount={xx59ItemCount}
                updateItemCount={updateXX59ItemCount}
            />
        </>
    );
};

export default XX59CartProductCard;