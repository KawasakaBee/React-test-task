import { useEffect, useState } from "react";
import { getRows } from '../../store/async-actions/table';
import { useDispatch } from "react-redux";
import { Table } from './Table/Table';
import { Loader } from './Loader/Loader';
import { useSelector } from 'react-redux/es/exports';
import { Pagination } from "./Pagination/Pagination";
import './app.scss';

// Компонент App (основной компонент приложения)

function App() {
    const isLoad = useSelector(store => store.app.isLoading);
    const rows = useSelector(store => store.rows.rows);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);
    const dispatch = useDispatch();

    // Получение данных с БД

    useEffect(() => {
        dispatch(getRows());
    }, [])

    // Пагинация

    const lastRowIndex = currentPage * rowsPerPage;
    const firstRowIndex = lastRowIndex - rowsPerPage;
    let currentRows;
    if (rows.length > 0) {
        currentRows = rows.slice(firstRowIndex, lastRowIndex);
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const toPrevPage = () => setCurrentPage(prev => prev === 1 ? prev : prev - 1);
    const toNextPage = () => setCurrentPage(prev => prev === rowsPerPage - 1 ? prev : prev + 1);

    return (
        <div className="app">
            <div className="app__container">
                <h1 className="app__title">Table for the test task</h1>
                <Table rows={currentRows} isLoad={isLoad} pagination={paginate} />
                <p className="app__page">{rows.length > 0 ? `Page ${currentPage}` : `Not found`}</p>
                {rows.length > 0 && <Pagination rowsPerPage={rowsPerPage} totalRows={rows.length} pagination={paginate} prevPage={toPrevPage} nextPage={toNextPage} />}
                {isLoad && <Loader />}
            </div>
        </div>
    );
}

export default App;
