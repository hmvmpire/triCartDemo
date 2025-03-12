import { useCart, useGetCartItems, useUpdateCart } from "@/redux/cart/cartHooks";
import { productType1 } from "@/Types/productPropsTypes";
import { useEffect } from "react";
import { ProductItem } from "./productItem";

export const ItemsList = () => {
    const cart = useCart();
    const updateCart = useUpdateCart()
    const getCartItems = useGetCartItems()
    const handleUpdate = (item: productType1) => {
        updateCart(item)
        getCartItems()
    }
   
    return (
        <div className="mt-6">
            <div className="pb-3 border-b fw_600 uppercase text-black text-sm mb-3">Product</div>
            {cart.items && cart.items.length > 0 && cart.items.map((product: productType1, index: number) => (
                <ProductItem key={index + 1} product={product} handleUpdate={handleUpdate} />
            ))
            }
        </div >
    )
}