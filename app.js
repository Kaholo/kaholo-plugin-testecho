const { bootstrap } = require("@kaholo/plugin-library");
const autocomplete = require("./autocomplete");
const typeString = require("./typeString");
const typeText = require("./typeText");
const typeVault = require("./typeVault");
const typeOptions = require("./typeOptions");
const typeBoolean = require("./typeBoolean");
const typeInt = require("./typeInt");
const typeAutocomplete = require("./typeAutocomplete");

module.exports = bootstrap({
  testStringBasic: typeString.testStringBasic,
  testTextBasic: typeText.testTextBasic,
  testVaultBasic: typeVault.testVaultBasic,
  testOptionsBasic: typeOptions.testOptionsBasic,
  testBooleanBasic: typeBoolean.testBooleanBasic,
  testIntBasic: typeInt.testIntBasic,
  testAutocompleteBasic: typeAutocomplete.testAutocompleteBasic,
}, autocomplete);
