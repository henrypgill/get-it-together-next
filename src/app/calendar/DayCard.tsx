import { CalendarDay } from "@/src/types/calendar";

interface DayCardProps extends Partial<CalendarDay> {
    date_number: number;
    weekIndex: number;
    dayIndex: number;
}

export function DayCard({
    date_number,
    weekIndex,
    dayIndex,
}: DayCardProps): JSX.Element {
    const date = new Date(date_number);
    return (
        <button className={`day-card calendar-cell-${weekIndex}-${dayIndex}`}>
            <h3>{date.getDate()}</h3>
            <div className="user-list-container"></div>
            <ul className="day-users-list">
                <li>james</li>
                <li>holly</li>
            </ul>
        </button>
    );
}
