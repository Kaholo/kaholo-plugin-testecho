const { bootstrap } = require("@kaholo/plugin-library");
const typeString = require("./typeString");
const typeText = require("./typeText");
const typeVault = require("./typeVault");
const typeOptions = require("./typeOptions");
const typeBoolean = require("./typeBoolean");

module.exports = bootstrap({
  testStringBasic: typeString.testStringBasic,
  testTextBasic: typeText.testTextBasic,
  testVaultBasic: typeVault.testVaultBasic,
  testOptionsBasic: typeOptions.testOptionsBasic,
  testBooleanBasic: typeBoolean.testBooleanBasic,
});
