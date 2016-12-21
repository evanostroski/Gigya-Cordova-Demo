cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "es6-promise-plugin.Promise",
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "id": "cordova-plugin-gigya.gigyaClient",
        "file": "plugins/cordova-plugin-gigya/www/gigyaClient.js",
        "pluginId": "cordova-plugin-gigya",
        "clobbers": [
            "gigyaClient"
        ]
    },
    {
        "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
        "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
        "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "es6-promise-plugin": "3.0.2",
    "cordova-plugin-gigya": "1.0.0",
    "cordova-plugin-facebook4": "1.7.1"
};
// BOTTOM OF METADATA
});