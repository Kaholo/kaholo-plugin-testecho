async function testVaultBasic(params, { settings }) {
  const {
    authVault01,
    authVault02,
    authVault03,
    paramVault01,
    paramVault02,
    paramVault03,
    testRunName,
  } = params;

  const d = new Date();
  const dateString = d.getFullYear() + (`0${d.getMonth() + 1}`).slice(-2) + (`0${d.getDate()}`).slice(-2) + (`0${d.getHours()}`).slice(-2) + (`0${d.getMinutes()}`).slice(-2);

  const result = {
    testRunName: testRunName || "undefined",
    dateString,
    params: {
      authVault01: authVault01 || "undefined",
      authVault02: authVault02 || "undefined",
      authVault03: authVault03 || "undefined",
      paramVault01: paramVault01 || "undefined",
      paramVault02: paramVault02 || "undefined",
      paramVault03: paramVault03 || "undefined",
      settingVault01: settings.settingVault01 || "undefined",
      settingVault02: settings.settingVault02 || "undefined",
      settingVault03: settings.settingVault03 || "undefined",
    },
  };

  console.error(`result: ${JSON.stringify(result)}`);

  return result;
}

module.exports = {
  testVaultBasic,
};
