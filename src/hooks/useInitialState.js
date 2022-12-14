import { useState } from "react";

const initialState = {
    cart: [],
};

const useInitialState = () => {

    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };
    const removeFromCart = (payload) => {
        const newCart = [...state.cart];
        newCart.splice(payload, 1);
        setState({
            ...state,
            cart: newCart,
        });
    };


    return {
        state,
        addToCart,
        removeFromCart
    }
};

export { useInitialState };
