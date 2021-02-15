import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productGetReducer,
  productSingleGetReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productupdateReducer,
  productCreateReviewReducer,
  productTopRatedReducer,
} from "./reducers/productReducers";
import {
  cartReducer,
  cartAddReducer,
  cartGetReducer,
  cartRemoveReducer,
  cartQtyUpdateReducer,
  favReducer,
  favAddReducer,
  favGetReducer,
  favRemoveReducer,
} from "./reducers/cartReducers";
import {
  userLoginReducer,
  userDetailsReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userAddressReducer,
  userUpdateAddressReducer,
  userAddAddressReducer,
  userChangePasswordReducer,
  userListReducer,
  userDeleteReducer,
  userGetReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListReducer,
  orderListMyReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productGet: productGetReducer,
  productSingleGet: productSingleGetReducer,
  productTopRated: productTopRatedReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productCreateReview: productCreateReviewReducer,
  productUpdate: productupdateReducer,
  cart: cartReducer,
  cartAdd: cartAddReducer,
  cartGet: cartGetReducer,
  cartRemove: cartRemoveReducer,
  cartQtyUpdate: cartQtyUpdateReducer,
  fav: favReducer,
  favAdd: favAddReducer,
  favGet: favGetReducer,
  favRemove: favRemoveReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userAddress: userAddressReducer,
  userUpdateAddress: userUpdateAddressReducer,
  userAddAddress: userAddAddressReducer,
  userChangePassword: userChangePasswordReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userGet: userGetReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
