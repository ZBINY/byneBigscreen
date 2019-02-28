/**公共部分js**/
$(function(){
    function setFontSize(){
        // 设计稿 750px
        var width = document.documentElement.clientWidth;
        var fontSize = (width / 1366) * 100;
        document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
    }

    $(window).on("resize",setFontSize);
    setFontSize();
});

//获取url
function getUrlParam(key) {
    // 获取参数
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}

//取消事件冒泡
function stopBubble(e) {
    if ( e && e.stopPropagation )
        e.stopPropagation();
    else
        window.event.cancelBubble = true;
}

//返回
$('.return_back').click(function () {
    window.history.go(-1);
    // window.location.replace(document.referrer);
});

//全市发展主体情况跳转
$('.swiper-slide:nth-child(1) .lft .lft_1').click(function () {
    window.location.href = './lnztzzSec.html';
});
//全市主体实时数据跳转
$('.swiper-slide:nth-child(1) .middle .middle_1 .msg-wrapper').click(function () {
   let _index = $(this).index();
   switch (_index){
       case 0:
           window.location.href = './lnztzzSec.html';
           break;
       case 1:
           window.location.href = './lnztzzSec.html';
           break;
       case 2:
           window.location.href = './xzscztSec.html';
           break;
       case 3:
           window.location.href = './xzscztSec.html';
           break;
   }
});
//市场主体产业分布情况跳转
$('.swiper-slide:nth-child(1) .rgt .rgt_1').click(function () {
    window.location.href = './scztcySec.html';
});
$('.swiper-slide:nth-child(1) .middle .middle_2').click(function () {
    window.location.href = './scztqySec.html';
});

//主体数据分析地图城市选择跳转gis
$('.swiper-slide:nth-child(1) .middle .middle_2').on('click','ul',function () {
    let _index = $(this).index();
    let areaName = decodeURIComponent($(this).find('.city').text());  //获取地区名称
    // console.log(areaName);
});


//天赋河套二级
if(getUrlParam('company')){
    $('.tfht .companyName').html(getUrlParam('company'));
    let _year = getUrlParam('year');
    $('.tfht #years').find('option[value = '+ _year +']').attr('selected','selected');
}

