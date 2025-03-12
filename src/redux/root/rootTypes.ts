import { AppReducerStateType } from "../types";
import cartReducer from "../cart/cartReducer";

export interface RootState {
  version: number;
  cart: any;
}
