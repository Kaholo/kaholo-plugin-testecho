const { bootstrap } = require("@kaholo/plugin-library");
const strings = require("./strings");

module.exports = bootstrap({
  testStringsBasic: strings.testStringsBasic,
});
