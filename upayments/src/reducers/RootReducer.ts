import {combineReducers} from "redux";
import {productReducer} from "./ProductReducer";

const RootReducer = combineReducers({
  product: productReducer
});

export default RootReducer