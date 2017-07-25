/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:31
 */
import rawToObject from "./rawToObject";

/**
 *
 * @param buffer
 * @returns {*}
 */
export default (buffer?: string) => {
    const event = rawToObject(buffer);
    return Object.keys(event).reduce((arr, curr) => {
        arr.push([curr, event[curr]]);
        return arr;
    }, []);
};
