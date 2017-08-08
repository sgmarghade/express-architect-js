const fs = require('fs');
const path = require('path');

var loadAllPlugins = function () {
  console.log('Inside the load all plugins');

  const pluginList = [];
  fs.readdirSync(path.join(__dirname, '/src/plugins'))
    .forEach((pluginName) => {

      //U can read package file for more info.
      var packageFile = path.join(__dirname, '/src/plugins/', pluginName, 'package.json');

      try {
        let packageInfo = JSON.parse(fs.readFileSync(packageFile, {
          encoding: 'utf8'
        }));

        //You can push other config parameters which will be available as options in each plugin
        //Pass on or merge config variables with this obj
        var obj = {
          name: pluginName,
          packagePath: './src/plugins/' + pluginName
        };

        pluginList.push(obj);
      } catch (err) {
        throw new Error('Could not parse package.json');
      }
    });
  return pluginList;
}

module.exports = loadAllPlugins();
