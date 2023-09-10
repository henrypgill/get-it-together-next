import { AppDate } from "./appDate";

type ActionObject<T> = { [key: string]: T };
export type ActionPayload = ActionObject;
export type ActionMeta = ActionObject;

export interface Action {
    type: string;
    payload?: ActionPayload | ActionError;
    error?: boolean;
    meta: ActionMeta;
}

export interface CalendarData {
    year: number;
    monthIndex: number;
    days: AppDate[];
}

// export interface CalendarDay {
//     date: AppDate;
//     weekIndex: number; //index of the week of the month e.g. week1=1
//     dayIndex: number; //index of the day of the week e.g. monday=1
// }
