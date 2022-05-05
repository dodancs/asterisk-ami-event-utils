/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:32
 */

"use strict";

import rawToString from "./rawToString";

const CRLF = "\r\n";
const ROW_SPLITTER = ":";
const COMMAND_END = "--END COMMAND--";

/**
 *
 * @param buffer
 * @returns {*}
 */
export default (buffer?: string): {} => {
    if (!buffer) {
        return {};
    }

    let rawStr = rawToString(buffer);

    if (!/^Event|Action:/i.test(rawStr)) {
        rawStr = trimHello(rawStr);

        if (!/^Response:/i.test(rawStr)) {
            return {
                $content: rawStr,
                Response: null
            };
        }
        return respToObj(rawStr);
    }
    return rawStr.split(CRLF).reduce(rowReducer, {});
};

/**
 *
 * @param rawPackageStr
 * @returns {{}}
 */
function respToObj(rawPackageStr: string): {} {
    let result: { $content?: string } = {};
    const rows = rawPackageStr.split(CRLF);
    let i = 0;

    for (i; i < rows.length; i++) {
        if (!/^[a-z\d_-]+?:/i.test(rows[i])) {
            break;
        }
        result = rowReducer(result, rows[i]);
    }

    if (i < rows.length) {
        let content = rows.slice(i).join(CRLF);
        const indexOfEnd = content.indexOf(COMMAND_END);

        if (~indexOfEnd) {
            content = rawToString(content.substr(0, indexOfEnd));
        }
        result.$content = content;
    }
    return result;
}

/**
 *
 * @param resultObj
 * @param row
 * @returns {*}
 */
function rowReducer(resultObj: any, row: string) {
    const pair = row.split(ROW_SPLITTER);

    if (pair.length > 1) {
        resultObj[pair[0].trim()] = pair.slice(1).join(ROW_SPLITTER).trim();
    }
    return resultObj;
}

/**
 *
 * @param rawStr
 * @returns {*}
 */
function trimHello(rawStr: string): string {
    if (/^Asterisk/i.test(rawStr)) {
        return rawStr.replace(/^Asterisk.+?\r\n/i, "");
    }
    return rawStr;
}
