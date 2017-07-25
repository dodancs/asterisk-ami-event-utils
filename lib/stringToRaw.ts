/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:54
 */
const CRLF = "\r\n";

/**
 *
 * @param str
 * @returns {*}
 */
export default (str?: string): string => {
    if (!str) {
        return "";
    }
    return str.toString().replace(/^[\r\n]+|[\r\n]+$/g, "") + CRLF.repeat(2);
};
