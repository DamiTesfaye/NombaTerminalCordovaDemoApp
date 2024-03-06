cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.nomba.cordova.plugin.NombaAndroidTerminalPlugin",
      "file": "plugins/com.nomba.cordova.plugin/www/NombaAndroidTerminalPlugin.js",
      "pluginId": "com.nomba.cordova.plugin",
      "clobbers": [
        "cordova.plugins.NombaAndroidTerminalPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "com.nomba.cordova.plugin": "1.0.0"
  };
});