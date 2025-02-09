import React from 'react';
import classes from './Main.module.css';
import Cart from "./Cart/Cart";

const Main = (props) => {

    if (props.isLoading) {
        return <div className={classes.loading}>Loading...</div>; // Показываем индикатор загрузки
    }

    let cartElements = props.mainPage.map(cart => <Cart name={cart.title} id={cart.id} price={cart.price} image={cart.image} description={cart.description} key={cart.id} />);

    return (
        <div className={classes.main}>
            {cartElements}
                </div>
            )}

export default Main;