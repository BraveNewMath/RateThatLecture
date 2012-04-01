(function() {
  var cfRate, r1;

  cfRate = (function() {
    var hello, world;

    function cfRate() {}

    hello = 5;

    world = hello + 66;

    alert("hello world");

    return cfRate;

  })();

  r1 = new cfRate;

}).call(this);
