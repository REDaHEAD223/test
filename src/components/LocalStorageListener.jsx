import { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../redux/cart-reducer';

const LocalStorageListener = ({ updateCart }) => {
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'cartItems') {
                const newItems = JSON.parse(e.newValue || '[]');
                updateCart(newItems);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        
        // Инициализация при загрузке
        const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
        updateCart(items);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [updateCart]);

    return null;
};

export default connect(null, { updateCart })(LocalStorageListener); 