import moment from 'moment';

const SQL_DATE_FORMAT = 'YYYY-MM-DD';

const MILES_TO_KILOMETERS = 1.60934;
const MINUTES_TO_HOURS = 1 / 60;

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

    getDistance(units) {
        if (!this.distanceMiles) {
            return '';
        }
        const distanceUnits = units.distance;
        if (distanceUnits === 'miles') {
            return this.distanceMiles;
        } else if (distanceUnits === 'kilometers') {
            return Number((this.distanceMiles * MILES_TO_KILOMETERS).toFixed(2));
        } else {
            return 'ERROR';
        }
    }

    getDuration(units) {
        if (!this.durationMinutes) {
            return '';
        }
        const durationUnits = units.duration;
        if (durationUnits === 'minutes') {
            return this.durationMinutes;
        } else if (durationUnits === 'hours') {
            return Number((this.durationMinutes * MINUTES_TO_HOURS).toFixed(2));
        } else {
            return 'ERROR';
        }
    }

    getIncline(units) {
        if (!this.inclinePercent) {
            return ''
        }
        const inclineUnits = units.incline;
        if (inclineUnits === 'percent') {
            return this.inclinePercent;
        } else if (inclineUnits === 'degrees') {
            return Number(Math.atan(this.inclinePercent).toFixed(2));
        } else {
            return 'ERROR';
        }
    }
}

export default Workout;