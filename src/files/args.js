/**
 * @description
 *
 * @param {string|number} value
 * @returns {boolean}
 */
function isNumeric(value) {
    if (typeof value !== 'string' && typeof value !== 'number')
        return false;
    return !isNaN(+value.replace(/(.)_/g, '$1'));
}

/**
 * @description
 *
 * @param {string} value
 * @returns {number|undefined|any}
 */
function typeFromString(value) {
    const trimmedValue = value?.trim?.();
    if (!trimmedValue)
        return value;

    try {
        const parsedValue = JSON.parse(trimmedValue.toLowerCase());
        if (typeof parsedValue === 'object' && parsedValue !== null)
            return JSON.parse(trimmedValue);
        return parsedValue;
    } catch (e) {
    }

    if (trimmedValue.toLowerCase() === 'undefined')
        return undefined;

    if (isNumeric(trimmedValue))
        return +trimmedValue.replace(/(.)_/g, '$1');

    return value;
}

/**
 * @description
 *
 * @returns {{[p: string]: string|boolean}}
 */
function args() {
    const args = process.argv.splice(2);
    /** @type {Iterable<readonly [PropertyKey, any]>} */
    const entries = args.map(arg => {
        /** @type {string} */
        const argument = arg.trim();
        if (!argument || !/^--\w/.test(argument))
            return;

        /** @type {string[]} */
        const keyValue = argument.split('=').filter(Boolean);

        if (!keyValue.length)
            return;

        /** @type {string} */
        const argKey = keyValue.shift().substring(2).trim();
        if (!argKey)
            return;

        if (!keyValue.length)
            return [argKey, true];

        /** @type {string} */
        const argValue = keyValue.shift().trim();

        return [argKey, typeFromString(argValue) || false];
    }).filter(Boolean);

    return Object.fromEntries(entries);
}

module.exports = args();
