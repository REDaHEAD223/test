import styled from 'styled-components';

export const CartPageWrapper = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

export const CartContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

export const CartItemsContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const CartItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;

img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 20px;
}
`;

export const ItemInfo = styled.div`
    flex-grow: 1;
`;

export const RemoveButton = styled.button`
    background: #ff4444;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;

&:hover {
    background: #cc0000;
}
`;

export const Total = styled.div`
    margin-top: 20px;
    text-align: right;
    padding: 20px;
    border-top: 2px solid #eee;
`;

export const DeliveryForm = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    background: #27ae60;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;

&:hover {
    background: #219150;
}

&:disabled {
    background: #ccc;
    cursor: not-allowed;
}
`;