async function testBooleanBasic(params, { settings }) {
  const {
    authBoolean01,
    authBoolean02,
    authBoolean03,
    paramBoolean01,
    paramBoolean02,
    paramBoolean03,
    testRunName,
  } = params;

  const d = new Date();
  const dateString = d.getFullYear() + (`0${d.getMonth() + 1}`).slice(-2) + (`0${d.getDate()}`).slice(-2) + (`0${d.getHours()}`).slice(-2) + (`0${d.getMinutes()}`).slice(-2);

  const result = {
    testRunName: testRunName || "undefined",
    dateString,
    params: {
      authBoolean01: authBoolean01 || "undefined",
      authBoolean02: authBoolean02 || "undefined",
      authBoolean03: authBoolean03 || "undefined",
      paramBoolean01: paramBoolean01 || "undefined",
      paramBoolean02: paramBoolean02 || "undefined",
      paramBoolean03: paramBoolean03 || "undefined",
      settingBoolean01: settings.settingBoolean01 || "undefined",
      settingBoolean02: settings.settingBoolean02 || "undefined",
      settingBoolean03: settings.settingBoolean03 || "undefined",
    },
  };

  console.error(`result: ${JSON.stringify(result)}`);

  return result;
}

module.exports = {
  testBooleanBasic,
};
