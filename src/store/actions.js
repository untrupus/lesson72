import {
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_ERROR,
    FETCH_ORDERS_ERROR,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS
} from "./actionTypes";
import axiosOrder from "../axiosOrder";

const fetchMenuRequest = () => {
    return {type: FETCH_MENU_REQUEST};
};
const fetchMenuSuccess = value => {
    return {type: FETCH_MENU_SUCCESS, value};
};
const fetchMenuError = error => {
    return {type: FETCH_MENU_ERROR, error};
};

export const fetchMenu = () => {
    return async dispatch => {
        dispatch(fetchMenuRequest());
        try {
            const response = await axiosOrder.get("pizza.json");
            dispatch(fetchMenuSuccess(response.data));
        } catch (e) {
            dispatch(fetchMenuError(e));
        }
    };
};

const fetchOrdersRequest = () => {
    return {type: FETCH_ORDERS_REQUEST};
};
const fetchOrdersSuccess = value => {
    return {type: FETCH_ORDERS_SUCCESS, value};
};
const fetchOrdersError = error => {
    return {type: FETCH_ORDERS_ERROR, error};
};

export const fetchOrders = () => {
    return async dispatch => {
        dispatch(fetchOrdersRequest());
        try {
            const response = await axiosOrder.get("orders.json");
            dispatch(fetchOrdersSuccess(response.data));
        } catch (e) {
            dispatch(fetchOrdersError(e));
        }
    };
};