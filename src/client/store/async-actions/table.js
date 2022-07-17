import axios from "axios";
import { getRowsAction, hideLoader, showLoader } from "../actions/actions";
import {sort} from '../../logic/sort';

// Асинхронный запрос на сервер данных с БД

export const getRows = () => async dispatch => {
    try {
        dispatch(showLoader());
        const data = await axios.get('http://localhost:5000/rows');
        dispatch(getRowsAction(sort(data.data, 'name')));
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(hideLoader());
    }
}
