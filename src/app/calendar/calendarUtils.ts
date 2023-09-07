import { CalendarData, CalendarDay } from "@/src/types/calendar";

/**
 *
 * @param month the month which you wish to get the CalendarDays for.
 * @returns an array of CalendarDays objects for the given month without their associated users.
 */
export function getCalendarDaysOfMonth(
    year: number,
    monthIndex: number
): CalendarDay[] {
    const firstDayOfMonth = new Date(year, monthIndex, 1);
    const firstDayOfMonthIndex = firstDayOfMonth.getDay();
    const numberOfDaysInMonth = getNumberOfDaysInMonth(monthIndex);
    const days = [];
    let i = 1;
    let weekIndex = 1;
    let dayIndex = firstDayOfMonthIndex;

    while (i <= numberOfDaysInMonth) {
        while (i <= numberOfDaysInMonth && dayIndex <= 7) {
            const dayDate = new Date(year, monthIndex, i);
            const newDay: CalendarDay = {
                date: dayDate.getTime(),
                weekIndex: weekIndex,
                dayIndex: dayIndex,
            };
            days.push(newDay);
            dayIndex++;
            i++;
        }
        weekIndex++;
        dayIndex = 1;
    }

    return days;
}

export function getInitialCalendarState(currentDate?: Date): CalendarData {
    const date = getFirstDayOfMonth(currentDate ?? new Date());
    const initialState: CalendarData = {
        year: date.getFullYear(),
        monthIndex: date.getMonth(),
        days: getCalendarDaysOfMonth(date.getFullYear(), date.getMonth()),
    };
    return initialState;
}

export function setCalendarYear(targetYear: number, calendar: CalendarData) {
    calendar.days = getCalendarDaysOfMonth(targetYear, calendar.monthIndex);
    calendar.year = targetYear;
}
export function setMonth(targetMonthIndex: number, calendar: CalendarData) {
    calendar.days = getCalendarDaysOfMonth(calendar.year, targetMonthIndex);
    calendar.monthIndex = targetMonthIndex;
}

export function stepYear(n = 1, calendar: CalendarData) {
    calendar.days = getCalendarDaysOfMonth(calendar.year, calendar.monthIndex);
    calendar.year += n;
}

export function stepMonth(n = 1, calendar: CalendarData) {
    if (calendar.monthIndex === 11 && n === 1) {
        calendar.days = getCalendarDaysOfMonth(calendar.year + 1, 0);
        calendar.year += 1;
        calendar.monthIndex = 0;
    } else if (calendar.monthIndex === 0 && n === -1) {
        calendar.days = getCalendarDaysOfMonth(calendar.year - 1, 11);
        calendar.year -= 1;
        calendar.monthIndex = 11;
    } else {
        calendar.days = getCalendarDaysOfMonth(
            calendar.year,
            calendar.monthIndex + n
        );
        calendar.monthIndex += n;
    }
}

/**
 *
 * @param monthIndex the 0-indexed month number - i.e. january = 0
 * @returns the number of days in the month
 */
export function getNumberOfDaysInMonth(monthIndex: number /*MonthIndex*/) {
    switch (monthIndex) {
        case 0:
            return 31;
        case 1:
            return 28;
        case 2:
            return 31;
        case 3:
            return 30;
        case 4:
            return 31;
        case 5:
            return 30;
        case 6:
            return 31;
        case 7:
            return 31;
        case 8:
            return 30;
        case 9:
            return 31;
        case 10:
            return 30;
        case 11:
            return 31;
        default:
            return 31;
    }
}

/**
 *
 * @param monthIndex the 0-indexed month number - i.e. january = 0
 * @returns the name of the month in lowercase
 */
export function getMonthName(monthIndex: number): string {
    if (monthIndex > 11 || monthIndex < 0) {
        return "month index exceeds bounds 0 - 11";
    }

    switch (monthIndex) {
        case 0:
            return "january";
        case 1:
            return "february";
        case 2:
            return "march";
        case 3:
            return "april";
        case 4:
            return "may";
        case 5:
            return "june";
        case 6:
            return "july";
        case 7:
            return "august";
        case 8:
            return "september";
        case 9:
            return "october";
        case 10:
            return "november";
        case 11:
            return "december";
        default:
            return "incorrect month index";
    }
}

export function getFirstDayOfMonth(date: Date): Date {
    const firstDayOfMonth = new Date(date.getTime());
    firstDayOfMonth.setDate(1);
    return firstDayOfMonth;
}
