import { useSelector } from "react-redux";
import { getMonthName } from "../../../core/calendarUtils";
import { calendarActions, calendarSlice } from "../../../redux/slices/calendarSlice";
import store, { RootState, useAppDispatch, useAppSelector } from "../../../redux/store";
import "../../../styles/Calendar.css";
import "../../../styles/DayCard.css";
import { CalendarDayHeadings } from "./CalendarDayHeadings";
import { DayCard } from "./DayCard";

export function CalendarApp(): JSX.Element {
    const calendar = useAppSelector((state) => state.calendar);
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch()



    return (
        <div className="calendar-section-content">
            <div className="calendar-container">
                <div className="month-year-container">
                    <button
                        className="year-button"
                        onClick={() => dispatch(calendarActions.stepYear(-1))}
                    >
                        {"<"}
                    </button>
                    <h2>{getMonthName(calendar.monthIndex)}</h2>
                    <h2>{calendar.year}</h2>
                    <button
                        className="year-button"
                        onClick={() => dispatch(calendarActions.stepYear(1))}
                    >
                        {">"}
                    </button>
                </div>
                <div className="month-view">
                    <button
                        className="month-button"
                        onClick={() => dispatch(calendarActions.stepMonth(-1))}
                    >
                        {"<"}
                    </button>
                    <div className="days-grid">
                        {<CalendarDayHeadings />}
                        {calendar.days.map((AppDate) => (
                            <DayCard
                                key={AppDate.dateTime}
                                date={AppDate.date}
                                week={AppDate.week}
                                day={AppDate.day}
                            />
                        ))}
                    </div>
                    <button
                        className="month-button"
                        onClick={() => dispatch(calendarActions.stepMonth(1))}
                    >
                        {">"}
                    </button>
                </div>
            </div>
            <div>
                <h2>people</h2>
                <ul>
                    <li>Elise (host)</li>
                    <li>James</li>
                    <li>Will</li>
                    <li>Mary</li>
                    <li>Tharo</li>
                    <li>Eylea</li>
                    <li>Masha</li>
                </ul>
            </div>
        </div>
    );
}
