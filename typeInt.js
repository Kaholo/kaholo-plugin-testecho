async function testIntBasic(params, { settings }) {
  const {
    authInt01,
    authInt02,
    authInt03,
    paramInt01,
    paramInt02,
    paramInt03,
    testRunName,
  } = params;

  const d = new Date();
  const dateString = d.getFullYear() + (`0${d.getMonth() + 1}`).slice(-2) + (`0${d.getDate()}`).slice(-2) + (`0${d.getHours()}`).slice(-2) + (`0${d.getMinutes()}`).slice(-2);

  const result = {
    testRunName: testRunName || "undefined",
    dateString,
    params: {
      authInt01: authInt01 || "undefined",
      authInt02: authInt02 || "undefined",
      authInt03: authInt03 || "undefined",
      paramInt01: paramInt01 || "undefined",
      paramInt02: paramInt02 || "undefined",
      paramInt03: paramInt03 || "undefined",
      settingInt01: settings.settingInt01 || "undefined",
      settingInt02: settings.settingInt02 || "undefined",
      settingInt03: settings.settingInt03 || "undefined",
    },
  };

  console.error(`result: ${JSON.stringify(result)}`);

  return result;
}

module.exports = {
  testIntBasic,
};
