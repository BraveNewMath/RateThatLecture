### 
/// <reference path="~/www/scripts/libs/knockout.js" />
/// <reference path="~/www/scripts/libs/jquery-1.7.1-vsdoc.js" />
/// <reference path="~/www/cordova-1.5.0.js" />
###
class cfRate
	
	#Using $j instead of just $ to be more specific
	$j = jQuery

	#Storing page elements to local variables
	msgDivSelector = $j '#msgDiv'
	getLocationButton = $j '#getcurrentLocationBtn'
	
	#load location from javascript
	getLocationButton.live -> 
		msgDivSelector.html 'workin on it buddy'
r1 = new cfRate	 
#r1();