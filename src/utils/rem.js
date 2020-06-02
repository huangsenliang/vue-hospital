/**
     * desc [在视图宽度小于minWidth时，设置html标签fontSize，使rem随窗口适配]
     */
var setHtmlSize = (function () {

    return function () {
        var clientWidth = document.body.clientWidth;
        document.body.style.width = clientWidth + "px";
    }
})()
setHtmlSize()
window.onresize = setHtmlSize