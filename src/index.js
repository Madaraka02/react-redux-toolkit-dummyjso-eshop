import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from "react-router-dom";
import CookieConsent from 'react-cookie-consent';
import { getTotals } from './features/cart/cartSlice';

store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Provider store={store}>

    <App />
    </Provider>

    <CookieConsent
            location="bottom"
            buttonText="I Understand"
            cookieName="vics"
            style={{ background: "darkgray", fontSize: "13px", color: 'black', fontWeight: '600', opacity: '0.8' }}
            buttonStyle={{ color: "black", fontSize: "13px", borderRadius: '5px', background: '#BF3054', fontWeight: '600' }}
            expires={150}
        >
            We use cookies to enhance the user experience
        </CookieConsent>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
