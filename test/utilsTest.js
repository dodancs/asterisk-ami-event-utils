"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:31
 */
const assert = require("assert");
const lib_1 = require("../lib");
const CRLF = "\r\n";
describe("Event utils test", () => {
    const rawEvent = [
        "Event: AgentRingNoAnswer",
        "Privilege: agent,all",
        "Queue: 592"
    ].join(CRLF);
    let testEvent = null;
    beforeEach(() => {
        testEvent = rawEvent.substr(0);
    });
    it("Check utils content", () => {
        assert.deepEqual(Object.keys(lib_1.default), [
            "fromArray",
            "fromObject",
            "fromString",
            "toArray",
            "toJson",
            "toObject",
            "toString"
        ]);
    });
    describe("bufferToString", () => {
        it("with event's raw string", () => {
            testEvent = CRLF.repeat(5) + testEvent + CRLF.repeat(5);
            assert.equal(rawEvent, lib_1.default.toString(testEvent));
        });
        it("without event's raw string", () => {
            assert.equal(lib_1.default.toString(), "");
        });
    });
    describe("rawToObject", () => {
        it("with event's raw string", () => {
            assert.deepEqual(lib_1.default.toObject(testEvent), {
                Event: "AgentRingNoAnswer",
                Privilege: "agent,all",
                Queue: "592"
            });
        });
        it("with action's raw string", () => {
            const commandStr = [
                "Action: command",
                "Command: Core Show Channels"
            ].join(CRLF) + CRLF.repeat(2);
            assert.deepEqual(lib_1.default.toObject(commandStr), {
                Action: "command",
                Command: "Core Show Channels"
            });
        });
        it("with simple response's raw string", () => {
            const commandStr = [
                "Response: Pong",
                "Value: 12345"
            ].join(CRLF) + CRLF.repeat(2);
            assert.deepEqual(lib_1.default.toObject(commandStr), {
                Response: "Pong",
                Value: "12345"
            });
        });
        it("with hello message and response's raw string", () => {
            const commandStr = [
                "Asterisk version x.x",
                "Response: Pong",
                "Value: 12345"
            ].join(CRLF) + CRLF.repeat(2);
            assert.deepEqual(lib_1.default.toObject(commandStr), {
                Response: "Pong",
                Value: "12345"
            });
        });
        it("with extended response's raw string", () => {
            const commandStr = [
                "extended row 1",
                "extended row 2"
            ].join(CRLF) + CRLF.repeat(2);
            assert.deepEqual(lib_1.default.toObject(commandStr), {
                $content: [
                    "extended row 1",
                    "extended row 2"
                ].join(CRLF),
                Response: null
            });
        });
        it("with extended response's raw string (with end command)", () => {
            const commandStr = [
                "Response: Follows",
                "Privilege: Command",
                "Channel (Context Extension Pri ) State Appl. Data",
                "0 active channel(s)",
                "--END COMMAND--"
            ].join(CRLF) + CRLF.repeat(2);
            assert.deepEqual(lib_1.default.toObject(commandStr), {
                $content: [
                    "Channel (Context Extension Pri ) State Appl. Data",
                    "0 active channel(s)"
                ].join(CRLF),
                Privilege: "Command",
                Response: "Follows"
            });
        });
        it("without event's raw string", () => {
            assert.deepEqual(lib_1.default.toObject(), {});
        });
        it("invalid property pair in event's raw string", () => {
            testEvent = [
                "Event: AgentRingNoAnswer",
                "Privilege agent,all",
                "Queue: 592"
            ].join(CRLF) + CRLF.repeat(2);
            assert.deepEqual(lib_1.default.toObject(testEvent), {
                Event: "AgentRingNoAnswer",
                Queue: "592"
            });
        });
        it("with empty field", () => {
            testEvent = [
                "Event: AgentRingNoAnswer",
                "Queue:"
            ].join(CRLF) + CRLF.repeat(2);
            assert.deepEqual(lib_1.default.toObject(testEvent), {
                Event: "AgentRingNoAnswer",
                Queue: ""
            });
        });
    });
    describe("rawToArray", () => {
        it("with event's raw string", () => {
            assert.deepEqual(lib_1.default.toArray(testEvent), [
                ["Event", "AgentRingNoAnswer"],
                ["Privilege", "agent,all"],
                ["Queue", "592"]
            ]);
        });
        it("without event's raw string", () => {
            assert.deepEqual(lib_1.default.toArray(), []);
        });
    });
    describe("rawToJson", () => {
        it("with event's raw string", () => {
            assert.equal(lib_1.default.toJson(testEvent), '{"Event":"AgentRingNoAnswer","Privilege":"agent,all","Queue":"592"}');
        });
        it("without event's raw string", () => {
            assert.equal(lib_1.default.toJson(), "{}");
        });
    });
    describe("arrayToRaw", () => {
        it("valid event's array", () => {
            assert.equal(testEvent + CRLF.repeat(2), lib_1.default.fromArray([
                ["Event", "AgentRingNoAnswer"],
                ["Privilege", "agent,all"],
                ["Queue", "592"]
            ]));
        });
        it("empty event's array", () => {
            assert.equal("", lib_1.default.fromArray([]));
        });
        it("without event's array", () => {
            assert.equal("".repeat(2), lib_1.default.fromArray());
        });
        it("invalid element of event's array", () => {
            const expectStr = [
                "Event: AgentRingNoAnswer",
                "Privilege: agent,all"
            ].join(CRLF) + CRLF.repeat(2);
            assert.deepEqual(expectStr, lib_1.default.fromArray([
                ["Event", "AgentRingNoAnswer"],
                ["Privilege", "agent,all"],
                []
            ]));
        });
    });
    describe("objectToRaw", () => {
        it("valid event's object", () => {
            assert.equal(testEvent + CRLF.repeat(2), lib_1.default.fromObject({
                Event: "AgentRingNoAnswer",
                Privilege: "agent,all",
                Queue: "592"
            }));
        });
        it("empty event's object", () => {
            assert.equal("", lib_1.default.fromObject({}));
        });
        it("without event's object", () => {
            assert.equal("".repeat(2), lib_1.default.fromObject());
        });
        it("without event's object", () => {
            assert.equal([
                "Variable: a",
                "Variable: b"
            ].join(CRLF) + CRLF.repeat(2), lib_1.default.fromObject({ Variable: ["a", "b"] }));
        });
    });
    describe("stringToRaw", () => {
        it("valid event's string", () => {
            const controlStr = "control string";
            assert.equal(controlStr + CRLF.repeat(2), lib_1.default.fromString(`\r\r\n${controlStr}\n`));
        });
        it("empty event's string", () => {
            const controlStr = "";
            assert.equal(controlStr + CRLF.repeat(2), lib_1.default.fromString(`\r\r\n${controlStr}\n`));
        });
        it("without event's string", () => {
            assert.equal("", lib_1.default.fromString());
        });
    });
});
//# sourceMappingURL=utilsTest.js.map