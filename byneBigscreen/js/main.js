$('.box').css({'height':$(window).height()});
clearInterval(time); //清空产品抽检计时器
// 头部分类tab切换
$('.title-content p').click(function(){
	$(this).siblings().removeClass('p1');
	$(this).siblings().removeClass('p2');
	$('.nav-wrapper p').removeClass('show');//二级标题选中样式清除
	$('.nav-wrapper0 p').eq(0).addClass('show');
	$('.nav-wrapper1 p').eq(0).addClass('show');
	$('.nav-wrapper2 p').eq(0).addClass('show');
	var _index = $(this).index();
	// console.log(_index);
	//p1 p2为头部标题选中状态
	if (_index==0 || _index==1) {
		$(this).addClass('p1');
	}else{
		$(this).addClass('p2');
	}

	if (_index == 0) {
		$('.nav-wrapper').hide();
		$('.nav-wrapper0').show();
		$('.middle-wrapper .title .stress').html('主体地区分布'); //默认二级标题第一个内容展示
		$('.byneBigscreen-rgt .title:eq(0) .stress').html('【线下投诉&举报】');
	}else if (_index == 1) {
		$('.nav-wrapper').hide();
		$('.nav-wrapper1').show();
		$('.middle-wrapper .title .stress').html('主体地区分布'); //默认二级标题第一个内容展示
		$('.byneBigscreen-rgt .title:eq(0) .stress').html('【线上投诉&举报】');
	}else if (_index == 2) {
		$('.nav-wrapper').hide();
		$('.nav-wrapper2').show();
		$('.middle-wrapper .title .stress').html('年度检查分布'); //默认二级标题第一个内容展示
		$('.byneBigscreen-rgt .title:eq(0) .stress').html('【投诉&举报】');
        $('.byneBigscreen-rgt .title:eq(0) .stress').html('【线下投诉&举报】');
	}else{
		$('.nav-wrapper').hide();	
		$('.middle-wrapper .title .stress').html('商标申请情况');
		$('.byneBigscreen-rgt .title:eq(0) .stress').html('【投诉&举报】');
        $('.byneBigscreen-rgt .title:eq(0) .stress').html('【线下投诉&举报】');
	}


	var _index = $(this).index();
	//map地图上面data  数据在data.js里面更改
	$('.map .pic').find('.map-data').css({top:'33%',left:'33%'});
	switch (_index){
		case 0:
			$.each(titleName[_index].firstClassTitle.branch[0].mapData,function(i,arr){
				$('.map .pic').eq(i).find('.map-data').html('<p class="stress">'+ arr.areaTotal +'</p><p>'+ arr.areaName +'</p>')
			});
			$('.bottom-table table').hide();
			$('.bottom-table .fir-0').show();//地图下方的table
			break;
		case 1:
			$.each(titleName[_index].firstClassTitle.mapData,function(i,arr){
				$('.map .pic').eq(i).find('.map-data').html('<p class="stress">'+ arr.areaTotal +'</p><p class="stress">'+ arr.priceNum +'</p><p class="stress">'+ arr.price +'</p><p>'+ arr.areaName +'</p>')
			});
			$('.bottom-table table').hide();
			$('.bottom-table .fir-0').show();//地图下方的table
			break;
		case 2:
			$.each(titleName[_index].firstClassTitle.branch[0].mapData,function(i,arr){
				$('.map .pic').eq(i).find('.map-data').html('<p class="stress">'+ arr.areaTotal +'</p><p>'+ arr.areaName +'</p>')
			});
			$('.bottom-table table').hide();
			$('.bottom-table .thir-0').show();//地图下方的table
			break;
		case 3:
			$.each(titleName[_index].firstClassTitle.mapData,function(i,arr){
				$('.map .pic').eq(i).find('.map-data').html('<p class="stress">'+ arr.areaTotal +'</p><p>'+ arr.areaName +'</p>')
			});
			$('.bottom-table table').hide();
			$('.bottom-table .fourth-0').show();//地图下方的table
			break;
	}
});

// 二级标题tab切换
$('.nav-wrapper p').click(function(){
	$(this).siblings().removeClass('show');
	$(this).addClass('show');
	$('.middle-wrapper .title .stress').html($(this).html());
})

//商品抽检内容展示，默认展示index为4的数据
for (var i = 0;i<cyjc.length;i++) {
	$('.lft3-bottom li').eq(i).html(cyjc[i].name);
	$('.lft3-zrws p:nth-child(2)').html(cyjc[4].total);
	$('.lft3-top .wcs li:nth-child(1) span:nth-child(2)').html(cyjc[4].pass);
	$('.lft3-top .wcs li:nth-child(2) span:nth-child(1)').html('完成数：'+ cyjc[4].compeletNum);
	$('.lft3-top .wcs li:nth-child(2) span:nth-child(2)').html('完成率：'+ cyjc[4].compeletRate);
	$('.lft3-top .wcs li:nth-child(3) span:nth-child(2)').html(cyjc[4].fail);
}
// 商品抽检tab切换
// $('.lft3-bottom li').click(function(){
// 	var _index = $(this).index();
// 	$(this).siblings().removeClass('show');
// 	$(this).addClass('show');
// 	$('.lft3-bottom li').eq(_index).html(cyjc[_index].name);
// 	$('.lft3-zrws p:nth-child(2)').html(cyjc[_index].total);
// 	$('.lft3-top .wcs li:nth-child(1) span:nth-child(2)').html(cyjc[_index].pass);
// 	$('.lft3-top .wcs li:nth-child(2) span:nth-child(1)').html('完成数：'+ cyjc[_index].compeletNum);
// 	$('.lft3-top .wcs li:nth-child(2) span:nth-child(2)').html('完成率：'+ cyjc[_index].compeletRate);
// 	$('.lft3-top .wcs li:nth-child(3) span:nth-child(2)').html(cyjc[_index].fail);
// });
var flag = false
//商品抽检随机显示
var time = setInterval(function(){
	var _index = Math.round(Math.random()*4);
	var cyjc_index = Math.floor(Math.random() * 12);
	for (var i = 0;i<5;i++) {
		var html = $('.lft3-bottom li').eq(i).html();
		// console.error('html',html)
		// console.log(cyjc[cyjc_index].name)
		if (cyjc[cyjc_index].name != html ) {
			flag = true	
		}else{
			flag = false
			return;
		}		
	}
	if (flag) {
		$('.lft3-bottom li').removeClass('show');
		$('.lft3-bottom li').eq(_index).addClass('show');
		$('.lft3-bottom li').eq(_index).html(cyjc[cyjc_index].name);
		$('.lft3-zrws p:nth-child(2)').html(cyjc[cyjc_index].total);
		$('.lft3-top .wcs li:nth-child(1) span:nth-child(2)').html(cyjc[cyjc_index].pass);
		$('.lft3-top .wcs li:nth-child(2) span:nth-child(1)').html('完成数：'+ cyjc[cyjc_index].compeletNum);
		$('.lft3-top .wcs li:nth-child(2) span:nth-child(2)').html('完成率：'+ cyjc[cyjc_index].compeletRate);
		$('.lft3-top .wcs li:nth-child(3) span:nth-child(2)').html(cyjc[cyjc_index].fail);
	}
	
},1500);

//投诉排名滚动
var scrollTimer ,scrollTimer2;
var tabs1 = tabs2 = 0; //商品和服务自动切换flag
$('.table-wrapper2:eq(0) tbody').hover(function () {
    clearInterval(scrollTimer);
}, function () {
    scrollTimer = setInterval(function () {
        scrollNews($('.table-wrapper2:eq(0)'));
        tabs1++;
        // console.log('tabs1',tabs1)
		if (tabs1 == 20) {
			$('.rgb-con-tab').eq(0).removeClass('rgb-con-tabs');
			$('.rgb-con-tab').eq(1).addClass('rgb-con-tabs');
			$('.table-wrapper2').hide();
			$('.table-wrapper2').eq(1).show();
			tabs2 = 0;
		}

    }, 1500);
}).trigger("mouseleave");

$('.table-wrapper2:eq(1) tbody').hover(function () {
    clearInterval(scrollTimer2);
}, function () {
    scrollTimer2 = setInterval(function () {
        scrollNews($('.table-wrapper2:eq(1)'));
        tabs2++;
        // console.log('tabs2',tabs2)
		if ( tabs2 == 20) {
			$('.rgb-con-tab').eq(1).removeClass('rgb-con-tabs');
			$('.rgb-con-tab').eq(0).addClass('rgb-con-tabs');
			$('.table-wrapper2').hide();
			$('.table-wrapper2').eq(0).show();
			tabs1 = 0;
		}
    }, 1500);
}).trigger("mouseleave");

function scrollNews(obj) {
    var $self = obj.find("table tbody");
    var lineHeight = $self.find("tr:first").height();
    $self.animate({
        "marginTop": -lineHeight + "px"
    }, 600, function () {
        $self.css({
            marginTop: 0
        }).find("tr:first").appendTo($self);
    })
}

//投诉排名tab切换
// $('.rgb-con-tab').click(function(){
// 	$(this).addClass('rgb-con-tabs');
// 	$(this).siblings().removeClass('rgb-con-tabs');
// 	$('.table-wrapper2').hide();
// 	$('.table-wrapper2').eq($(this).index()-1).show();
// })


//map上面的区域及数量
//默认 市场主体分布 主体地区分布显示
$.each(titleName[0].firstClassTitle.branch[0].mapData,function(i,arr){
	$('.map .pic').eq(i).find('.map-data').html('<p class="stress">'+ arr.areaTotal +'</p><p>'+ arr.areaName +'</p>')
});

// 市场主体分布  二级菜单
$('.nav-wrapper0 p').click(function(){
	var _index = $(this).index();
	$.each(titleName[0].firstClassTitle.branch[_index].mapData,function(i,arr){
		$('.map .pic').eq(i).find('.map-data').html('<p class="stress">'+ arr.areaTotal +'</p><p>'+ arr.areaName +'</p>')
	});
	$('.bottom-table table').hide();  //地图下方的table
	$('.bottom-table .fir-'+ _index +'').show();
});

// 网络交易分析  二级菜单
$('.nav-wrapper1 p').click(function(){
	var _index = $(this).index();	
	if (_index == 3) {
		$.each(titleName[1].firstClassTitle.branch[_index].mapData,function(i,arr){
			$('.map .pic').eq(i).find('.map-data').html('<p class="stress">'+ arr.areaTotal +'</p><p class="stress">'+ arr.priceNum +'</p><p class="stress">'+ arr.price +'</p><p>'+ arr.areaName +'</p>');
		});
        $('.map .pic').eq(0).find('.map-data').css({top:'0px'});
        $('.map .pic').eq(1).find('.map-data').css({top:'-4%',left:'51%'});
        $('.map .pic').eq(3).find('.map-data').css({top:'17%',left:'7%'});
        $('.map .pic').find('.map-data .stress').css({fontSize:'12px'});
		$('.bottom-table table').hide();  //地图下方的table
		$('.bottom-table .sec-0').show();
	}else{
		$.each(titleName[1].firstClassTitle.branch[_index].mapData,function(i,arr){
			$('.map .pic').eq(i).find('.map-data').html('<p class="stress">'+ arr.areaTotal +'</p><p>'+ arr.areaName +'</p>')
		});
        $('.map .pic').eq(0).find('.map-data').css({top:'33%'});
        $('.map .pic').eq(1).find('.map-data').css({top:'33%',left:'33%'});
        $('.map .pic').eq(3).find('.map-data').css({top:'33%',left:'33%'});
        $('.map .pic').find('.map-data .stress').css({fontSize:'14px'});
		$('.bottom-table table').hide();  //地图下方的table
		$('.bottom-table .fir-'+ _index +'').show();
	}
	
});

// 综合执法  二级菜单
$('.nav-wrapper2 p').click(function(){
	var _index = $(this).index();
	$.each(titleName[2].firstClassTitle.branch[_index].mapData,function(i,arr){
		$('.map .pic').eq(i).find('.map-data').html('<p class="stress">'+ arr.areaTotal +'</p><p>'+ arr.areaName +'</p>');
	});
	$('.bottom-table table').hide();  //地图下方的table
	$('.bottom-table .thir-'+ _index +'').show();
});

//弹窗
//弹窗关闭
$('.alertBox').on('click','.close',function(){
	$('.alertBox').hide();
})

//弹窗
$('.map .pic').click(function(){
	var _index = $(this).index();

	//市场主体分布
	if($('.title-content p:eq(0)').hasClass('p1')){
		$('.alertBox').css('top','16%');

		//--主体类型分布
		if ($('.nav-wrapper0 p:eq(1)').hasClass('show')){
			$('.alertBox').show();
			$('.alertBox').html(
				'<i class="close"></i>'+
				'<h2>'+ ztlxfb[_index].title+'</h2>'+
				'<p><span class="name">总量：</span><span class="num yellow">'+ztlxfb[_index].total+'</span></p>'+
				'<p><span class="name">内资（非私营）：</span><span class="num">'+ ztlxfb[_index].nzfsy +'</span></p>'+
                '<p><span class="name">内资（私营）：</span><span class="num">'+ ztlxfb[_index].nzsy +'</span></p>'+
                '<p><span class="name">外资：</span><span class="num">'+ ztlxfb[_index].wz +'</span></p>'+
                '<p><span class="name">农合：</span><span class="num">'+ ztlxfb[_index].nh +'</span></p>'+
                '<p><span class="name">集团：</span><span class="num">'+ ztlxfb[_index].jt +'</span></p>'+
                '<p><span class="name">个体：</span><span class="num">'+ ztlxfb[_index].gt +'</span></p>'
			)
		}else if ($('.nav-wrapper0 p:eq(2)').hasClass('show')) {
			//--主体年报分布
			$('.alertBox').show();
			$('.alertBox').html(
				'<i class="close"></i>'+
				'<h2>'+ ztnbfb[_index].title+'</h2>'+
				'<p><span class="name">总量：</span><span class="num yellow">'+ztnbfb[_index].total+'</span></p>'+
				'<p><span class="name">内资（非私营）：</span><span class="num">'+ ztnbfb[_index].nzfsy +'</span></p>'+
                '<p><span class="name">内资（私营）：</span><span class="num">'+ ztnbfb[_index].nzsy +'</span></p>'+
                '<p><span class="name">外资：</span><span class="num">'+ ztnbfb[_index].wz +'</span></p>'+
                '<p><span class="name">农合：</span><span class="num">'+ ztnbfb[_index].nh +'</span></p>'+
                '<p><span class="name">集团：</span><span class="num">'+ ztnbfb[_index].jt +'</span></p>'+
                '<p><span class="name">个体：</span><span class="num">'+ ztnbfb[_index].gt +'</span></p>'+
                '<p><span class="name">其他：</span><span class="num">'+ ztnbfb[_index].other +'</span></p>'
			)
		}else{
			//--主体地区分布
			$('.alertBox').show();
			$('.alertBox').html(
				'<i class="close"></i>'+
				'<h2>'+ ztdqfb[_index].title+'</h2>'+
				'<p><span class="name">总量：</span><span class="num yellow">'+ztdqfb[_index].total+'</span></p>'
                // '<p><span class="name">内资（非私营）：</span><span class="num">'+ ztdqfb[_index].nzfsy +'</span></p>'+
                // '<p><span class="name">内资（私营）：</span><span class="num">'+ ztdqfb[_index].nzsy +'</span></p>'+
                // '<p><span class="name">外资：</span><span class="num">'+ ztdqfb[_index].wz +'</span></p>'+
                // '<p><span class="name">农合：</span><span class="num">'+ ztdqfb[_index].nh +'</span></p>'+
                // '<p><span class="name">集团：</span><span class="num">'+ ztdqfb[_index].jt +'</span></p>'+
                // '<p><span class="name">个体：</span><span class="num">'+ ztdqfb[_index].gt +'</span></p>'
			)
		}
	}

	//网络交易分析
	if ($('.title-content p:eq(1)').hasClass('p1')) {
        //--主体类型分布
        if ($('.nav-wrapper1 p:eq(1)').hasClass('show')){
            $('.alertBox').show();
            $('.alertBox').html(
                '<i class="close"></i>'+
                '<h2>'+ wlztlxfb[_index].title+'</h2>'+
                '<p><span class="name">总量：</span><span class="num yellow">'+wlztlxfb[_index].total+'</span></p>'+
                '<p><span class="name">内资（非私营）：</span><span class="num">'+ wlztlxfb[_index].nzfsy +'</span></p>'+
                '<p><span class="name">内资（私营）：</span><span class="num">'+ wlztlxfb[_index].nzsy +'</span></p>'+
                '<p><span class="name">外资：</span><span class="num">'+ wlztlxfb[_index].wz +'</span></p>'+
                '<p><span class="name">农合：</span><span class="num">'+ wlztlxfb[_index].nh +'</span></p>'+
                '<p><span class="name">集团：</span><span class="num">'+ wlztlxfb[_index].jt +'</span></p>'+
                '<p><span class="name">个体：</span><span class="num">'+ wlztlxfb[_index].gt +'</span></p>'
            )
        }else if ($('.nav-wrapper1 p:eq(2)').hasClass('show')) {
            //--主体年报分布
            $('.alertBox').show();
            $('.alertBox').html(
                '<i class="close"></i>'+
                '<h2>'+ wlztnbfb[_index].title+'</h2>'+
                '<p><span class="name">总量：</span><span class="num yellow">'+wlztnbfb[_index].total+'</span></p>'+
                '<p><span class="name">内资（非私营）：</span><span class="num">'+ wlztnbfb[_index].nzfsy +'</span></p>'+
                '<p><span class="name">内资（私营）：</span><span class="num">'+ wlztnbfb[_index].nzsy +'</span></p>'+
                '<p><span class="name">外资：</span><span class="num">'+ wlztnbfb[_index].wz +'</span></p>'+
                '<p><span class="name">农合：</span><span class="num">'+ wlztnbfb[_index].nh +'</span></p>'+
                '<p><span class="name">集团：</span><span class="num">'+ wlztnbfb[_index].jt +'</span></p>'+
                '<p><span class="name">个体：</span><span class="num">'+ wlztnbfb[_index].gt +'</span></p>'+
                '<p><span class="name">其他：</span><span class="num">'+ wlztnbfb[_index].other +'</span></p>'
            )
        }else if($('.nav-wrapper1 p:eq(0)').hasClass('show')){
            //--主体地区分布
            $('.alertBox').show();
            $('.alertBox').html(
                '<i class="close"></i>'+
                '<h2>'+ wlztdqfb[_index].title+'</h2>'+
                '<p><span class="name">总量：</span><span class="num yellow">'+wlztdqfb[_index].total+'</span></p>'
                // '<p><span class="name">内资（非私营）：</span><span class="num">'+ wlztdqfb[_index].nzfsy +'</span></p>'+
                // '<p><span class="name">内资（私营）：</span><span class="num">'+ wlztdqfb[_index].nzsy +'</span></p>'+
                // '<p><span class="name">外资：</span><span class="num">'+ wlztdqfb[_index].wz +'</span></p>'+
                // '<p><span class="name">农合：</span><span class="num">'+ wlztdqfb[_index].nh +'</span></p>'+
                // '<p><span class="name">集团：</span><span class="num">'+ wlztdqfb[_index].jt +'</span></p>'+
                // '<p><span class="name">个体：</span><span class="num">'+ wlztdqfb[_index].gt +'</span></p>'
            )
        }else{
        	//网络交易分析
            $('.alertBox').show();
            $('.alertBox').html(
                '<i class="close"></i>'+
                '<h2>'+ wljyfx[_index].title+'</h2>'+
                '<p><span class="name">企业总量：</span><span class="num">'+wljyfx[_index].entTotal+'</span></p>'+
                '<p><span class="name">主体交易量：</span><span class="num">'+ wljyfx[_index].priceNum +'</span></p>'+
                '<p><span class="name">交易额：</span><span class="num">'+ wljyfx[_index].price
                +'</span></p>'
            );
		}
	}

	//综合执法
	if($('.title-content p:eq(2)').hasClass('p2')){
		$('.alertBox').css('top','31%');

		//--年度检查分布
		if ($('.nav-wrapper2 p:eq(0)').hasClass('show')){
			$('.alertBox').show();
			$('.alertBox').html(
				'<i class="close"></i>'+
				'<h2>'+ ndjctj[_index].title+'</h2>'+
				'<p><span class="name">检查量：</span><span class="num yellow">'+ndjctj[_index].total+'</span></p>'
			)
		}else if ($('.nav-wrapper2 p:eq(1)').hasClass('show')) {
			//--年度案件分布
			$('.alertBox').show();
			$('.alertBox').html(
				'<i class="close"></i>'+
				'<h2>'+ ndajtj[_index].title+'</h2>'+
				'<p><span class="name">检查量：</span><span class="num yellow">'+ndajtj[_index].total+'</span></p>'
			)
		}else if ($('.nav-wrapper2 p:eq(2)').hasClass('show')){
			//--广告类检查分布
			$('.alertBox').show();
			$('.alertBox').html(
				'<i class="close"></i>'+
				'<h2>'+ ggljctj[_index].title+'</h2>'+
				'<p><span class="name">检查量：</span><span class="num yellow">'+ggljctj[_index].total+'</span></p>'
			)
		}else if ($('.nav-wrapper2 p:eq(3)').hasClass('show')){
			//--商标类检查分布
			$('.alertBox').show();
			$('.alertBox').html(
				'<i class="close"></i>'+
				'<h2>'+ sbljctj[_index].title+'</h2>'+
				'<p><span class="name">检查量：</span><span class="num yellow">'+sbljctj[_index].total+'</span></p>'
			)
		}		
	}

	//商标申请情况
	if ($('.title-content p:eq(3)').hasClass('p2')) {
		$('.alertBox').show();
		$('.alertBox').css('top','31%');

		$('.alertBox').html(
			'<i class="close"></i>'+
			'<h2>'+ spsqqk[_index].title+'</h2>'+
			'<p><span class="name">商标申请：</span><span class="num">'+spsqqk[_index].brandApply+'</span></p>'+
			'<p><span class="name">全市占比：</span><span class="num">'+ spsqqk[_index].rate +'</span></p>'
		);
	}
})


