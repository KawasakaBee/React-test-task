import { GET_ROWS} from "../actions/actions";

const initialState = {
    rows: {}
}

// Редюсер для строк таблицы

export function rowsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ROWS: return {...state, rows: action.payload};
        default: return state;
    }
}
