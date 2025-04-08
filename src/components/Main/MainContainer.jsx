import React, {useEffect} from 'react';
import Main from "./Main";
import {useDispatch, useSelector} from "react-redux";
import {fetchCartData} from "../../redux/main-reducer";

const MainContainer = () => {

    const dispatch = useDispatch();

    const cartData = useSelector(state => state.mainPage.cartData);
    const isLoading = useSelector(state => state.mainPage.isLoading);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    return <Main cartData={cartData} isLoading={isLoading} />;
};


export default MainContainer;
