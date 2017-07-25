/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:57
 */
const CRLF = "\r\n";

/**
 *
 * @param arr
 * @returns {*}
 */
export default (arr?: string[][]): string => {
    if (!arr || !Array.isArray(arr)) {
        return "";
    }

    const rawStr = arr.reduce((result, curr) => {
        if (Array.isArray(curr) && curr.length === 2) {
            result.push(curr.join(": "));
        }
        return result;
    }, []).join(CRLF);

    return rawStr === "" ? rawStr : rawStr + CRLF.repeat(2);
};
