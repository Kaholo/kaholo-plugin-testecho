const fs = require("fs");

const configMain = JSON.parse(fs.readFileSync("./configMain.json"));
const configString = JSON.parse(fs.readFileSync("./configString.json"));
const configText = JSON.parse(fs.readFileSync("./configText.json"));
const configVault = JSON.parse(fs.readFileSync("./configVault.json"));
const configOptions = JSON.parse(fs.readFileSync("./configOptions.json"));
const configBoolean = JSON.parse(fs.readFileSync("./configBoolean.json"));
const configInt = JSON.parse(fs.readFileSync("./configInt.json"));
// const configAutocomplete = JSON.parse(fs.readFileSync("./configAutocomplete.json"));

const config = configMain;

config.auth.params = config.auth.params.concat(
  configString.auth.params,
  configText.auth.params,
  configVault.auth.params,
  configOptions.auth.params,
  configBoolean.auth.params,
  configInt.auth.params,
);
config.settings = config.settings.concat(
  configString.settings,
  configText.settings,
  configVault.settings,
  configOptions.settings,
  configBoolean.settings,
  configInt.settings,
);
config.methods = config.methods.concat(
  configString.methods,
  configText.methods,
  configVault.methods,
  configOptions.methods,
  configBoolean.methods,
  configInt.methods,
);

try {
  fs.writeFileSync("./config.json", JSON.stringify(config));
  // file written successfully
} catch (err) {
  console.error(err);
}
