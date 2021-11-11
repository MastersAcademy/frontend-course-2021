export class Time {
    getFridaysOfMonth(date) {
        const totalDays = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const arr = [];
        for (let i = 1; i <= totalDays.getDate(); i++) {
            const day = new Date(date.getFullYear(), date.getMonth(), i).getDay();
            if (day === 5) arr.push(new Date(date.getFullYear(), date.getMonth(), i).getDate());
        }
        return String(arr).split(',').join(', ');
    }

    isMonthLong(date) {
        const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return last.getDate() > 30 ? 'Yeah. That\'s a long one.' : 'Nope. That\'s a short one.';
    }

    shortestWeekDaysNumber(date) {
        const totalDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const array = [];

        for (let i = 1; i <= totalDays; i++) {
            const day = new Date(date.getFullYear(), date.getMonth() + 1, i).getDay();

            if (day === 2) {
                array.push(i);
            }
        }

        return array.reduce((prev, curr) => {
            prev.push(curr - prev);
            return prev;
        }, [])[0];
    }

    fullWeeksNumberInMonth(date) {
        const totalDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const array = [];
        for (let i = 1; i <= totalDays; i++) {
            const weekStart = new Date(date.getFullYear(), date.getMonth(), i).getDay();
            const weekEnd = new Date(date.getFullYear(), date.getMonth(), i + 6).getDay();

            const rest = totalDays - i;
            if (rest >= 7 && weekStart === 1 && weekEnd === 0) {
                array.push(i);
            }
        }
        return array.length;
    }
}
