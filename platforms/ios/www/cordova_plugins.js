cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.msopentech.authdialog/src/ios/authDialog.js",
        "id": "com.msopentech.authdialog.AuthDialog",
        "clobbers": [
            "window.authDialog"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.msopentech.authdialog": "0.1.0-dev"
}
// BOTTOM OF METADATA
});