import axios from "axios";
import apiCall from "../../utils/apiCall";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAIL,
  PRODUCT_SINGLE_GET_REQUEST,
  PRODUCT_SINGLE_GET_SUCCESS,
  PRODUCT_SINGLE_GET_FAIL,
  PRODUCT_SINGLE_SET,
  PRODUCT_PAGES_REQUEST,
  PRODUCT_PAGES_SUCCESS,
  PRODUCT_PAGES_FAIL,
  PRODUCT_COLLECTIONS_REQUEST,
  PRODUCT_COLLECTIONS_SUCCESS,
  PRODUCT_COLLECTIONS_FAIL,
  PRODUCT_COLLECTION_REQUEST,
  PRODUCT_COLLECTION_SUCCESS,
  PRODUCT_COLLECTION_FAIL,
} from "../constants/productConstants";
import { stringify } from "querystring";

export const getProducts = (filters = {}) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_GET_REQUEST });

    const query_string = stringify({ ...filters });

    const { data } = await apiCall.get(`products?${query_string}`);

    dispatch({ type: PRODUCT_GET_SUCCESS, payload: data.data });
    dispatch(getPages(filters));
  } catch (error) {
    dispatch({
      type: PRODUCT_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPages = (filters = {}) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_PAGES_REQUEST });

    const query_string = stringify(filters);

    const { data } = await apiCall.get(`pages?${query_string}`);

    dispatch({ type: PRODUCT_PAGES_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: PRODUCT_PAGES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCollections = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_COLLECTIONS_REQUEST });

    const { data } = await apiCall.get("collections-list");

    dispatch({ type: PRODUCT_COLLECTIONS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: PRODUCT_COLLECTIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSingleCollection = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_COLLECTION_REQUEST });

    const { data } = await apiCall.get(`collection/${id}`);

    dispatch({ type: PRODUCT_COLLECTION_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: PRODUCT_COLLECTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_SINGLE_GET_REQUEST });

    const { data } = await apiCall.get(`product/${id}`);

    const preSorted = ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL", "C"];

    const toSort = data.data.available_sizes;

    toSort.sort(
      (a, b) =>
        preSorted.findIndex((n) => n === a) -
        preSorted.findIndex((n) => n === b)
    );

    console.log(data.data);

    let images = [];

    data.data.gallery.main.map((image) => images.push(image.src));

    dispatch({
      type: PRODUCT_SINGLE_GET_SUCCESS,
      payload: {
        product: data.data,
        images: images,
      },
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SINGLE_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const setCustomSize = (customSize) => async (dispatch, getState) => {
  const {
    productSingleGet: { product },
  } = getState();

  if (product) {
    product.size = "C";
    product.custom = customSize;

    dispatch({ type: PRODUCT_SINGLE_SET, payload: product });
  } else dispatch({ type: PRODUCT_SINGLE_SET, payload: {} });
};

export const listProducts = (keyword = "", page = "") => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(
      `/api/products?keyword=${keyword}&page=${page}`
    );

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/products/${id}`, config);

    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = (product = {}) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/products/", product, config);

    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/products/${product.id}`,
      product,
      config
    );

    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`/api/products/${productId}/review`, review, config);

    dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST });

    const { data } = await axios.get(`/api/products/top`);

    dispatch({ type: PRODUCT_TOP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
