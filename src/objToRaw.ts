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
export default (obj?: Record<string, string | undefined | null>): string => {
    if (!obj) {
        return "";
    }

    const rawStr = Object.keys(obj).reduce((result: Array<string>, currentKey: string) => {
        result.push(`${currentKey}: ${obj[currentKey]}`);
        return result;
    }, []).join(CRLF);

    return rawStr === "" ? rawStr : rawStr + CRLF.repeat(2);
};
