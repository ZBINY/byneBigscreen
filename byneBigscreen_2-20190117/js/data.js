//主体总量
var ztzl = {
    cityName:['临河区','五原区','磴口县','杭锦后旗','乌拉特前旗','乌拉特中旗','乌拉特后旗'],
    xxAmount:[39187,14685,6860,11919,17728,10073,4493],
    xsAmount:['-','-','-','-','-','-','-']
};

$.each(ztzl.cityName,function (i,v) {
    $('.middle .middle_2').append('<ul>' +
        '<li class="city">'+ v + '</li>' +
        '<li class="xx"><i></i>' + ztzl.xxAmount[i] + '</li>' +
        '<li class="xs"><i></i>' +ztzl.xsAmount[i] + '</li>' +
        '</ul>');
});

/***************** 市场主体分析 ****************/
//线下-盟市
var offLine_city = {
    cityName:['临河区','五原区','磴口县','杭锦后旗','乌拉特前旗','乌拉特中旗','乌拉特后旗'],
    numTotal:['18,743','18,744','18,743','18,743','18,743','18,743','18,743','18,743'],
    echartName:['临河区主体增长趋势','五原区主体增长趋势','磴口县主体增长趋势','杭锦后旗主体增长趋势','乌拉特前旗主体增长趋势','乌拉特中旗主体增长趋势','乌拉特后旗主体增长趋势'],
};
$.each(offLine_city.cityName,function (i,v) {
    $('.sczt .data-container0 .data-wrapper').append('<div class="data">' +
        '<p class="name">'+ v +'</p>'+
        '<p class="num"><span class="big">'+ offLine_city.numTotal[i] + '</span>家</p>'+
        '</div>');
    if (i == 0){
        $('.sczt .data-container0 .data').eq(0).addClass('choose');
    }
});
//线下-企业
var offLine_company = {
    cityName:['内资（有限责任公司）','内资（股份有限公司）','内资（农户）','外资','个人'],
    numTotal:['18,743','18,744','18,743','18,743','18,743'],
    echartName:['内资（有限责任公司）年增长趋势','内资（股份有限公司）年增长趋势','内资（农户）年增长趋势','外资年增长趋势','个人年增长趋势']
};
$.each(offLine_company.cityName,function (i,v) {
    $('.sczt .data-container1 .data-wrapper').append('<div class="data">' +
        '<p class="name">'+ v +'</p>'+
        '<p class="num"><span class="big">'+ offLine_company.numTotal[i] + '</span>家</p>'+
        '</div>');
    if (i == 0){
        $('.sczt .data-container1 .data').eq(0).addClass('choose');
    }
});