const test = require("node:test");
const assert = require("node:assert");
const absoluteDifference = require("./absoluteDifference");
test("absolute difference", () => assert.strictEqual(absoluteDifference(3, 2), 1));
test("absolute difference when negative", () => assert.strictEqual(absoluteDifference(2, 3), 1));
