export interface DbEventData {
    event_id: number;
    event_host: DbUserData;
    event_users: DbUserData[];
    event_dates: EventDate[];
    event_location: EventLocation;
}

export interface DbUserData {
    user_id: number;
    user_first_name: string;
    user_last_name: string;
    user_email: string;
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
