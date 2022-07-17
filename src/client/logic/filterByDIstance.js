// Функция фильтрации по расстоянию

export function filterByDistance(rows, condition, value) {
    switch (condition) {
        case 'Equal': return [...rows].filter(row => row.distance.toString() === value);
        case 'Contains': return [...rows].filter(row => row.distance.toString().includes(value));
        case 'More': return [...rows].filter(row => row.distance > parseInt(value));
        case 'Less': return [...rows].filter(row => row.distance < parseInt(value));
        default: return rows;
    }
}
