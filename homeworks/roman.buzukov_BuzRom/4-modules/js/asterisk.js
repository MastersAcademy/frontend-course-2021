export function addHours(date, hours) {
    return new Date(new Date(date).setHours(date.getHours() + hours)).toLocaleTimeString().split(':').join(' : ');
}

export function subtractHours(date, hours) {
    return new Date(new Date(date).setHours(date.getHours() - hours)).toLocaleTimeString().split(':').join(' : ');
}
