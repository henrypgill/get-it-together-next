

export interface DbEventDate {
    id: number;
    user_id: number;
    date: SQLDate;
}

export interface DbEvent {
    id: number;
    name: string;
    host_user_id: number;
}

type EventId = number;
type SQLDate = `${string}-${string}-${string}`;

export interface EventDate extends DbEventDate {}

export interface AppEvent extends DbEvent {
    users: UserId[];
    dates: EventDate[];
}
