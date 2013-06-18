function injectScript(source)
{
    var elem = document.createElement("script");
    elem.type = "text/javascript";
    elem.src= source;
    return document.head.appendChild(elem);
}

injectScript("https://gist.github.com/leeahoward/5806169/raw/11f1ce01c848b16297d4b9c616320f90f53605a4/SP2010-chromeScrollingFix");
