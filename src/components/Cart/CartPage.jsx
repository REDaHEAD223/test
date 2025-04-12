import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/cart-reducer';
import {
    CartPageWrapper,
    CartContent,
    CartItemsContainer,
    CartItem,
    ItemInfo,
    RemoveButton,
    Total,
    DeliveryForm,
    FormGroup,
    SubmitButton
} from './CartPage.styled';

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
        <CartPageWrapper>
            <CartContent>
                <CartItemsContainer>
                    <h2>Корзина</h2>
                    {props.items.length === 0 ? (
                        <p>Корзина пуста</p>
                    ) : (
                        <>
                            {props.items.map(item => (
                                <CartItem key={item.cartId}>
                                    <img src={item.image} alt={item.title} />
                                    <ItemInfo>
                                        <h3>{item.title}</h3>
                                        <p>{item.price}</p>
                                    </ItemInfo>
                                    <RemoveButton onClick={() => props.removeFromCart(item.cartId)}>
                                        Удалить
                                    </RemoveButton>
                                </CartItem>
                            ))}
                            <Total>
                                <h3>Итого: ${totalSum.toFixed(2)}</h3>
                            </Total>
                        </>
                    )}
                </CartItemsContainer>

                <DeliveryForm>
                    <h2>Адрес доставки</h2>
                    <form>
                        <FormGroup>
                            <label>ФИО:</label>
                            <input
                                type="text"
                                name="name"
                                value={deliveryAddress.name}
                                onChange={handleInputChange}
                                placeholder="Введите ваше ФИО"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Улица:</label>
                            <input
                                type="text"
                                name="street"
                                value={deliveryAddress.street}
                                onChange={handleInputChange}
                                placeholder="Введите улицу"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Город:</label>
                            <input
                                type="text"
                                name="city"
                                value={deliveryAddress.city}
                                onChange={handleInputChange}
                                placeholder="Введите город"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Телефон:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={deliveryAddress.phone}
                                onChange={handleInputChange}
                                placeholder="Введите номер телефона"
                            />
                        </FormGroup>
                        <SubmitButton
                            type="button"
                            onClick={handleSubmitOrder}
                            disabled={props.items.length === 0}
                        >
                            Оформить заказ
                        </SubmitButton>
                    </form>
                </DeliveryForm>
            </CartContent>
        </CartPageWrapper>
    );
};

const mapStateToProps = (state) => ({
    items: state.cart.items
});

export default connect(mapStateToProps, { removeFromCart })(CartPage);
