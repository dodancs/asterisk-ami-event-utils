/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 12.11.2014
 * Time: 19:25
 */

import arrayToRaw from "./arrayToRaw";
import objToRaw from "./objToRaw";
import rawToArray from "./rawToArray";
import rawToJson from "./rawToJson";
import rawToObject from "./rawToObject";
import rawToString from "./rawToString";
import stringToRaw from "./stringToRaw";

export default {
    fromArray: arrayToRaw,
    fromObject: objToRaw,
    fromString: stringToRaw,
    toArray: rawToArray,
    toJson: rawToJson,
    toObject: rawToObject,
    toString: rawToString
};
