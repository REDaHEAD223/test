import React from 'react';
import classes from '../Header/Header.module.css';
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to="/" className={classes.link}>
                    <img
                        src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/gta-onlinebusinesseschop-shop/95832aad116305cc48a9399c3d0c6095f901bfe0.png"
                        alt="Лого"
                    />
                    <span className={classes.shopName}>CHOP-SHOP</span>
                </Link>
            </div>
            <a href="/cart" className={classes.cart} target="_blank" rel="noopener noreferrer">
                <FaShoppingCart />
                {props.cartItemsCount > 0 && (
                    <span className={classes.cartCount}>{props.cartItemsCount}</span>
                )}
            </a>
        </header>
    );
}

export default Header;