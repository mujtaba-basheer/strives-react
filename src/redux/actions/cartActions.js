import apiCall from "../../utils/apiCall";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_SHIPPING_ADDRESS_FAIL,
  CART_GET_REQUEST,
  CART_GET_SUCCESS,
  CART_SET,
  CART_GET_FAIL,
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAIL,
  CART_REMOVE_REQUEST,
  CART_REMOVE_SUCCESS,
  CART_REMOVE_FAIL,
  CART_QTY_UPDATE_REQUEST,
  CART_QTY_UPDATE_SUCCESS,
  CART_QTY_UPDATE_FAIL,
  FAV_GET_SUCCESS,
  FAV_ADD_REQUEST,
  FAV_ADD_SUCCESS,
  FAV_SET,
  FAV_ADD_FAIL,
  FAV_REMOVE_REQUEST,
  FAV_REMOVE_SUCCESS,
  FAV_REMOVE_FAIL,
} from "../constants/cartConstants";

export const getFav = () => async (dispatch, getState) => {
  dispatch({ type: CART_GET_REQUEST });
  const {
    userLogin: { userInfo },
  } = getState();

  try {
    if (userInfo) {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await apiCall.get("favourites", config);
      dispatch({ type: FAV_GET_SUCCESS });
      dispatch({ type: FAV_SET, payload: data.data });
    } else {
      const { fav } = getState();
      dispatch({
        type: FAV_SET,
        payload: fav && fav.favItems ? fav.favItems : [],
      });
    }
  } catch (error) {
    dispatch({
      type: CART_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addItemToFav = (product) => async (dispatch, getState) => {
  dispatch({ type: FAV_ADD_REQUEST });
  const {
    userLogin: { userInfo },
  } = getState();

  try {
    if (userInfo) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await apiCall.put(`favourites-product/${product._id}`, {}, config);
    }

    const { fav } = getState();
    fav.favItems.push(product);

    dispatch({ type: FAV_ADD_SUCCESS });
    dispatch({ type: FAV_SET, payload: fav.favItems });
  } catch (error) {
    dispatch({
      type: FAV_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeItemFromFav = (id) => async (dispatch, getState) => {
  dispatch({ type: FAV_REMOVE_REQUEST });
  const {
    userLogin: { userInfo },
  } = getState();

  try {
    if (userInfo) {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await apiCall.delete(`favourites-product/${id}`, config);
    }

    const {
      fav: { favItems },
    } = getState();
    const updatedItems = favItems.filter(({ _id }) => _id !== id);

    dispatch({ type: FAV_REMOVE_SUCCESS });
    dispatch({ type: FAV_SET, payload: updatedItems });
  } catch (error) {
    dispatch({
      type: FAV_REMOVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCart = () => async (dispatch, getState) => {
  dispatch({ type: CART_GET_REQUEST });
  const {
    userLogin: { userInfo },
  } = getState();

  try {
    if (userInfo) {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await apiCall.get("cart", config);
      dispatch({ type: CART_GET_SUCCESS });
      dispatch({ type: CART_SET, payload: data.data });
    } else {
      const { cart } = getState();
      dispatch({
        type: CART_SET,
        payload: cart && cart.cartItems ? cart.cartItems : [],
      });
    }
  } catch (error) {
    dispatch({
      type: CART_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addItemToCart = (product, qty = 1, size) => async (
  dispatch,
  getState
) => {
  dispatch({ type: CART_ADD_REQUEST });
  const {
    userLogin: { userInfo },
  } = getState();

  try {
    if (userInfo) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await apiCall.put(
        "cart-product",
        { productId: product["_id"], quantity: qty, size },
        config
      );
    }

    const { cart } = getState();
    cart.cartItems.push({ ...product, quantity: qty, size });

    dispatch({ type: CART_ADD_SUCCESS });
    dispatch({ type: CART_SET, payload: cart.cartItems });
  } catch (error) {
    dispatch({
      type: CART_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeItemFromCart = (id, size) => async (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_REQUEST });
  const {
    userLogin: { userInfo },
  } = getState();

  try {
    if (userInfo) {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await apiCall.delete(`cart-product/${id}`, config);
    }

    const {
      cart: { cartItems },
    } = getState();
    const updatedItems = cartItems.filter(
      ({ _id, size: product_size }) => !(_id === id && product_size === size)
    );

    dispatch({ type: CART_REMOVE_SUCCESS });
    dispatch({ type: CART_SET, payload: updatedItems });
  } catch (error) {
    dispatch({
      type: CART_REMOVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateItemQty = (id, size, qty = 1) => async (
  dispatch,
  getState
) => {
  dispatch({ type: CART_QTY_UPDATE_REQUEST });
  const {
    userLogin: { userInfo },
  } = getState();

  try {
    const {
      cart: { cartItems },
    } = getState();
    const updatedItems = cartItems.map((item) => {
      if (item["_id"] === id && item["size"] === size) item["quantity"] = qty;
      return item;
    });
    dispatch({ type: CART_SET, payload: updatedItems });

    if (userInfo) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await apiCall.put("cart", updatedItems, config);
    }

    dispatch({ type: CART_QTY_UPDATE_SUCCESS });
    dispatch({ type: CART_SET, payload: updatedItems });
  } catch (error) {
    dispatch({
      type: CART_QTY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateItemSize = (id, size, prev_size, prev_qty) => async (
  dispatch,
  getState
) => {
  dispatch({ type: CART_QTY_UPDATE_REQUEST });
  const {
    userLogin: { userInfo },
  } = getState();

  try {
    const {
      cart: { cartItems },
    } = getState();
    const itemIndex = cartItems.findIndex(
      ({ _id, size: product_size }) => _id === id && product_size === size
    );
    if (itemIndex > -1) {
      cartItems[itemIndex]["quantity"] += prev_qty;
      cartItems.splice(itemIndex, 1);
    } else {
      for (let item of cartItems)
        if (item["_id"] === id && item["size"] === prev_size)
          item["size"] = size;
    }
    dispatch({ type: CART_SET, payload: cartItems });

    if (userInfo) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await apiCall.put("cart", cartItems, config);
    }

    dispatch({ type: CART_QTY_UPDATE_SUCCESS });
    dispatch({ type: CART_SET, payload: cartItems });
  } catch (error) {
    dispatch({
      type: CART_QTY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await apiCall.get(`/api/products/${id}`);
  const { _id, name, image, price, countInStock } = data;

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: _id,
      name,
      image,
      price,
      countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const getShippingAddress = (data) => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    const {
      data: { data },
    } = await apiCall.get("get-address", config);

    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.error(error);
    dispatch({ type: CART_SHIPPING_ADDRESS_FAIL });
  }
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
