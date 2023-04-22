async function testStringBasic(params, { settings }) {
  const {
    authString01,
    authString02,
    authString03,
    paramString01,
    paramString02,
    paramString03,
    testRunName,
  } = params;

  const d = new Date();
  const dateString = d.getFullYear() + (`0${d.getMonth() + 1}`).slice(-2) + (`0${d.getDate()}`).slice(-2) + (`0${d.getHours()}`).slice(-2) + (`0${d.getMinutes()}`).slice(-2);

  const result = {
    testRunName: testRunName || "undefined",
    dateString,
    params: {
      authString01: authString01 || "undefined",
      authString02: authString02 || "undefined",
      authString03: authString03 || "undefined",
      paramString01: paramString01 || "undefined",
      paramString02: paramString02 || "undefined",
      paramString03: paramString03 || "undefined",
      settingString01: settings.settingString01 || "undefined",
      settingString02: settings.settingString02 || "undefined",
      settingString03: settings.settingString03 || "undefined",
    },
  };

  console.error(`result: ${JSON.stringify(result)}`);

  return result;
}

module.exports = {
  testStringBasic,
};
