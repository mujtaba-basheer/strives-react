import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productGetReducer,
  productPagesReducer,
  productSingleGetReducer,
  productCollectionReducer,
  productCollectionsReducer,
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
  userNewsletterReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderCouponReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListReducer,
  orderListMyReducer,
  orderSingleReducer,
  orderCurrentReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productGet: productGetReducer,
  productPages: productPagesReducer,
  productSingleGet: productSingleGetReducer,
  productCollection: productCollectionReducer,
  productCollections: productCollectionsReducer,
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
  userNewsletter: userNewsletterReducer,
  orderCreate: orderCreateReducer,
  orderCoupon: orderCouponReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  orderSingle: orderSingleReducer,
  orderCurrent: orderCurrentReducer,
});

const favItemsFromStorage = localStorage.getItem("favItems")
  ? JSON.parse(localStorage.getItem("favItems"))
  : [];

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
const currentOrderFromStorage = localStorage.getItem("currentOrder")
  ? JSON.parse(localStorage.getItem("currentOrder"))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
  fav: {
    favItems: favItemsFromStorage,
  },
  orderCurrent: { order: currentOrderFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
