async function testTextBasic(params, { settings }) {
  const {
    authText01,
    authText02,
    authText03,
    paramText01,
    paramText02,
    paramText03,
    testRunName,
  } = params;

  const d = new Date();
  const dateString = d.getFullYear() + (`0${d.getMonth() + 1}`).slice(-2) + (`0${d.getDate()}`).slice(-2) + (`0${d.getHours()}`).slice(-2) + (`0${d.getMinutes()}`).slice(-2);

  const result = {
    testRunName: testRunName || "undefined",
    dateString,
    params: {
      authText01: authText01 || "undefined",
      authText02: authText02 || "undefined",
      authText03: authText03 || "undefined",
      paramText01: paramText01 || "undefined",
      paramText02: paramText02 || "undefined",
      paramText03: paramText03 || "undefined",
      settingText01: settings.settingText01 || "undefined",
      settingText02: settings.settingText02 || "undefined",
      settingText03: settings.settingText03 || "undefined",
    },
  };

  console.error(`result: ${JSON.stringify(result)}`);

  return result;
}

module.exports = {
  testTextBasic,
};
