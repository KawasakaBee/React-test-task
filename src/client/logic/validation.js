// Функция валидации input

export function validation(type, condition, value) {
    if (value.length === 0 || value.length > 20) return [false, 'The string must not be empty and must contain no more than 20 characters'];
    switch (type) {
        case 'Name':
            if(condition === 'More' || condition === 'Less') return [false, 'Name cannot be sorted by comparison results']
            const nameRegExp = /^[A-zА-я]+$/gi;
            return [nameRegExp.test(value), 'The name must contain only letters'];
        case 'Amount':
            const amountRegExp = /^[0-9]+$/gi;
            return [amountRegExp.test(value), 'Amount must contain only numbers'];
        case 'Distance':
            const distanceRegExp = /^[0-9]+$/gi;
            return [distanceRegExp.test(value), 'Distance must contain only numbers'];
        default: return [false, 'Error'];
    }
}
