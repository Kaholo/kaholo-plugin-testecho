const { bootstrap } = require("@kaholo/plugin-library");

async function testStringSettingsAndAccounts(params, { settings }) {
  const {
    authString01,
    authString02,
    authString03,
    testRunName,
  } = params;

  const d = new Date();
  const dateString = d.getFullYear() + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2) + ("0" + d.getHours()).slice(-2) + ("0" + d.getMinutes()).slice(-2);

  const result = {
    "testRunName" : testRunName,
    "dateString": dateString,
    "params": {
      "authString01": authString01,
      "authString02": authString02,
      "authString03": authString03,
      "settingString01": settings.settingString01,
      "settingString02": settings.settingString02,
      "settingString03": settings.settingString03
    }
  }

  return result;
}

module.exports = bootstrap({
  testStringSettingsAndAccounts,
});