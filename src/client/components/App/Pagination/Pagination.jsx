import React from 'react';
import './pagination.scss';

// Компонент Pagination (страницы и стрелки для переключения страниц)

export const Pagination = ({ rowsPerPage, totalRows, pagination, prevPage, nextPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <ul className="pagination__list">
                <li>
                    <button className="pagination__button" onClick={() => prevPage()}>{'<'}</button>
                </li>
                {pageNumbers.map(page => (
                    <li className="pagination__item" key={page}>
                        <button className="pagination__button" type='button' onClick={() => pagination(page)}>{page}</button>
                    </li>
                ))}
                <li>
                    <button className="pagination__button" onClick={() => nextPage()}>{'>'}</button>
                </li>
            </ul>
        </div>
    )
}
