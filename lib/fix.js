function injectScript(source)
{
    var elem = document.createElement("script");
    elem.type = "text/javascript";
    elem.src= source;
    return document.head.appendChild(elem);
}

injectScript("https://raw.github.com/leeahoward/fix-sharepoint-scrolling/master/lib/loadSp.js");
