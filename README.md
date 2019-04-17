# Running Log
A simple web application for recording my workout runs.

I started this project to get more practice using React hooks, proptypes, and automated testing via Jest.

## Setup and Run
You will need to follow the steps below to setup the database and spin up this application.

```bash
# 1. Create PostgreSQL database named 'running_log'
createdb running_log

# 2. Create database tables using SQL create statements in 'database.sql'
psql -E -f database.sql -d running_log

# 3. Install Node dependencies/libraries using NPM
npm install

# 4. Start the server (Port 5000)
npm run server

# 5. Start the client (Port 3000)
npm run client
```

## Description

## Utilized Web Stack
- `User Interface` - React, CSS
- `Client` - React, Redux, Redux-Saga, Axios
- `Server` - Node.js, Express
- `Database` - PostgreSQL

## Requirements
- Git
- Web browser
- Node and npm
- PostgreSQL

## Features

### Completed Features
- [x] Initialize the database schema using a runnable script file

### Future Features
- [ ] Allow user to add a run entry (CREATE)
- [ ] Display a log of previously logged runs (READ)
- [ ] Allow user to edit previously logged runs (UPDATE) 
- [ ] Allow user to delete run logs (DELETE)
- [ ] Graph consistency of workouts over time (react-calendar-heatmap)

## Authors
Mike Stockman

## Acknowledgements
