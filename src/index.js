import './index.css';
import store from './redux/redux-store';
import React from 'react';
import App from './App';
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
