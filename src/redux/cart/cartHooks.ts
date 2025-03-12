// application
import { useAppAction, useAppSelector } from "../hooks";
import { addToCart, addToCartWithQty, deleteItem, emptyCart, getCartItems, updateCart } from "./cartActions";
import { CART_NAMESPACE } from "./cartReducer";


export const useCart = () =>
  useAppSelector((state) => state[CART_NAMESPACE]);

export const useCartAddItem = () => useAppAction(addToCart);
export const useGetCartItems = () => useAppAction(getCartItems)
export const useUpdateCart = () => useAppAction(updateCart)
export const useDeleteItem = () => useAppAction(deleteItem)
export const useEmptyCart = () => useAppAction(emptyCart)
export const useAddToCartWithQty = () => useAppAction(addToCartWithQty)