import moment from 'moment';

const SQL_DATE_FORMAT = 'YYYY-MM-DD';

class Workout {
    constructor(id, lastUpdated, distanceMiles, durationMinutes, inclinePercent) {
        this.id = id;
        this.lastUpdated = moment(lastUpdated, SQL_DATE_FORMAT);
        this.distanceMiles = distanceMiles;
        this.durationMinutes = durationMinutes;
        this.inclinePercent = inclinePercent;
    }

    static fromQuery(rows) {
        const objectArray = new Array(rows.length);
        for (let i in rows) {
            const id = rows[i].id;
            const lastUpdated = rows[i].date_updated;
            const distanceMiles = rows[i].distance_miles;
            const durationMinutes = rows[i].duration_minutes;
            const inclinePercent = rows[i].incline_percent;
            objectArray[i] = new Workout(id, lastUpdated, distanceMiles, durationMinutes, inclinePercent);
        }
        return objectArray;
    }

    getDate() {
        return this.lastUpdated.format('MMM DD, YYYY');
    }

    getDistance() {
        if (this.distanceMiles) {
            return this.distanceMiles;
        } else {
            return '';
        }
    }

    getDuration() {
        if (this.durationMinutes) {
            return this.durationMinutes;
        } else {
            return '';
        }
    }

    getIncline() {
        if (this.inclinePercent) {
            return this.inclinePercent;
        } else {
            return '';
        }
    }
}

export default Workout;