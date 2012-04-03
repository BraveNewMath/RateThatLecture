/* 
/// <reference path="~/www/scripts/libs/knockout.js" />
/// <reference path="~/www/scripts/libs/jquery-1.7.1-vsdoc.js" />
/// <reference path="~/www/cordova-1.5.0.js" />
*/
var cfRate, r1;

cfRate = (function() {
  var $j, getLocationButton, msgDivSelector;

  function cfRate() {}

  $j = jQuery;

  msgDivSelector = $j('#msgDiv');

  getLocationButton = $j('#getcurrentLocationBtn');

  getLocationButton.live(function() {
    return msgDivSelector.html('workin on it buddy');
  });

  return cfRate;

})();

r1 = new cfRate;

