const { bootstrap } = require("@kaholo/plugin-library");
const typeString = require("./typeString");
const typeText = require("./typeText");
const typeVault = require("./typeVault");

module.exports = bootstrap({
  testStringBasic: typeString.testStringBasic,
  testTextBasic: typeText.testTextBasic,
  testVaultBasic: typeVault.testVaultBasic,
});
