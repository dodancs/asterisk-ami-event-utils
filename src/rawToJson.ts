/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:32
 */

"use strict";

import rawToObject from "./rawToObject";

/**
 *
 * @param buffer
 */
export default (buffer?: string) => {
    return JSON.stringify(rawToObject(buffer));
};
