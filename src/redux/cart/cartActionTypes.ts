// application
import { productType1 } from '@/Types/productPropsTypes';
import { AppAction } from '../types';

export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_ITEMS_LIST = "[CART Action] Get list of all CART"
export interface CartAddItemAction {
    type: typeof CART_ADD_ITEM;
    product: productType1;
}

export interface CartRemoveItemAction {
    type: typeof CART_REMOVE_ITEM;
    productId: number;
}

export type CartAction =
    CartAddItemAction |
    CartRemoveItemAction;

export type CartThunkAction<T = void> = AppAction<CartAction, T>;
