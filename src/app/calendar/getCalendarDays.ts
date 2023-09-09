import { CalendarDay } from "@/src/types/calendar";
import { getNumberOfDaysInMonth } from "./calendarUtils";

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
    let dayIndex = firstDayOfMonthIndex === 0 ? 7 : firstDayOfMonthIndex; // Date.getDay() returns 0 if the day is a Sunday
    const numberOfDaysInMonth = getNumberOfDaysInMonth(monthIndex);
    const days = [];
    let i = 1;
    let weekIndex = 1;
    console.log(firstDayOfMonthIndex);

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
