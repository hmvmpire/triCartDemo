import { productType1, productType2 } from "@/Types/productPropsTypes";
import { CART_ITEMS_LIST } from "./cartActionTypes";
import { toast } from "react-toastify";


export const setCartItems = (data: any) => {
  return {
    type: CART_ITEMS_LIST,
    payload: data,
  };
};

export function addToCart(item: productType1 | productType2) {
  return (dispatch: any, getState: any) => {
    let x = getState()
    let arr = x.cart.items
    let a = arr.find((v: productType1) => v.label === item.label)
    if (a) {
      dispatch(setCartItems(arr.map((v: productType1) =>
        v.label === a.label ? { ...v, qty: v.qty ? v.qty + 1 : 1 } : v // Update id only if it's the third item
      )))
    } else {
      dispatch(setCartItems([...arr, { ...item, qty: 1 }]));
    }
    toast.success("Item added in cart successfully!")
  }
}


export function addToCartWithQty(item: productType1 | productType2) {
  return (dispatch: any, getState: any) => {
    let x = getState()
    let arr = x.cart.items
    let a = arr.find((v: productType1) => v.label === item.label)
    if (a) {
      dispatch(setCartItems(arr.map((v: productType1) =>
        v.label === a.label ? { ...v, qty: v.qty ? item.qty : 1 } : v // Update id only if it's the third item
      )))
    } else {
      dispatch(setCartItems([...arr, item]));
    }
    toast.success("Item added in cart successfully!")
  }
}

export function updateCart(item: productType1 | productType2) {
  return (dispatch: any, getState: any) => {
    let x = getState()
    let arr = x.cart.items
    dispatch(setCartItems(arr.map((v: productType1 | productType2) =>
      v.label === item.label ? { ...v, qty: v.qty ? item.qty : 1 } : v // Update id only if it's the third item
    )))
    toast.success("Cart updated successfully!")
  }
}

export function deleteItem(label: string) {
  return (dispatch: any, getState: any) => {
    let x = getState()
    let arr = x.cart.items
    dispatch(setCartItems(arr.filter((v: productType1 | productType2) => v.label !== label)))
    toast.success("Item deleted successfully!")
  }
}

export function emptyCart() {
  return (dispatch: any) => {
    dispatch(setCartItems([]))
    toast.success("Your cart is empty now!")
  }
}

export function getCartItems() {
  return (dispatch: any, getState: any) => {
    let x = getState()
    dispatch(setCartItems(x.cart.items));
  }
}
