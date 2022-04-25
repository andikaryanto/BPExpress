import moment from 'moment';
/**
 * @class DateFormat
 */
class DateFormat {
    /**
     * Get formatted current date
     * @param {[]} format
     * @param {string} seprator
     * @return {string}
     */
    static getFormattedCurrentDate(format = [], seprator = '_') {
        /**
         *
         * @param {*} m
         * @return {string}
         */
        function formated(m) {
            const t = new Date();
            const f = new Intl.DateTimeFormat('en', m);
            return f.format(t);
        }

        let newFormat = [];
        if (newFormat.length == 0) {
            newFormat = [{year: 'numeric'}, {month: 'short'}, {day: 'numeric'}];
        } else {
            newFormat = format;
        }

        return newFormat.map(formated).join(seprator);
    }

    /**
      * Formatted date using moment js
      * @param {string} format
      * @return {string}
      */
    static getCurrentDate(format) {
        return moment().format(format);
    }

    /**
     *
     * @param {Date} date
     * @return {string}
     */
    static databaseDate(date) {
        return moment(date).format('YYYY-MM-DD hh:mm:ss');
    }
}

export default DateFormat;
