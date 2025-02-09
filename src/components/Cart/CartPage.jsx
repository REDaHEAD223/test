import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/cart-reducer';
import classes from './CartPage.module.css';

const CartPage = (props) => {
    const [deliveryAddress, setDeliveryAddress] = useState({
        name: '',
        street: '',
        city: '',
        phone: ''
    });

    const totalSum = props.items.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDeliveryAddress(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmitOrder = () => {
        console.log('Заказанные товары:', props.items);
        console.log('Адрес доставки:', deliveryAddress);
    };

    return (
        <div className={classes.cartPage}>
            <div className={classes.cartContent}>
                <div className={classes.cartItems}>
                    <h2>Корзина</h2>
                    {props.items.length === 0 ? (
                        <p>Корзина пуста</p>
                    ) : (
                        <>
                            {props.items.map(item => (
                                <div key={item.cartId} className={classes.cartItem}>
                                    <img src={item.image} alt={item.title} />
                                    <div className={classes.itemInfo}>
                                        <h3>{item.title}</h3>
                                        <p>{item.price}</p>
                                    </div>
                                    <button 
                                        onClick={() => props.removeFromCart(item.cartId)}
                                        className={classes.removeButton}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            ))}
                            <div className={classes.total}>
                                <h3>Итого: ${totalSum.toFixed(2)}</h3>
                            </div>
                        </>
                    )}
                </div>

                <div className={classes.deliveryForm}>
                    <h2>Адрес доставки</h2>
                    <form>
                        <div className={classes.formGroup}>
                            <label>ФИО:</label>
                            <input
                                type="text"
                                name="name"
                                value={deliveryAddress.name}
                                onChange={handleInputChange}
                                placeholder="Введите ваше ФИО"
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label>Улица:</label>
                            <input
                                type="text"
                                name="street"
                                value={deliveryAddress.street}
                                onChange={handleInputChange}
                                placeholder="Введите улицу"
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label>Город:</label>
                            <input
                                type="text"
                                name="city"
                                value={deliveryAddress.city}
                                onChange={handleInputChange}
                                placeholder="Введите город"
                            />
                        </div>
                        <div className={classes.formGroup}>
                            <label>Телефон:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={deliveryAddress.phone}
                                onChange={handleInputChange}
                                placeholder="Введите номер телефона"
                            />
                        </div>
                        <button 
                            type="button" 
                            onClick={handleSubmitOrder}
                            className={classes.submitButton}
                            disabled={props.items.length === 0}
                        >
                            Оформить заказ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.cart.items
});

export default connect(mapStateToProps, { removeFromCart })(CartPage); 