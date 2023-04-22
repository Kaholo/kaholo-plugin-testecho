async function testAutocompleteBasic(params) {
  const {
    paramAutocomplete01,
    paramAutocomplete02,
    paramAutocomplete03,
    testRunName,
  } = params;

  const d = new Date();
  const dateString = d.getFullYear() + (`0${d.getMonth() + 1}`).slice(-2) + (`0${d.getDate()}`).slice(-2) + (`0${d.getHours()}`).slice(-2) + (`0${d.getMinutes()}`).slice(-2);

  const result = {
    testRunName: testRunName || "undefined",
    dateString,
    params: {
      paramAutocomplete01: paramAutocomplete01 || "undefined",
      paramAutocomplete02: paramAutocomplete02 || "undefined",
      paramAutocomplete03: paramAutocomplete03 || "undefined",
    },
  };

  console.error(`result: ${JSON.stringify(result)}`);

  return result;
}

module.exports = {
  testAutocompleteBasic,
};
