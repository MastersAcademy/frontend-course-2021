let timeout;

export const cityTime = (value) => {
    let time;
    if (!value) {
        clearTimeout(timeout);
        time = new Date().toLocaleTimeString().split(':').join(' : ');
    } else {
        clearTimeout(timeout);
        const timeZone = new Date().toLocaleString('en-US', { timeZone: value });
        const date = new Date(timeZone);
        time = new Date(new Date(date)).toLocaleTimeString().split(':').join(' : ');
    }
    document.querySelector('[data-time-state]').textContent = time;
    timeout = setTimeout(() => cityTime(value), 1000);
};

cityTime();
