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
export default (buffer?: Buffer) => {
    const event = rawToObject(buffer);
    return Object.keys(event).reduce((arr, curr) => {
        // @ts-ignore
        arr.push([curr, event[curr]]);
        return arr;
    }, []);
};
