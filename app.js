const { bootstrap } = require("@kaholo/plugin-library");
const typeString = require("./typeString");
const typeText = require("./typeText");

module.exports = bootstrap({
  testStringBasic: typeText.testStringBasic,
  testTextBasic: typeText.testTextBasic,
});
