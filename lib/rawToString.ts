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
export default (buffer?: string): string => {
    if (!buffer) {
        return "";
    }

    return buffer.toString("utf-8")
        .replace(/^[\r\n]+|[\r\n]+$/g, "");
};
