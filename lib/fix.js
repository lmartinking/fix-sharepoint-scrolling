jQuery(document).ready( function ($) {

    var interval;
    function loopCheck() {
        if (typeof (_spBodyOnLoadWrapper) !== "undefined" && _spBodyOnLoadCalled == false) 
            _spBodyOnLoadWrapper();
         else 
            window.clearInterval(interval);
    }
    // Give SP a chance..
    setTimeout(function () { interval = window.setInterval(loopCheck, 30); }, 120);

} );
