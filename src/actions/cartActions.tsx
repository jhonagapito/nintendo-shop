export const actionTypes = {
    CART_ADD: 'CART_ADD',
    CART_CLEAR: 'CART_CLEAR'
};


//action creators
export const addToCart = (item: System.CartItem) => {
    return {
        type: actionTypes.CART_ADD,
        payload: item
    }
}

export const clearCart = () => {
    return {
        type: actionTypes.CART_CLEAR,
        payload: ''
    }
}


export type CartActions = ReturnType<typeof addToCart> | ReturnType<typeof clearCart>;