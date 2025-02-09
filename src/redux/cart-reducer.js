const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_CART = "UPDATE_CART";

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const newItem = {
                ...action.item,
                cartId: Date.now()
            };
            const newItems = [...state.items, newItem];
            localStorage.setItem('cartItems', JSON.stringify(newItems));
            return {
                ...state,
                items: newItems
            };
        }
        case REMOVE_FROM_CART: {
            const newItems = state.items.filter(item => item.cartId !== action.itemId);
            localStorage.setItem('cartItems', JSON.stringify(newItems));
            return {
                ...state,
                items: newItems
            };
        }
        case UPDATE_CART: {
            return {
                ...state,
                items: action.items
            };
        }
        default:
            return state;
    }
}

export const addToCart = (item) => ({type: ADD_TO_CART, item});
export const removeFromCart = (itemId) => ({type: REMOVE_FROM_CART, itemId});
export const updateCart = (items) => ({type: UPDATE_CART, items});

export default cartReducer; 