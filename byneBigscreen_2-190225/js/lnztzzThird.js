/************* lnztzzThird.html **************/
//线下-企业
var lnztzzThird_company = {
    cityName:['内资企业','外商投资企业','个体工商户','农民专业合作社'],
    numTotal:['18,743','18,744','18,743','18,743','18,743'],
    echartName:['内资企业年走势分析','外商投资企业年走势分析','个体工商户年走势分析','农民专业合作社年走势分析']
};
$.each(lnztzzThird_company.cityName,function (i,v) {
    $('.lnztzzThird .data-container0 .data-wrapper').append('<div class="data">' +
        '<p class="name">'+ v +'</p>'+
        '<p class="num"><span class="big">'+ lnztzzThird_company.numTotal[i] + '</span>户</p>'+
        '</div>');
});

//tab
$('.lnztzzThird .sec-head .nav p').click(function () {
    let _index = $(this).index();
    $(this).addClass('choose');
    $(this).siblings().removeClass('choose');
});


//echart
var lnztzzThird_echart_0 = echarts.init(document.getElementById('lnztzzThird_echart_0'));
var lnztzzThird_echart_1 = echarts.init(document.getElementById('lnztzzThird_echart_1'));
var lnztzzThird_echart_2 = echarts.init(document.getElementById('lnztzzThird_echart_2'));
var lnztzzThird_echart_3 = echarts.init(document.getElementById('lnztzzThird_echart_3'));

var option_lnztzzThird_echart_0 = {
    title: {
        text: lnztzzThird_company.echartName[0],
        textStyle: {
            color: '#fff',
            fontSize: 16
        },
        x: 20,
        y: 10
    },
    color: ['#19D78B'],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a}: {c}家'
    },
    legend: {
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data: ['企业数量'],
        x:'60%',
        y: 10
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: "0",
                show: true,
                textStyle: {
                    color: '#DEDEDE'
                }
            },
            axisTick:{show:false},
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#53B3EF',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#DEDEDE'
                }
            },
            axisTick:{show:false},
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#53B3EF',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            splitLine: {
                show: true,   // 网格线是否显示
                //  改变样式
                lineStyle: {
                    color: '#00A0E9' ,  // 修改网格线颜色
                    type:'dotted',
                    opacity:0.3
                }
            }
        }
    ],
    series: [{
        clickable : true,
        name: '企业数量',
        type: 'line',
        // symbol:'none', //去掉折线图中的节点
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var option_lnztzzThird_echart_1 = {
    title: {
        text: lnztzzThird_company.echartName[1],
        textStyle: {
            color: '#fff',
            fontSize: 16
        },
        x: 20,
        y: 10
    },
    color: ['#19D78B'],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a}: {c}家'
    },
    legend: {
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data: ['企业数量'],
        x:'60%',
        y: 10
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: "0",
                show: true,
                textStyle: {
                    color: '#DEDEDE'
                }
            },
            axisTick:{show:false},
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#53B3EF',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#DEDEDE'
                }
            },
            axisTick:{show:false},
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#53B3EF',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            splitLine: {
                show: true,   // 网格线是否显示
                //  改变样式
                lineStyle: {
                    color: '#00A0E9' ,  // 修改网格线颜色
                    type:'dotted',
                    opacity:0.3
                }
            }
        }
    ],
    series: [{
        clickable : true,
        name: '企业数量',
        type: 'line',
        // symbol:'none', //去掉折线图中的节点
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var option_lnztzzThird_echart_2 = {
    title: {
        text: lnztzzThird_company.echartName[2],
        textStyle: {
            color: '#fff',
            fontSize: 16
        },
        x: 20,
        y: 10
    },
    color: ['#19D78B'],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a}: {c}家'
    },
    legend: {
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data: ['企业数量'],
        x:'60%',
        y: 10
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: "0",
                show: true,
                textStyle: {
                    color: '#DEDEDE'
                }
            },
            axisTick:{show:false},
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#53B3EF',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#DEDEDE'
                }
            },
            axisTick:{show:false},
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#53B3EF',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            splitLine: {
                show: true,   // 网格线是否显示
                //  改变样式
                lineStyle: {
                    color: '#00A0E9' ,  // 修改网格线颜色
                    type:'dotted',
                    opacity:0.3
                }
            }
        }
    ],
    series: [{
        clickable : true,
        name: '企业数量',
        type: 'line',
        // symbol:'none', //去掉折线图中的节点
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var option_lnztzzThird_echart_3 = {
    title: {
        text: lnztzzThird_company.echartName[3],
        textStyle: {
            color: '#fff',
            fontSize: 16
        },
        x: 20,
        y: 10
    },
    color: ['#19D78B'],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a}: {c}家'
    },
    legend: {
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data: ['企业数量'],
        x:'60%',
        y: 10
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: "0",
                show: true,
                textStyle: {
                    color: '#DEDEDE'
                }
            },
            axisTick:{show:false},
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#53B3EF',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#DEDEDE'
                }
            },
            axisTick:{show:false},
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#53B3EF',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            splitLine: {
                show: true,   // 网格线是否显示
                //  改变样式
                lineStyle: {
                    color: '#00A0E9' ,  // 修改网格线颜色
                    type:'dotted',
                    opacity:0.3
                }
            }
        }
    ],
    series: [{
        clickable : true,
        name: '企业数量',
        type: 'line',
        // symbol:'none', //去掉折线图中的节点
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};

lnztzzThird_echart_0.setOption(option_lnztzzThird_echart_0);
lnztzzThird_echart_1.setOption(option_lnztzzThird_echart_1);
lnztzzThird_echart_2.setOption(option_lnztzzThird_echart_2);
lnztzzThird_echart_3.setOption(option_lnztzzThird_echart_3);


