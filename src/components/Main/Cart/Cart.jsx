import React, { useState } from 'react';
import classes from './../Main.module.css';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { addToCart } from '../../../redux/cart-reducer';

const Cart = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleAddToCart = () => {
        props.addToCart({
            id: props.id,
            title: props.name,
            price: props.price,
            image: props.image
        });
        closeModal();
    };

    return (
        <div className={classes.productCard}>
            <img src={props.image} className={classes.productTitle} alt={props.name} />
            <h3 className={classes.productTitle}>{props.name}</h3>
            <p className={classes.productPrice}>{props.price}</p>
            <div className={classes.container}>
                <button onClick={handleAddToCart} className={classes.buyButton}>Купить</button>
                <button onClick={openModal} className={classes.moreButton}>Подробнее</button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={classes.modalContent}
                overlayClassName={classes.modalOverlay}
            >
                <button onClick={closeModal} className={classes.modalClose}>✖</button>
                <img src={props.image} className={classes.modalImage} alt={props.name} />
                <h2 className={classes.modalTitle}>{props.name}</h2>
                <p className={classes.modalPrice}>{props.price}</p>
                <p className={classes.modalDescription}>{props.description}</p>
                <button onClick={handleAddToCart} className={classes.addToCartButton}>
                    Добавить в корзину
                </button>
            </Modal>
        </div>
    );
};

export default connect(null, { addToCart })(Cart);
