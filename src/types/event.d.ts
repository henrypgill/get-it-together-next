export type UserId = number;

export interface DbUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    image_url: string;
}
export interface DbEventDate {
    id: number;
    user_id: number;
    date: SQLDate;
}

export interface DbEvent {
    id: number;
    name: string;
    host_user_id: number;
    image_url: string;
}

type EventId = number;
type SQLDate = `${string}-${string}-${string}`;

export interface User extends DbUser {
    user_events: EventId[];
    hosted_events: EventId[];
}

export interface EventDate extends DbEventDate {}

export interface Event extends DbEvent {
    users: UserId[];
    dates: EventDate[];
}
