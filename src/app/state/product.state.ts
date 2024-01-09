

export enum ProductActionsTypes{
  GET_ALL_PRODUCTS="[Product] Get All products",
  GET_SELECTED_PRODUCTS="[Product] Get Selected products",
  GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
  SEARCH_PRODUCTS="[Product] Search products",
  NEW_PRODUCTS="[Product] New products",
  SELECT_PRODUCTS="[Product] Select products",
  EDIT_PRODUCTS="[Product] Edit products",
  DELETE_PRODUCTS="[Product] Delete products",
  PRODUCT_ADDED="[Product] Delete added",
  PRODUCT_UPDATED="[Product] Delete updated",

}

export interface ActionEvent{
  type:ProductActionsTypes,
  payload?:any
}
export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR,
}
export interface AppDataState<T> {
  dataState?: DataStateEnum,
  data?:T,
  errorMessage?:string
}
