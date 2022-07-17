import React from 'react';
import './error.scss';

// Компонент Error (ошибка при валидации input)

export const Error = ({ errorMessage }) => {
    return (
        <div className='error'>
            <p className="error__message">{errorMessage}</p>
        </div>
    )
}
