import { Provider } from 'react-redux';
import { store } from './client/store/reducers/rootReducer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './client/components/App/App';
import './client/styles/normalize.scss';

// Отрисовка приложения

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
)
