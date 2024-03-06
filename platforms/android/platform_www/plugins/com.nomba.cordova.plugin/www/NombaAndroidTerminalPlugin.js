cordova.define("com.nomba.cordova.plugin.NombaAndroidTerminalPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.terminalRequest = function (arg0, success, error) {
    exec(success, error, 'NombaAndroidTerminalPlugin', 'terminalRequest', [arg0]);
};

});
