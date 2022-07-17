import React from 'react';
import './row.scss';

// Компонент Row (коспонент строки данных)

export const Row = ({ date, name, amount, distance }) => {
    return (
        <tr className='row'>
            <td className='row__cell'>{date}</td>
            <td className='row__cell'>{name}</td>
            <td className='row__cell'>{amount}</td>
            <td className='row__cell'>{distance}</td>
        </tr>
    )
}
