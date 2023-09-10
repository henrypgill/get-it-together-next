import { AppDate } from "@/src/core/types/appDate";

interface DayCardProps extends Partial<AppDate> {
    day: number;
    week: number;
    date: number;
}

export function DayCard({ day, week, date }: DayCardProps): JSX.Element {
    return (
        <button className={`day-card calendar-cell-${week}-${day}`}>
            <h3 className="day-card-date">{date}</h3>
            <div className="user-list-container">
                <ul className="day-users-list"></ul>
            </div>
        </button>
    );
}
