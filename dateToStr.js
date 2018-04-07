var app = Application.currentApplication();
app.includeStandardAdditions = true;

// For debugging
/*
app.displayNotification("All graphics have been converted.", {
    withTitle: "My Graphic Processing Script",
    subtitle: "Processing is complete.",
    soundName: "Frog"
});
*/

/**
 * Takes day, month, and year values and converts it into a Date object
 * @param {number} day 
 * @param {number} month 
 * @param {number} year 
 * @returns {Date}
 */
function dateStrToDateObj(day, month, year) {
    return new Date(Date.parse(day + ' ' + month + ', ' + year + ' GMT+1000'));
}

/**
 * Converts a Date object into its YYYY-MM-DD string representation
 * @param {Date} dateObj Date object to be converted
 * @returns {string} YYYY-MM-DD string representation of the date object
 */
function getDateStrYYYYMMDD(dateObj) {
    return dateObj.toISOString().split('T')[0];
}



var mon = inputAttributes[0];
var year = inputAttributes[1];
var day = parseInt(inputAttributes[2]) + 1;

var strYYYYMMDD = getDateStrYYYYMMDD(dateStrToDateObj(day, mon, year));

return {
    'hazelPassesScript': true,
    'hazelOutputAttributes': [strYYYYMMDD]
};
