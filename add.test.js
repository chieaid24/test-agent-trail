const test = require("node:test");
const assert = require("node:assert");
const add = require("./add");
test("adds", () => assert.strictEqual(add(1, 2), 3));
