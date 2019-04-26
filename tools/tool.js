var timer = null;
//需要先全局声明一个 timer 来接受定时器
function move(dom, distance) {
    //清理定时器
    clearInterval(timer);
    //setInterval  间隔一定的事件执行一个事件,会返回一个唯一标识 定时器
    timer = setInterval(function () {
        //动态确定是往左移动还是往右移动
        var speed = (distance - dom.offsetLeft) > 0 ? 3 : -3;
        //拿需要移动的 总距离  减去 已经移动的距离， 如果小于每次移动的距离 停止运动且直接移动到目标位置
        //判断的时候取绝对值 不管是正数还是负数
        if (Math.abs(distance - dom.offsetLeft) < Math.abs(speed)) {
            clearInterval(timer);
            dom.style.left = distance + 'px';
        }else {
            dom.style.left = dom.offsetLeft + speed + 'px';
        }
    }, 30)
}