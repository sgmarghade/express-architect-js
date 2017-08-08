/**
 * Most of the business login , initialisations and exports will be in plugin directory which other plugin can easily consume. 
 * @type {*|exports|module.exports}
 */
var architect = require('architect');
var path = require('path');
var express = require('express');

console.log('Starting the app...!');

//Architect js expect config loader as file which it can call require() on.
architect.loadConfig(path.join(__dirname, 'plugin-loader.js'), function (err, loadedPlugins) {
  //loadedPlugins is list of all plugins which needs to be pass on to createApp.
  //You can optionally filter out few plugins if required.
  architect.createApp(loadedPlugins, (err, architectInstance) => {

    //Load server here..
    var app = express();

    //Instanciate routes.
    app.use('/api/orders', architectInstance.services.orderRoutes);

    app.listen(process.env.PORT || 3030);

    console.log('server started on port', 3030);
    console.log('Go ahead and hit api http://localhost:3030/api/orders');
  });
});
