import {combineReducers} from 'redux'
import authReducer from "./auth";
import errorReducer from "./error";
import cart from './CartReducer'
// import item from './Item'

export default combineReducers({
    cart: cart,
    // item: item,
    auth: authReducer, 
    errors: errorReducer
})

