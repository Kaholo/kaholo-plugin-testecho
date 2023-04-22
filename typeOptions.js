async function testOptionsBasic(params, { settings }) {
  const {
    authOptions01,
    authOptions02,
    authOptions03,
    paramOptions01,
    paramOptions02,
    paramOptions03,
    testRunName,
  } = params;

  const d = new Date();
  const dateString = d.getFullYear() + (`0${d.getMonth() + 1}`).slice(-2) + (`0${d.getDate()}`).slice(-2) + (`0${d.getHours()}`).slice(-2) + (`0${d.getMinutes()}`).slice(-2);

  const result = {
    testRunName: testRunName || "undefined",
    dateString,
    params: {
      authOptions01: authOptions01 || "undefined",
      authOptions02: authOptions02 || "undefined",
      authOptions03: authOptions03 || "undefined",
      paramOptions01: paramOptions01 || "undefined",
      paramOptions02: paramOptions02 || "undefined",
      paramOptions03: paramOptions03 || "undefined",
      settingOptions01: settings.settingOptions01 || "undefined",
      settingOptions02: settings.settingOptions02 || "undefined",
      settingOptions03: settings.settingOptions03 || "undefined",
    },
  };

  console.error(`result: ${JSON.stringify(result)}`);

  return result;
}

module.exports = {
  testOptionsBasic,
};
