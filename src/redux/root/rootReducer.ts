// third-party
import { combineReducers } from "redux";

// application
import version from "../version";

import cartReducer from "../cart/cartReducer";

export default combineReducers({
  version: (state: number = version) => state,
  ["cart"]: cartReducer,
});
