const SET_CART_DATA = "SET_CART_DATA";
const SET_LOADING = "SET_LOADING";

let initialState = {
    cartData: [],
    isLoading: false
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_DATA: {
        return {
            ...state,
            cartData: action.cartData,
            isLoading: false
        }}
        case SET_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        default:
            return state;
    }
}

export const setCartData = (cartData) => ({
    type: SET_CART_DATA,
    cartData,
});

export const setLoading = () => ({
    type: SET_LOADING,
});

// Санька

export const fetchCartData = () => {
    return async (dispatch) => {
        dispatch(setLoading());
        const cartData = [
            { id: 1, title: "Product 1", price: "$20", image: "https://i.etsystatic.com/51526576/r/il/d6e6c6/5961524290/il_570xN.5961524290_3dy0.jpg", description: "Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль.." },
            { id: 2, title: "Product 2", price: "$25", image: "https://wallpapers.com/images/hd/gta-background-girl-blowing-a-kiss-loading-screen-oabuh4zjid48ivxg.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et consequat dui. Proin fermentum sodales nisi ac consectetur. Fusce venenatis." },
            { id: 3, title: "Product 3", price: "$30", image: "https://imagineme.ai/wp-content/uploads/2024/01/035fbac3-2-1-lilycollins-woman-in-the-style-of-a-Grand-Theft-Auto-loading-screen-GTA-style-ar-341x512.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique velit nulla, vitae fringilla nisl." },
            { id: 4, title: "Product 4", price: "$35", image: "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/pcq/media/media_files/2024/12/07/7AepGdTiXcUncSCJue12.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper a leo eget tincidunt. Aenean at sapien sodales, ultricies lacus ut, consectetur lacus. Aliquam faucibus." },
            { id: 5, title: "Product 5", price: "$20", image: "https://i.etsystatic.com/51526576/r/il/d6e6c6/5961524290/il_570xN.5961524290_3dy0.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, magna ac molestie sollicitudin, dui." },
            { id: 6, title: "Product 6", price: "$25", image: "https://wallpapers.com/images/hd/gta-background-girl-blowing-a-kiss-loading-screen-oabuh4zjid48ivxg.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, magna ac molestie sollicitudin, dui." },
            { id: 7, title: "Product 7", price: "$30", image: "https://imagineme.ai/wp-content/uploads/2024/01/035fbac3-2-1-lilycollins-woman-in-the-style-of-a-Grand-Theft-Auto-loading-screen-GTA-style-ar-341x512.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, magna ac molestie sollicitudin, dui." },
            { id: 8, title: "Product 8", price: "$35", image: "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/pcq/media/media_files/2024/12/07/7AepGdTiXcUncSCJue12.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, magna ac molestie sollicitudin, dui." }
        ];
        setTimeout(() => {
            dispatch(setCartData(cartData));
        }, 1000);
    };
};

export default mainReducer;
