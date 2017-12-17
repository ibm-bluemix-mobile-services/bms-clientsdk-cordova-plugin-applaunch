var exec = require('cordova/exec');

var IBMAppLaunch = function () {
    const IBMAppLaunchString = "AppLaunchPlugin";
    var success = function (message) {
        console.log(IBMAppLaunchString + ": Success: " + message);
    };
    var failure = function (message) {
        console.log(IBMAppLaunchString + ": Failure: " + message);
    };

    this.initialize = function (appRegion, appGuid, clientSecret) {
        cordova.exec(success, failure, IBMAppLaunchString, "initialize", [appRegion, appGuid, clientSecret]);
    };
};

module.exports = new IBMAppLaunch();