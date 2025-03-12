// application
import {
  CART_ITEMS_LIST,
} from "./cartActionTypes";
import { withClientState } from "../client";

const initialState: any = {
  items: [],
};

export const CART_NAMESPACE = "cart";

function cartBaseReducer(state = initialState, action: any) {
  switch (action.type) {
    case CART_ITEMS_LIST: {
      const data = action.payload;
      return {
        ...state,
        items: data,
      };
    }

    default:
      return state;
  }
}

const cartReducer = withClientState(
  cartBaseReducer,
  CART_NAMESPACE
);

export default cartReducer;
