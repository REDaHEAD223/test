import React from 'react';
import Header from "./Header";
import {useSelector} from "react-redux";

const HeaderContainer = () => {
    const cartItemsCount = useSelector(state => state.cart.items.length);

    return <Header cartItemsCount={cartItemsCount} />;
};

export default HeaderContainer;
