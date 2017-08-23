"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:54
 */
const CRLF = "\r\n";
/**
 *
 * @param obj
 * @returns {*}
 */
exports.default = (obj) => {
    if (!obj) {
        return "";
    }
    const rawStr = Object.keys(obj).reduce((result, currentKey) => {
        if (Array.isArray(obj[currentKey])) {
            obj[currentKey].forEach((val) => {
                result.push(`${currentKey}: ${val}`);
            });
        }
        else {
            result.push(`${currentKey}: ${obj[currentKey]}`);
        }
        return result;
    }, []).join(CRLF);
    return rawStr === "" ? rawStr : rawStr + CRLF.repeat(2);
};
//# sourceMappingURL=objToRaw.js.map