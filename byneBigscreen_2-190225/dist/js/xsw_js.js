var setIntervalK;
var swiper = new Swiper('.swiper-container', {
    loop: false, observer: true, on: {
        slideChangeTransitionStart: function () {
            clearInterval(setIntervalK)
            index = this.activeIndex
            document.querySelector(".swiper-wrapper").setAttribute('data-activeIndex', index)
            xsw_qeHuan(index)
        }, slideChangeTransitionEnd: function () {
            setIntervalK = null;
            setIntervalK = setInterval(function () {
                var activeIndex = document.querySelector(".swiper-wrapper").getAttribute('data-activeIndex')
                xsw_qeHuan(activeIndex)
                swiper.slideTo(activeIndex, 1000, false);
            }, 200)
        },
    },
});
window.onload = function () {
    var child = document.querySelector('.swiper-top').childNodes;
    for (let x = 0; x < child.length; x++) {
        if (child[x].nodeType == 1)
            child[x].setAttribute('onclick', 'xsw_xuanzhe(this)')
    }
    setIntervalK = setInterval(function () {
        var activeIndex = document.querySelector(".swiper-wrapper").getAttribute('data-activeIndex')
        xsw_qeHuan(activeIndex)
        swiper.slideTo(activeIndex, 1000, false);
    }, 200)
}

function xsw_qeHuan(index) {
    var child = document.querySelector('.swiper-top').childNodes;
    var xunClass;
    var seperArr = []
    for (var i = 0 in child) {
        if (child[i].nodeType == 1) {
            xunClass = child[i].getAttribute('data-xunClass')
            seperArr.push(child[i])
        }
    }
    for (var i = 0 in seperArr) {
        xsw_removeClass(seperArr[i], xunClass)
        if (index == parseInt(seperArr[i].getAttribute('data-index'))) {
            xsw_addClass(seperArr[i], xunClass)
        }
    }
}

function xsw_xuanzhe(obj) {
    var div = obj
    var thatIndex = div.getAttribute('data-index')
    var xunClass = div.getAttribute('data-xunClass')
    if (document.querySelector("." + xunClass)) {
        xsw_removeClass(document.querySelector("." + xunClass), xunClass)
    }
    xsw_addClass(div, xunClass)
    document.querySelector(".swiper-wrapper").setAttribute('data-activeIndex', thatIndex)
    swiper.slideTo(thatIndex, 1000, false);
}

function xsw_addClass(obj, cls) {
    var obj_class = obj.className, blank = (obj_class != '') ? ' ' : '';
    added = obj_class + blank + cls;
    obj.className = added;
}

function xsw_removeClass(obj, cls) {
    var obj_class = ' ' + obj.className + ' ';
    obj_class = obj_class.replace(/(\s+)/gi, ' '), removed = obj_class.replace(' ' + cls + ' ', ' ');
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');
    obj.className = removed;
}

function xsw_hasClass(obj, cls) {
    var obj_class = obj.className, obj_class_lst = obj_class.split(/\s+/);
    x = 0;
    for (x in obj_class_lst) {
        if (obj_class_lst[x] == cls) {
            return true;
        }
    }
    return false;
}