export function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
    return date.toLocaleTimeString().split(':').join(' : ');
}

export function subtractHours(date, hours) {
    date.setHours(date.getHours() - hours);
    return date.toLocaleTimeString().split(':').join(' : ');
}
