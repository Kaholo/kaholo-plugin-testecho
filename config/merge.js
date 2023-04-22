const fs = require("fs");

const configMain = JSON.parse(fs.readFileSync("./configMain.json"));
const configString = JSON.parse(fs.readFileSync("./configString.json"));
const configText = JSON.parse(fs.readFileSync("./configText.json"));

let config = configMain;

config.auth.params = config.auth.params.concat(
  configString.auth.params, 
  configText.auth.params
)
config.settings = config.settings.concat(
  configString.settings, 
  configText.settings
)
config.methods = config.methods.concat(
  configString.methods, 
  configText.methods
)

try {
    fs.writeFileSync('./config.json', JSON.stringify(config));
    // file written successfully
  } catch (err) {
    console.error(err);
  }