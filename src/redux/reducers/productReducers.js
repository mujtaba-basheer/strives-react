import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_DETAILS_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
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

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productGetReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_GET_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_GET_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        // pages: action.payload.pages,
        // page: action.payload.page,
      };
    case PRODUCT_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productPagesReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_PAGES_REQUEST:
      return { pages: null };
    case PRODUCT_PAGES_SUCCESS:
      return { pages: action.payload };
    case PRODUCT_PAGES_FAIL:
      return { pages: 1 };
    default:
      return state;
  }
};

export const productSingleGetReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_SINGLE_SET:
      return { loading: false, product: action.payload };
    case PRODUCT_SINGLE_GET_REQUEST:
      return { loading: true, product: {} };
    case PRODUCT_SINGLE_GET_SUCCESS:
      return {
        loading: false,
        product: action.payload.product,
        productImages: action.payload.images,
      };
    case PRODUCT_SINGLE_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCollectionsReducer = (
  state = { collections: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_COLLECTIONS_REQUEST:
      return { loading: true, collections: [] };
    case PRODUCT_COLLECTIONS_SUCCESS:
      return {
        loading: false,
        collections: action.payload,
      };
    case PRODUCT_COLLECTIONS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCollectionReducer = (
  state = { collection: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_COLLECTION_REQUEST:
      return { loading: true, collection: {} };
    case PRODUCT_COLLECTION_SUCCESS:
      return {
        loading: false,
        collection: action.payload,
      };
    case PRODUCT_COLLECTION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_DETAILS_RESET:
      return { product: { reviews: [] } };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productupdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
