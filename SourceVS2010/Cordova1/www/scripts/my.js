/// <reference path="~/www/scripts/libs/knockout.js" />
/// <reference path="~/www/scripts/libs/jquery-1.7.1-vsdoc.js" />
/// <reference path="~/www/cordova-1.5.0.js" />

$(document).ready(function () {
    console.log('this is a message from my.js!!');

    document.addEventListener("deviceready", onDeviceReady, false);

    

});

// once the device ready event fires, you can safely do your thing! -jm
function onDeviceReady() {
    //document.getElementById("welcomeMsg").innerHTML += "Cordova is ready! version=" + window.device.cordova;
    $('#welcomeMsg').html("Cordova is ready! version=" + window.device.cordova);
    msg("onDeviceReady. You should see this message in Visual Studio's output window.");

}

function msg(str) {
    console.log(msg);
}
