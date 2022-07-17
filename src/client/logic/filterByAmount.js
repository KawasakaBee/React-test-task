// Функция фильтрации по количеству

export function filterByAmount(rows, condition, value) {
    switch (condition) {
        case 'Equal': return [...rows].filter(row => row.amount.toString() === value);
        case 'Contains': return [...rows].filter(row => row.amount.toString().includes(value));
        case 'More': return [...rows].filter(row => row.amount > parseInt(value));
        case 'Less': return [...rows].filter(row => row.amount < parseInt(value));
        default: return rows;
    }
}
