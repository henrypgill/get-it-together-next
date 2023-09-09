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
    // console.log( date.getDate(), weekIndex, dayIndex);

    return (
        <button className={`day-card calendar-cell-${weekIndex}-${dayIndex}`}>
            <h3 className="day-card-date">{date.getDate()}</h3>
            <div className="user-list-container">
                <ul className="day-users-list"></ul>
            </div>
        </button>
    );
}
