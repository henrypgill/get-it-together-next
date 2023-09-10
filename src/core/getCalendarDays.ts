import { getNumberOfDaysInMonth } from "./calendarUtils";
import { AppDate, newAppDate } from "./types/appDate";

/**
 *
 * @param month the month which you wish to get the CalendarDays for.
 * @returns an array of CalendarDays objects for the given month without their associated users.
 */
export function getCalendarDaysOfMonth(
    year: number,
    monthIndex: number
): AppDate[] {
    const numberOfDaysInMonth = getNumberOfDaysInMonth(monthIndex);
    const days = [];

    for (let i = 1; i <= numberOfDaysInMonth; i++) {
        days.push(newAppDate(new Date(year, monthIndex, i)));
    }

    return days;
}
