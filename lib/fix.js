function injectScript(source)
{
    var elem = document.createElement("script");
    elem.type = "text/javascript";
    elem.src= source;
    return document.head.appendChild(elem);
}
