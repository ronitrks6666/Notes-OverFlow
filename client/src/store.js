import { combineReducers } from "redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";







import { composeWithDevTools } from "redux-devtools-extension";
import { getAllSubjectReducer } from "./reducers/SubjectReducer";
import { addNewDataReducer } from "./reducers/aPostReducer";
// import { getAllPizzasReducer } from "./reducers/pizzaReducers";
// import { CartReducer } from "./reducers/cartReducers";
// import { loginUserReducer, registerUserReducer } from "./reducers/userReducers";
// import { getOrderReducer, placeOrderReducer } from "./reducers/orderReducer";
 

//this is a way of merging all the reducers into one place , so we can easily export it 
const finalReducer = combineReducers({
//   getAllPizzasReducer: getAllPizzasReducer,
//   CartReducer:CartReducer,
//   registerUserReducer:registerUserReducer,
//   loginUserReducer:loginUserReducer,
//   placeOrderReducer:placeOrderReducer,
//   getOrdersDetail:getOrderReducer
     getAllSubjectReducer : getAllSubjectReducer,
     addNewDataReducer:addNewDataReducer
});

// const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
// const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : []
// const orders = []
// const initialState = {
//   CartReducer:{ cartItems:cartItems} ,
//   loginUserReducer:{currentUser:currentUser},
//   getOrdersDetail:{orders:orders}
// };
const composeEnhacers = composeWithDevTools({});

// creating the store , first: 'REDUCERS' , second :'INITAL STATE' , third:'MIDDLEWARE'
const store = createStore(
  finalReducer,
//   initialState,
  composeEnhacers(applyMiddleware(thunk))
);

export default store;