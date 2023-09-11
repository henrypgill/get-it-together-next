import { useSelector } from "react-redux";
import { getMonthName } from "../../../core/calendarUtils";
import { calendarSlice } from "../../../redux/slices/calendarSlice";
import store, { RootState } from "../../../redux/store";
import "../../../styles/Calendar.css";
import "../../../styles/DayCard.css";
import { CalendarDayHeadings } from "./CalendarDayHeadings";
import { DayCard } from "./DayCard";

export function CalendarApp(): JSX.Element {
    const calendarState = useSelector((state: RootState) => state.calendar);

    function handleNextMonthClick() {
        store.dispatch(calendarSlice.actions.stepMonth(1));
    }
    function handlePrevMonthClick() {
        store.dispatch(calendarSlice.actions.stepMonth(-1));
    }
    function handleNextYearClick() {
        store.dispatch(calendarSlice.actions.stepYear(1));
    }
    function handlePrevYearClick() {
        store.dispatch(calendarSlice.actions.stepYear(-1));
    }

    return (
        <div className="calendar-section-content">
            <div className="calendar-container">
                <div className="month-year-container">
                    <button
                        className="year-button"
                        onClick={() => handlePrevYearClick()}
                    >
                        {"<"}
                    </button>
                    <h2>{getMonthName(calendarState.monthIndex)}</h2>
                    <h2>{calendarState.year}</h2>
                    <button
                        className="year-button"
                        onClick={() => handleNextYearClick()}
                    >
                        {">"}
                    </button>
                </div>
                <div className="month-view">
                    <button
                        className="month-button"
                        onClick={() => handlePrevMonthClick()}
                    >
                        {"<"}
                    </button>
                    <div className="days-grid">
                        {<CalendarDayHeadings />}
                        {calendarState.days.map((AppDate) => (
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
                        onClick={() => handleNextMonthClick()}
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
