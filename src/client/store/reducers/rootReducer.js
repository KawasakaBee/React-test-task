import {composeWithDevTools} from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { rowsReducer } from './rowsReducer';
import { appReducer } from './appReducer';
import thunk from 'redux-thunk';

// Основной редюсер

const rootReducer = combineReducers({
    rows: rowsReducer,
    app: appReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
