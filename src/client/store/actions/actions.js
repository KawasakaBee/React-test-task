export const GET_ROWS = 'GET_ROWS';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const FILTRED_ON = 'FILTRED_ON';
export const FILTRED_OFF = 'FILTRED_OFF';

// Action creators

export const getRowsAction = (rows) => ({type: GET_ROWS, payload: rows});
export const showLoader = () => ({type: SHOW_LOADER});
export const hideLoader = () => ({type: HIDE_LOADER});
export const filtredOn = () => ({type: FILTRED_ON});
export const filtredOff = () => ({type: FILTRED_OFF});
