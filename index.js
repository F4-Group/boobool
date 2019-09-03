module.exports = boobool;

/**
 *
 * @param {String|undefined|null} value the value to parse
 * @param {object} [options]
 * @param {*} [options.defaultValue] default value when a boolean was not found
 */
function boobool(value, options) {
    const defaultValue = options && options.defaultValue;
    if (value == null) {
        return defaultValue;
    } else {
        const valueAsString = String(value).trim().toLowerCase();
        if (valueAsString === "true") {
            return true;
        } else if (valueAsString === "false") {
            return false;
        } else {
            return defaultValue;
        }
    }
}
