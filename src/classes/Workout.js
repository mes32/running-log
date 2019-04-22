import moment from 'moment';

class Workout {
    constructor(sqlEntry) {
        this.id = sqlEntry.id;
        this.lastUpdated = moment(sqlEntry.date_updated, 'YYYY-MM-DD');
        this.distanceMiles = sqlEntry.distance_miles;
        this.durationMinutes = sqlEntry.duration_minutes;
        this.inclinePercent = sqlEntry.incline_percent;
    }

    static convertFromSQL(sqlArray) {
        const objectArray = new Array(sqlArray.length);
        for (let i in sqlArray) {
            objectArray[i] = new Workout(sqlArray[i]);
        }
        return objectArray;
    }

    getDate() {
        return this.lastUpdated.format('M/D/YY');
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