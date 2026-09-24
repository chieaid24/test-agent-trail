const test = require("node:test");
const assert = require("node:assert");
const subtract = require("./subtract");
test("subtracts", () => assert.strictEqual(subtract(3, 2), 1));
