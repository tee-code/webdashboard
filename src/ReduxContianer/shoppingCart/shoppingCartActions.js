import {ADD_TO_CART, UPDATE_CART} from "../constants/shoppingCartActions"
export const addToCart = (dispatch, data) => {

    return dispatch({type:ADD_TO_CART, payload:data})
}

export const updateCart = (dispatch, data) => {
    return dispatch({type:UPDATE_CART, payload:data})
}