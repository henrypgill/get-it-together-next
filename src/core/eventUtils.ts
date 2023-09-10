import { AppEvent } from "./types/event";

export function getInitialEventState(): AppEvent {
    return {
        id: -1,
        name: "intitial state event",
        host_user_id: -1,
        users: [],
        dates: [],
    };
}
