var startDrag = function(bar, target, callback) {
    (function(bar, target, callback) {
        var params = {
            left: 0,
            top: 0,
            currentX: 0,
            currentY: 0,
            flag: false
        };
        bar.onmousedown = function(e){
            params.flag = true;
            params.left = target.offsetLeft;
            params.top = target.offsetTop;
            if(!e){
                e = window.event;
                bar.onselectstart = function(){
                    return false;
                }
            }
            params.currentX = e.clientX;
            params.currentY = e.clientY;
        };
        bar.onmouseup = function(){
            params.flag = false;
        };
        bar.onmousemove = function(e){
            var evt = e ? e: window.event;
            if(params.flag){
                var nowX = evt.clientX, nowY = evt.clientY;
                var disX = nowX - params.currentX, disY = nowY - params.currentY;
                target.style.left = parseInt(params.left) + disX + "px";
                target.style.top = parseInt(params.top) + disY + "px";
            }

            if (typeof callback == "function") {
                callback(parseInt(params.left) + disX, parseInt(params.top) + disY);
            }
        }
    })(bar, target, callback);
};