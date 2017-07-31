(function (doc, win) {
    let docE1 = doc.documentElement ;
        resizeEvt = 'orientationchange' in window ? 'reientationchange' : 'resize' ;
        recalc = function () {
            let clientWidth = docE1.clientWidth ;
            if (!clientWidth) return ;
            docE1.style.fontSize = 100 * (clientWidth / 750) + 'px' ;
        };
        if (!doc.addEventListener) return ;
        win.addEventListener(resizeEvt, recalc , false);
        doc.addEventListener( 'DOMContentLoaded', recalc,false)

})(document, window)
