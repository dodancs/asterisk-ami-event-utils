"use strict";
/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 12.11.2014
 * Time: 19:25
 */
Object.defineProperty(exports, "__esModule", { value: true });
const arrayToRaw_1 = require("./arrayToRaw");
const objToRaw_1 = require("./objToRaw");
const rawToArray_1 = require("./rawToArray");
const rawToJson_1 = require("./rawToJson");
const rawToObject_1 = require("./rawToObject");
const rawToString_1 = require("./rawToString");
const stringToRaw_1 = require("./stringToRaw");
exports.default = {
    fromArray: arrayToRaw_1.default,
    fromObject: objToRaw_1.default,
    fromString: stringToRaw_1.default,
    toArray: rawToArray_1.default,
    toJson: rawToJson_1.default,
    toObject: rawToObject_1.default,
    toString: rawToString_1.default
};
//# sourceMappingURL=index.js.map