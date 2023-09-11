import { calculateWeek } from "../calendarUtils";

export interface AppDate {
    dateTime: number;
    day: number;
    date: number;
    month: number;
    year: number;
    week: number;
}

export function newAppDate(date: Date): AppDate {
    const newAppDate = {
        dateTime: date.getTime(),
        day: date.getDay() === 0 ? 7 : date.getDay(),
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        week: calculateWeek(date),
    };
    return newAppDate;
}
