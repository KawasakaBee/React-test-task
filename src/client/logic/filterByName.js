// Функция фильтрации по названию

export function filterByName(rows, condition, value) {
    switch (condition) {
        case 'Equal': return [...rows].filter(row => row.name === value);
        case 'Contains': return [...rows].filter(row => row.name.includes(value));
        default: return rows;
    }
}
