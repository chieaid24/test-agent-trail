const test = require("node:test");
const assert = require("node:assert");
const divide = require("./divide");
test("divides", () => assert.strictEqual(divide(6, 2), 3));
