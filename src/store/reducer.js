import {
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_ERROR,
    FETCH_ORDERS_ERROR,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS
} from "./actionTypes";

const initialState = {
    menu: {},
    error: null,
    orders: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MENU_REQUEST:
            return {...state};
        case FETCH_MENU_SUCCESS:
            return {...state, menu: action.value};
        case FETCH_MENU_ERROR:
            return {...state, error: action.value};
        case FETCH_ORDERS_REQUEST:
            return {...state};
        case FETCH_ORDERS_SUCCESS:
            return {...state, orders: action.value};
        case FETCH_ORDERS_ERROR:
            return {...state, error: action.value};
        default:
            return state;
    }
};

export default reducer;