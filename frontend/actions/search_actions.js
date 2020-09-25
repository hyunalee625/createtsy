import * as SearchAPIUtil from "../util/search_api_util";

export const RECEIVE_PRODUCT_SEARCH = "RECEIVE_PRODUCT_SEARCH";

const receiveSearchProducts = products => ({
  type: RECEIVE_PRODUCT_SEARCH,
  products,
});

export const searchProducts = query_string => dispatch =>
  SearchAPIUtil.searchProducts(query_string).then(products =>
    dispatch(receiveSearchProducts(products))
  );
