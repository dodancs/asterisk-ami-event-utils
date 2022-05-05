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
export default (obj?: any) => {
    if (!obj) {
        return "";
    }

    const rawStr = Object.keys(obj).reduce((result: Array<string>, currentKey: string) => {
        if (Array.isArray(obj[currentKey])) {
            obj[currentKey].forEach((val: string) => {
                result.push(`${currentKey}: ${val}`);
            });

        } else {
            result.push(`${currentKey}: ${obj[currentKey]}`);
        }
        return result;
    }, []).join(CRLF);

    return rawStr === "" ? rawStr : rawStr + CRLF.repeat(2);
};
