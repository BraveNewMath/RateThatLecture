function msg(str, options) {
    var settings = $.extend({showAlert:false,clear:false}, options);
    if (console && console.log) console.log(msg);

    if (settings.clear) $('#msgDiv').html('');
    var now = new Date();
    var timeStr = now.getHours() + ':' + pad2(now.getMinutes()) + ':' + pad2(now.getSeconds()) + ' ';
    $('#msgDiv').prepend('* ' + timeStr + str + '<br>');
    if (settings.showAlert) {
        navigator.notification.alert(
            str, // message
            null, // callback
            'Rate That Khutba Says', // title
            'Done'                  // buttonName
        );
    } //settings.showAlert
}

function pad2(str) {
    var s = str + '';
    return (s.length == 1) ? '0' + s : s;
}