import CartProductCard from "./CartProductCard";

import CartProductImage from "../../assets/cart/image-zx9-speaker.jpg";

function ZX9CartProductCard({zx9ItemCount, updateZX9ItemCount}){

    return(
        <>
            <CartProductCard 
                cartProductImage={CartProductImage}
                productName="ZX9"
                productPrice="$4,500"
                itemCount={zx9ItemCount}
                updateItemCount={updateZX9ItemCount}
            />
        </>
    );
};

export default ZX9CartProductCard;