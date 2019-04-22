
class Workout {
    constructor(sqlEntry) {
        this.id = sqlEntry.id;
        this.lastUpdated = sqlEntry.last_updated;
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
        return this.lastUpdated;
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