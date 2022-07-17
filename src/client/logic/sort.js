// Функция сортировки

export function sort(data, type) {
    switch (type) {
        case 'name': return [...data].sort((a,b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name ) return 1;
            return 0;
        });
        case 'amount': return [...data].sort((a,b) => a.amount - b.amount);
        case 'distance': return [...data].sort((a,b) => a.distance - b.distance);
        default: return data;
    }
}
