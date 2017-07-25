/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:32
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rawToObject_1 = require("./rawToObject");
/**
 *
 * @param buffer
 */
exports.default = (buffer) => {
    return JSON.stringify(rawToObject_1.default(buffer));
};
//# sourceMappingURL=rawToJson.js.map