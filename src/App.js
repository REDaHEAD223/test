import React from 'react';
import classes from './App.module.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import MainContainer from "./components/Main/MainContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import CartPage from './components/Cart/CartPage';
import LocalStorageListener from './components/LocalStorageListener';

const App = (props) => {
    return (
        <BrowserRouter>
            <LocalStorageListener />
            <div className={classes.appWrapper}>
                <header className={classes.header}>
                    <HeaderContainer />
                </header>
                <main className={classes.appWrapperContent}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/store" />} />
                        <Route path="/store" element={<MainContainer />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </main>
                <FooterContainer />
            </div>
        </BrowserRouter>
    );
}

export default App;