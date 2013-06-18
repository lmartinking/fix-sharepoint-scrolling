//via http://withinsharepoint.com/archives/256

function _loadsp() {
    var interval;
    function loopCheck() {
        if (typeof (_spBodyOnLoadWrapper) !== "undefined" && _spBodyOnLoadCalled == false) {
            console.log('applying sharepoint fix');
            _spBodyOnLoadWrapper();
        }else{ 
            window.clearInterval(interval);
        }
    }
    // Give SP a chance..
    setTimeout(function () { interval = window.setInterval(loopCheck, 30); }, 120);
}
_loadsp();