import { calculateWeek } from "../calendarUtils";

// interface IAppDate {
// }

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

// export class eAppDate {
//     dateTime: number;
//     day: number;
//     date: number;
//     month: number;
//     year: number;
//     week: number;

// constructor(date:Date) {
//     this.dateTime = date.getTime();
//     this.day = date.getDay() === 0 ? 7 : date.getDay();
//     this.date = date.getDate();
//     this.month = date.getMonth() + 1;
//     this.year = date.getFullYear();
//     this.week = calculateWeek(date);
// }

// public get dateTime() { return this._dateTime }
// public get day() { return this._day }
// public get date() { return this._date }
// public get month() { return this._month }
// public get year() { return this._year }
// public get week() { return this._week }

// public set dateTime(value: number) { this._dateTime = value;}
// public set day(value: number) { this._day = value;}
// public set date(value: number) { this._date = value;}
// public set month(value: number) { this._month = value;}
// public set year(value: number) { this._year = value;}
// public set week(value: number) { this._week = value;}

// }
