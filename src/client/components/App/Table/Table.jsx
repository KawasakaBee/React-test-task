import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Row } from './Row/Row';
import { sort } from '../../../logic/sort';
import { useDispatch } from "react-redux";
import { filtredOn, getRowsAction, filtredOff } from '../../../store/actions/actions';
import { getRows } from '../../../store/async-actions/table';
import { rootFilter } from '../../../logic/rootFilter';
import { Error } from './Error/Error';
import './table.scss';

// Компонент Table (сама таблица)

export const Table = ({ rows, isLoad, pagination }) => {
    const [color, setColor] = useState('name');
    const [typeValue, setTypeValue] = useState('Name');
    const [conditionValue, setConditionValue] = useState('Equal');
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const fullRows = useSelector(store => store.rows.rows);
    const isFiltred = useSelector(store => store.app.isFiltred);

    // Хэндлер для сортировки

    function handleClick(type) {
        dispatch(getRowsAction(sort(fullRows, type)));
        setColor(type);
    }

    // Хэндлер для фильтрации

    function filterHandler() {
        const [filteredArray, errorMessage] = rootFilter(fullRows, typeValue, conditionValue, value);
        pagination(1);
        setError(errorMessage);
        setValue('');
        dispatch(getRowsAction(filteredArray));
        if (errorMessage === '') dispatch(filtredOn());
    }

    // Хэндлер для отмены фильтрации

    function cancelHandler() {
        setTypeValue('Name');
        setConditionValue('Equal');
        setColor('name');
        setValue('');
        setError('');
        dispatch(getRows());
        dispatch(filtredOff());
    }

    const style = { color: 'blue' };

    return (
        <>
            <table className="table">
                <thead className='table__head'>

                    {/* Заголовки таблицы */}


                    <tr>
                        <th className='table__title'>Date</th>
                        <th className='table__title' style={color === 'name' ? style : {}} onClick={() => handleClick('name')}>Name</th>
                        <th className='table__title' style={color === 'amount' ? style : {}} onClick={() => handleClick('amount')}>Amount</th>
                        <th className='table__title' style={color === 'distance' ? style : {}} onClick={() => handleClick('distance')}>Distance</th>
                    </tr>

                    {/* Фильтрация таблицы */}

                    <tr>
                        <th className='table__filter'>
                            <select className='table__select' value={typeValue} onChange={(event => setTypeValue(event.target.value))} disabled={isFiltred}>
                                <option>Name</option>
                                <option>Amount</option>
                                <option>Distance</option>
                            </select>
                        </th>
                        <th className='table__filter'>
                            <select className='table__select' value={conditionValue} onChange={(event => setConditionValue(event.target.value))} disabled={isFiltred}>
                                <option>Equal</option>
                                <option>Contains</option>
                                <option>More</option>
                                <option>Less</option>
                            </select>
                        </th>
                        <th className='table__filter'>
                            <input className='table__input' type="text" value={value} onChange={event => setValue(event.target.value)} disabled={isFiltred} placeholder='Enter value' />
                        </th>
                        <th className='table__filter'>
                            <button className='table__button button-filter' onClick={() => filterHandler()} disabled={isFiltred}>Filter</button>
                            <button className='table__button' onClick={() => cancelHandler()} disabled={!isFiltred}>Cancel</button>
                        </th>
                    </tr>
                </thead>

                {/* Строки таблицы */}

                <tbody>
                    {!isLoad && rows && rows.map(row =>
                        <Row
                            date={row.date}
                            name={row.name}
                            amount={row.amount}
                            distance={row.distance}
                            key={Math.random()}
                        />
                    )}
                </tbody>
            </table >

            {/* Ошибка при валидации */}

            {error !== '' && <Error errorMessage={error} />}
        </>
    )
}
