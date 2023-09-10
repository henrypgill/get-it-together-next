CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name CHARACTER VARYING(255) NOT NULL,
    last_name CHARACTER VARYING(255) NOT NULL,
    email CHARACTER VARYING(255) NOT NULL,
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name CHARACTER VARYING(255) NOT NULL,
    host INT REFERENCES users(id) NOT NULL
);

CREATE TABLE event_users (
    user_id PRIMARY KEY users(id) NOT NULL,
    event_id PRIMARY KEY event(id) NOT NULL

);

CREATE TABLE event_dates (
    event_id INT PRIMARY KEY REFERENCES events(id);
    date DATE NOT NULL,
    user_id REFERENCES users(id),
);