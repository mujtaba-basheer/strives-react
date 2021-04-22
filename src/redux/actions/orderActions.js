import apiCall from "../../utils/apiCall";
import { CART_CLEAR, CART_SET } from "../constants/cartConstants";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_COUPON_REQUEST,
  ORDER_COUPON_SUCCESS,
  ORDER_COUPON_FAIL,
  ORDER_COUPON_RESET,
} from "../constants/orderConstants";

export const checkCoupon = (code, amount) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_COUPON_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = { headers: { "Content-Type": "application/json" } };

    if (userInfo) config.headers["Authorization"] = `Bearer ${userInfo.token}`;

    const { data } = await apiCall.post(
      "check-coupon",
      { coupon_code: code, amount },
      config
    );

    dispatch({ type: ORDER_COUPON_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: ORDER_COUPON_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetCoupon = () => async (dispatch) => {
  dispatch({ type: ORDER_COUPON_RESET });
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await apiCall.get(`/api/orders/${id}`, config);
    console.log({ order: data });

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const placeOrder = (order, isExpress = false) => async (
  dispatch,
  getState
) => {
  dispatch({ type: ORDER_CREATE_REQUEST });

  const {
    userLogin: { userInfo },
    orderPay,
  } = getState();
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    if (userInfo) config.headers["Authorization"] = `Bearer ${userInfo.token}`;
    if (order.paymentMethod === "rzp") order.paymentDetails = orderPay.order;

    await apiCall.post("order", order, config);

    dispatch({ type: ORDER_CREATE_SUCCESS });
    if (isExpress) dispatch({ type: CART_SET, payload: [] });
    window.location.href(window.location.host + "/thankyou");
  } catch (error) {
    console.error(error);
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const payOrder = (amount, order = {}, isExpress = false) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });

    const {
      userLogin: { userInfo },
      userDetails,
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (userInfo) config.headers["Authorization"] = `Bearer ${userInfo.token}`;

    // getting credentials
    const {
      data: { key_id },
    } = await apiCall.get("credentials");

    // getting razorpay order
    const {
      data: {
        order: { id: order_id, receipt, amount: amountToPay },
      },
    } = await apiCall.post("razorpay-order", { amount }, config);

    const handlerFunction = (response) => {
      if (response.error) {
        console.error(response.error);
        dispatch({ type: ORDER_PAY_FAIL, payload: response.error.description });
      } else {
        console.log(response);
        dispatch({
          type: ORDER_PAY_SUCCESS,
          payload: { ...response, receipt },
        });
        dispatch(placeOrder(order, isExpress));
      }
    };

    // payment options
    const options = {
      key: key_id,
      amount: amountToPay,
      currency: "INR",
      name: "The Strives",
      description: "Pay Order",
      payment_capture: "1",
      image:
        "https://strives.s3.ap-south-1.amazonaws.com/assets/99605b7f-5b86-4c95-a3bd-f74704579ebb.png",
      order_id,
      handler: handlerFunction,
      theme: {
        color: "#f8e6e5",
      },
    };
    if (userDetails.user) {
      const { name, email, phone: contact } = userDetails.user;
      options["prefill"] = { name, email, contact };
    }

    const rzp = new window.Razorpay(options);
    rzp.open();

    dispatch({ type: ORDER_PAY_SUCCESS, payload: true });
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: true,
    });
  }
};

export const deliverOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELIVER_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await apiCall.put(
      `/api/orders/${orderId}/deliver`,
      {},
      config
    );

    dispatch({ type: ORDER_DELIVER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_DELIVER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMyOrders = () => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {},
  };

  try {
    if (userInfo) config.headers["Authorization"] = `Bearer ${userInfo.token}`;
    dispatch({ type: ORDER_LIST_MY_REQUEST });

    const { data } = await apiCall.get("orders", config);

    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await apiCall.get(`/api/orders`, config);

    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
