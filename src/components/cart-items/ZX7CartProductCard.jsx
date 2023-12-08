import CartProductCard from "./CartProductCard";

import CartProductImage from "../../assets/cart/image-zx7-speaker.jpg";

function ZX7CartProductCard({zx7ItemCount, updateZX7ItemCount}){

    return(
        <>
            <CartProductCard 
                cartProductImage={CartProductImage}
                productName="ZX7"
                productPrice="$3,500"
                itemCount={zx7ItemCount}
                updateItemCount={updateZX7ItemCount}
            />
        </>
    );
};

export default ZX7CartProductCard;