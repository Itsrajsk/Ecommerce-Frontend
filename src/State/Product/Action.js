import { FIND_PRODUCTS_REQUEST } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const { data } =
      api.get(`/api/products/color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}
        &minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
  } catch (error) {}
};
