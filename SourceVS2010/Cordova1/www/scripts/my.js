/// <reference path="~/www/scripts/libs/knockout.js" />
/// <reference path="~/www/scripts/libs/jquery-1.7.1-vsdoc.js" />
/// <reference path="~/www/cordova-1.5.0.js" />
/// <reference path="~/www/scripts/jsConfig.js" />

$(document).ready(function () {


    //console.log('this is a message from my.js!!');
    //$('#welcomeMsg').html('this is a test of the emergency cordova system'); 
    document.addEventListener("deviceready", onDeviceReady, false);
    $('#msgDiv').html('');


});



// once the device ready event fires, you can safely do your thing! -jm
 function onDeviceReady() {
     
    //document.getElementById("welcomeMsg").innerHTML += "Cordova is ready! version=" + window.device.cordova;
    $('#welcomeMsg').html("Cordova is ready! version=" + window.device.cordova);
     msg('screen width & height: ');
    $('#getcurrentLocationBtn').click(getLocation);
    getLocation();
}

function msg(str) {
    if (console && console.log) console.log(msg);
    $('#msgDiv').append('* ' + str + '<br>');
}


function getLocation() {
    var onSuccess = function (position) {
        cfMap.drawMap(position.coords.latitude, position.coords.longitude);
        //        msg('Latitude: ' + position.coords.latitude + '\n' +
        //          'Longitude: ' + position.coords.longitude + '\n' +
        //          'Altitude: ' + position.coords.altitude + '\n' +
        //          'Accuracy: ' + position.coords.accuracy + '\n' +
        //          'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        //          'Heading: ' + position.coords.heading + '\n' +
        //          'Speed: ' + position.coords.speed + '\n' +
        //          'Timestamp: ' + new Date(position.timestamp) + '\n');
    };

    // onError Callback receives a PositionError object
    //
    var onError = function (error) {
        msg('Error code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}



var cfMap = {
    ///See this for interactive demo: http://www.bingmapsportal.com/ISDK/AjaxV7#CreateMapWithMapOptions9     
    map: {/*This is the container for the map object*/
},
drawMap: function (longitude, latitude) {
    var mapOptions = {
        credentials: jsConfig.bingMapKey,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
       // mapTypeId: Microsoft.Maps.MapTypeId.birdseye,
        center: new Microsoft.Maps.Location(longitude, latitude),
        zoom: 13
        //,labelOverlay: Microsoft.Maps.LabelOverlay.hidden  //hides street names
    };
    cfMap.map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), mapOptions);
    cfMap.addPushPin(longitude, latitude, 'You', true);
},
addPushPin: function (longitude, latitude, pinLbl, clearAll) {
    if (clearAll===true) cfMap.map.entities.clear();
    var offset = new Microsoft.Maps.Point(0, 5);
    var pushpinOptions = { /*icon: virtualPath + '/Content/poi_custom.png',*/text: pinLbl, visible: true, textOffset: offset };
    var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(longitude, latitude), pushpinOptions);
    //cfMap.map.setView({ center: new Microsoft.Maps.Location(47.6, -122.33), zoom: 10 });
    cfMap.map.entities.push(pushpin);
}
};
