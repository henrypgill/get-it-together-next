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
