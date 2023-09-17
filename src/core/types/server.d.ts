export interface DbEventData {
    event_id: number;
    event_host: DbUserData;
    event_users: DbUserData[];
    event_dates: EventDate[];
    event_location: EventLocation;
}

interface EventLocation {
    name: string;
    googleMapsUrl?: string;
}

export interface EventDate {
    year: EventYear;
    month: EventMonth;
    day: EventDay;
    time: EventTime;
    users: DbUserData[];
}

export type EventYear = number;

export interface EventMonth {
    name: string;
    index: number;
    days: number;
}

export type EventDay = number;

export type EventTime = {
    hour: number;
    minute: number;
};
