-- Drop existing tables
DROP TABLE IF EXISTS workout;
DROP TABLE IF EXISTS terrain;

-- Type of terrain used for the workout 
CREATE TABLE terrain
(
    id SERIAL PRIMARY KEY,
    val VARCHAR(20) NOT NULL
);

INSERT INTO terrain
    (val)
VALUES
    ('road'),
    ('track'),
    ('trail'),
    ('treadmill');

-- Logs an individual running workout
CREATE TABLE workout
(
    id SERIAL PRIMARY KEY,
    last_updated TIMESTAMP NOT NULL DEFAULT NOW(),
    distance_miles REAL,
    duration_minutes REAL,
    incline_percent REAL,
    terrain INTEGER REFERENCES terrain(id)
);