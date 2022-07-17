import {SHOW_LOADER, HIDE_LOADER, FILTRED_ON, FILTRED_OFF} from '../actions/actions';

const inisialState = {
    isLoading: true,
    isFiltred: false
}

// Редюсер для Loader и Filter

export function appReducer(state = inisialState, action)  {
    switch (action.type) {
        case SHOW_LOADER: return {...state, isLoading: true};
        case HIDE_LOADER: return {...state, isLoading: false};
        case FILTRED_ON: return {...state, isFiltred: true};
        case FILTRED_OFF: return {...state, isFiltred: false};
        default: return state;
    }
}
