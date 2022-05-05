/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:48
 */

/**
 *
 * @param buffer
 * @returns {*}
 */
export default (buffer?: Buffer | string): string => {
    if (!buffer) {
        return "";
    }

    return buffer.toString()
        .replace(/^[\r\n]+|[\r\n]+$/g, "");
};
