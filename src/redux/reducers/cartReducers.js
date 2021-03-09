import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_SHIPPING_ADDRESS_FAIL,
  CART_GET_REQUEST,
  CART_GET_SUCCESS,
  CART_GET_FAIL,
  CART_SET,
  CART_CLEAR,
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAIL,
  CART_REMOVE_REQUEST,
  CART_REMOVE_SUCCESS,
  CART_REMOVE_FAIL,
  CART_QTY_UPDATE_REQUEST,
  CART_QTY_UPDATE_SUCCESS,
  CART_QTY_UPDATE_FAIL,
  FAV_GET_REQUEST,
  FAV_GET_SUCCESS,
  FAV_GET_FAIL,
  FAV_ADD_REQUEST,
  FAV_ADD_SUCCESS,
  FAV_ADD_FAIL,
  FAV_REMOVE_FAIL,
  FAV_REMOVE_SUCCESS,
  FAV_REMOVE_REQUEST,
  FAV_SET,
  FAV_CLEAR,
  FAV_ADD_ITEM,
  FAV_REMOVE_ITEM,
} from "../constants/cartConstants";

export const favGetReducer = (state = {}, action) => {
  switch (action.type) {
    case FAV_GET_REQUEST:
      return { ...state, loading: true };
    case FAV_GET_SUCCESS:
      return { loading: false, success: true, error: null };
    case FAV_GET_FAIL:
      return { loading: false, success: null, error: action.payload };
    default:
      return state;
  }
};

export const favAddReducer = (state = {}, action) => {
  switch (action.type) {
    case FAV_ADD_REQUEST:
      return { ...state, loading: true };
    case FAV_ADD_SUCCESS:
      return { loading: false, success: true, error: null };
    case FAV_ADD_FAIL:
      return { loading: false, success: null, error: action.payload };
    default:
      return state;
  }
};

export const favRemoveReducer = (state = {}, action) => {
  switch (action.type) {
    case FAV_REMOVE_REQUEST:
      return { ...state, loading: true };
    case FAV_REMOVE_SUCCESS:
      return { loading: false, success: true, error: null };
    case FAV_REMOVE_FAIL:
      return { loading: false, success: null, error: action.payload };
    default:
      return state;
  }
};

export const cartGetReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_GET_REQUEST:
      return { ...state, loading: true };
    case CART_GET_SUCCESS:
      return { loading: false, success: true, error: null };
    case CART_GET_FAIL:
      return { loading: false, success: null, error: action.payload };
    default:
      return state;
  }
};

export const cartAddReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_ADD_REQUEST:
      return { ...state, loading: true };
    case CART_ADD_SUCCESS:
      return { loading: false, success: true, error: null };
    case CART_ADD_FAIL:
      return { loading: false, success: null, error: action.payload };
    default:
      return state;
  }
};

export const cartRemoveReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_REMOVE_REQUEST:
      return { ...state, loading: true };
    case CART_REMOVE_SUCCESS:
      return { loading: false, success: true, error: null };
    case CART_REMOVE_FAIL:
      return { loading: false, success: null, error: action.payload };
    default:
      return state;
  }
};

export const cartQtyUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_QTY_UPDATE_REQUEST:
      return { ...state, loading: true };
    case CART_QTY_UPDATE_SUCCESS:
      return { loading: false, success: true, error: null };
    case CART_QTY_UPDATE_FAIL:
      return { loading: false, success: null, error: action.payload };
    default:
      return state;
  }
};

export const favReducer = (state = { favItems: [] }, action) => {
  switch (action.type) {
    case FAV_SET:
      return { favItems: action.payload };
    case FAV_CLEAR:
      return { favItems: null };
    case FAV_ADD_ITEM:
      const item = action.payload;
      const existItem = state.favItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          favItems: state.favItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, favItems: [...state.favItems, item] };
      }
    case FAV_REMOVE_ITEM:
      return {
        ...state,
        favItems: state.favItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_SET:
      return { cartItems: action.payload };
    case CART_CLEAR:
      return { cartItems: null };
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SHIPPING_ADDRESS_FAIL:
      return {
        ...state,
        shippingAddress: null,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        pamentMethod: action.payload,
      };
    default:
      return state;
  }
};
