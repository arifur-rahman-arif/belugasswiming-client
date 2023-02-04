/**
 * Trim the text to a specified length with ...
 *
 * @param {string} text
 * @param {number} length
 * @returns {*}  {string}
 */
export const trimText = (text: string, length: number): string => {
    return text.length > length ? text.substring(0, length - 3) + '...' : text;
};
