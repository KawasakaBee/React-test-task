import {filterByAmount} from './filterByAmount';
import {filterByDistance} from './filterByDIstance';
import {filterByName} from './filterByName';
import { validation } from './validation';

// Функция фильтрации (разбил на отдельные функции)

export function rootFilter(rows, type, condition, value) {
    value = value.trim();
    const [isValid, errorMessage] = validation(type, condition, value);
    if (!isValid) {
        return [rows, errorMessage];
    };
    switch (type) {
        case 'Name': return [filterByName(rows, condition, value), ''];
        case 'Amount': return [filterByAmount(rows, condition, value), ''];
        case 'Distance': return [filterByDistance(rows, condition, value), ''];
        default: return [rows, 'Error'];
    }
}
