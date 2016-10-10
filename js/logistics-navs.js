var LastLeftID = "";
function menuFix() {
    var obj = document.getElementById("main-nav").getElementsByTagName("li");
    for (var i = 0; i < obj.length; i++) {
        obj[i].onmouseover = function () {
            this.className += (this.className.length > 0 ? " " : "") + "sfhover";
        };
        obj[i].onmousedown = function () {
            this.className += (this.className.length > 0 ? " " : "") + "sfhover";
        };
        obj[i].onmouseup = function () {
            this.className += (this.className.length > 0 ? " " : "") + "sfhover";
        };
        obj[i].onmouseout = function () {
            this.className = this.className.replace(new RegExp("( ?|^)sfhover\\b"), "");
        }
    }
}
function DoMenu(emid) {
    var obj = document.getElementById(emid);
    obj.className = (obj.className.toLowerCase() == "expanded" ? "collapsed" : "expanded");
    if ((LastLeftID != "") && (emid != LastLeftID)) {
        document.getElementById(LastLeftID).className = "collapsed";
    }
    LastLeftID = emid;
}
function GetMenuID()
{
    var MenuID="";
    var _paramStr = new String(window.location.href);
    var _sharpPos = _paramStr.indexOf("#");

    if (_sharpPos >= 0 && _sharpPos < _paramStr.length - 1)
    {
        _paramStr = _paramStr.substring(_sharpPos + 1, _paramStr.length);
    }
    else
    {
        _paramStr = "";
    }

    if (_paramStr.length > 0)
    {
        var _paramArr = _paramStr.split("&");
        if (_paramArr.length>0)
        {
            var _paramKeyVal = _paramArr[0].split("=");
            if (_paramKeyVal.length>0)
            {
                MenuID = _paramKeyVal[1];
            }
        }
    }

    if(MenuID!="")
    {
        DoMenu(MenuID)
    }
}
GetMenuID();
menuFix();