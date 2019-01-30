//投诉排名滚动
var scrollTimer ,scrollTimer2;

$('.table-wrapper1 tbody').hover(function () {
    clearInterval(scrollTimer);
}, function () {
    scrollTimer = setInterval(function () {
        scrollNews($('.table-wrapper1'));
    }, 1500);
}).trigger("mouseleave");

$('.table-wrapper2 tbody').hover(function () {
    clearInterval(scrollTimer);
}, function () {
    scrollTimer2 = setInterval(function () {
        scrollNews($('.table-wrapper2'));
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

//天赋河套tab切换
// $('.swiper-slide:nth-child(3) .nav p').click(function(){
//     var _index = $(this).index();
//     console.log(_index)
//     $(this).addClass('choose');
//     $(this).siblings().removeClass('choose');
//     console.log($(this).parent().parent().next('.swiper3_echart').eq(_index));
//     $(this).parent().parent().siblings('.swiper3_echart').hide();
//     $(this).parent().parent().siblings('.swiper3_echart').eq(_index).show();
// });

//天赋河套select选择
$('.swiper-slide:nth-child(3) .nav').change(function(){

});



//echart
//主体数据分析
var myChart1 = echarts.init(document.getElementById('chart-con1'));//历年主体增长率
var myChart2 = echarts.init(document.getElementById('chart-con2'));//2018年主体增长趋势
var myChart3 = echarts.init(document.getElementById('chart-con3'));//网络交易分析
var myChart4 = echarts.init(document.getElementById('chart-con4'));//第一二三产业占比情况
var myChart4_1 = echarts.init(document.getElementById('chart-con4_1'));//第一二三产业占比情况
var myChart5 = echarts.init(document.getElementById('chart-con5'));//快递业务量情况图
var myChart6 = echarts.init(document.getElementById('chart-con6'));//分专业快递业务量比较图
var myChart7 = echarts.init(document.getElementById('chart-con7'));//旗县主体分布
//业务数据分析
var chart_top1 = echarts.init(document.getElementById('chart-top1'));//直销会议完成情况
var chart_top2 = echarts.init(document.getElementById('chart-top2'));//案件类型占比
var chart_top3 = echarts.init(document.getElementById('chart-top3'));//电子标识完成情况
var chart_bottom1 = echarts.init(document.getElementById('chart-bottom1'));//2018年抽检任务不合格商品发现率
//天赋河套
var lft_chart_11 = echarts.init(document.getElementById('lft_chart_11'));
var lft_chart_12 = echarts.init(document.getElementById('lft_chart_12'));
var lft_chart_21 = echarts.init(document.getElementById('lft_chart_21'));
var lft_chart_22 = echarts.init(document.getElementById('lft_chart_22'));
var lft_chart_31 = echarts.init(document.getElementById('lft_chart_31'));
var lft_chart_32 = echarts.init(document.getElementById('lft_chart_32'));
var rgt_chart_11 = echarts.init(document.getElementById('rgt_chart_11'));
var rgt_chart_21 = echarts.init(document.getElementById('rgt_chart_21'));
var rgt_chart_31 = echarts.init(document.getElementById('rgt_chart_31'));
var rgt_chart_32 = echarts.init(document.getElementById('rgt_chart_32'));

//主体数据分析echart内容
var option1 = {
    color:['#19D78B','#288BE0','#D4E055'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}家<br/>{a1}: {c1}家<br/>{a2}: {c2}%'
    },
    legend: {
        // icon: "roundRect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        orient: 'horizontal',
        x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12,
        },
        data:['线下企业','线上企业','年增长率']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['2016年','2017年','2018年']
        }
    ],
    yAxis: [{
        name: '数量',
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

    },
        {
            name: '增长率',
            type: 'value',
            position: 'right',
            axisLabel: {
                textStyle: {
                    color: '#DEDEDE'
                }
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#53B3EF',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            }
        }],
    series: [
        {
            name: '线下企业',
            type: 'bar',
            barWidth: 15,
            data: [39320, 55795, 56383],
        },
        {
            name: '线上企业',
            type: 'bar',
            barWidth: 15,
            data: [0, 0, 0],
        },
        {
            name: '年增长率',
            yAxisIndex: 1,
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 2,
            data: [0, 0, 0],
        }
    ]

};
var option1_data3 = [0];//年增长率的值
var arr = [];
var option1_data1 = option1.series[0].data; //线下
var option1_data2 = option1.series[1].data; //线上

// var arr =  [0].concat(option1_data1);
// console.log(arr);

for (var i=0;i <option1_data1.length;i++) {
    var _value = ( ( option1_data1[i+1] - option1_data1[i] ) / option1_data1[i]  *100).toFixed(2)
    option1_data3.push(_value);
}
console.log(option1_data3);
option1.series[2].data = option1_data3;

var option2 = {
    color: ['#D4E055'],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a}: {c}万元'
    },
    legend: {
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data: ['交易额']
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '3%',
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
        name: '交易额',
        type: 'line',
        // data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],
        data: [514],

    }]
};

var option3 = {
    title: {
        text: '\r\r\r\r\r总销售额',
        subtext: '1,238,712元',
        x: '10%',
        y: '53%',
        textStyle: {
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'normal',
            fontSize: 12
        },
        subtextStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>销售额: {c}元 ({d}%)"
    },
    color: ['#288BE0', '#EBF583', '#19D78B', '#E6517F', '#9629DC', '#2831E0'],
    legend: {
        orient: 'horizontal',
        x: 'left',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        icon: "roundRect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        data: ['河套王淡雅52度整箱装',
        '河套王淡雅52度单瓶礼盒装',
        '河套雪花粉10Kg',
        '河套王淡雅52度礼宾品鉴',
        '河套老窖珍品整箱装']
    },
    series: [
        {
            name: '网络交易分析',
            type: 'pie',
            center: ['24%', '63%'],
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    // formatter:function (argument) {
                    //     var html;
                    //     html='总销售额\r\n\r\n'+'1,238,712元';
                    //     return html;
                    // },
                    // textStyle: {
                    //     fontSize:15,
                    //     color:'#fff'
                    // }
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 1488816, name: '河套王淡雅52度整箱装'},
                {value: 363972, name: '河套王淡雅52度单瓶礼盒装'},
                {value: 336000, name: '河套雪花粉10Kg'},
                {value: 252840, name: '河套王淡雅52度礼宾品鉴'},
                {value: 235863, name: '河套老窖珍品整箱装'}
            ]
        }
    ]
};

var option4 = {
    color: ["rgba(0,183,238, 1)", "rgba(86,199,60, 1)"],
    tooltip: {
        show: true,
        trigger: "item",
        // formatter: function (value) {
        //     console.log(value)
        // }
    },

    legend: {
        show: false,
        icon: "circle",
        right: '20%',
        top: 'center',
        orient: "vertical",
        itemGap: 30,
        textStyle: {
            fontSize: 15,
            color: "#fff"
        },
        data: ["个体"]
    },
    radar: {
        center: ["50%", "60%"],
        radius: "70%",
        startAngle: 90,
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        angleAxis:{clockwise:true},
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                type:"dashed",
                color: "#dedede"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type:"dashed",
                color: "#90CAEE"
            }
        },
        indicator: [{
            name: "一产业",
            max: 88
        }, {
            name: "二产业",
            max: 88
        }, {
            name: "三产业",
            max: 88
        }]
    },
    series: [{
        name: "个体",
        type: "radar",
        areaStyle: {
            normal: {
                color: "rgba(47,205,251,.8)"
            }
        },
        lineStyle: {
            normal: {
                color: "rgba(144,202,238,1)",
                width: 2
            }
        },
        data: [
            [60, 45, 80]
        ]
    }]
};
var option4_1 = {
    color: ["rgba(0,183,238, 1)", "rgba(86,199,60, 1)"],
    tooltip: {
        show: true,
        trigger: "item"
    },

    legend: {
        show: false,
        icon: "circle",
        right: '20%',
        top: 'center',
        orient: "horizontal",
        itemGap: 30,
        textStyle: {
            fontSize: 15,
            color: "#fff"
        },
        data: ["企业"]
    },
    radar: {
        center: ["50%", "60%"],
        radius: "70%",
        startAngle: 90,
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        angleAxis:{clockwise:true},
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                type:"dashed",
                color: "#dedede"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type:"dashed",
                color: "#90CAEE"
            }
        },
        indicator: [{
            name: "一产业",
            max: 88
        }, {
            name: "二产业",
            max: 88
        }, {
            name: "三产业",
            max: 88
        }]
    },
    series: [{
        name: "企业",
        type: "radar",
        areaStyle: {
            normal: {
                color: "rgba(47,251,205,.8)"
            }
        },
        lineStyle: {
            normal: {
                color: "rgba(38,204,137,1)",
                width: 2
            }
        },
        data: [
            [60, 45, 80]
        ]
    }]
};

var option5 = {
    color:['#D4E055','#53B3EF'],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a0}: {c0}个<br/>{a1}: {c1}个'
    },
    legend: {
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['2017年','2018年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
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
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
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
    },
    series: [
        {
            name:'2017年',
            type:'line',
            stack: '总量',
            data:[39.57, 21.47, 42.31, 34.33, 33.57, 34.55, 35.28, 37.83, 42.38, 46.02, 59.07, 57.75]
        },
        {
            name:'2018年',
            type:'line',
            stack: '总量',
            data:[63.75, 30.1, 47.28, 44.68, 46.11, 47.30, 43.19, 46.04, 56.34, 60.32, 74.18, 75]
        }
    ]
};

var option6 = {
    color: ['#EF83A4', '#F1D080'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}个<br/>{a1}: {c1}个'
    },
    legend: {
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        icon: "rect",
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        data: ['2017年', '2018年']
    },
    grid: {
        left: '0%',
        right: '0%',
        top: '28%',
        bottom: '0%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
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
        },
        boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        data: ['同城快递','异地快递','国际及港澳台快递']
    },
    series: [
        {
            name: '2017年',
            type: 'bar',
            barWidth: 15,
            data: [169.09,390.01,0.20]
        },
        {
            name: '2018年',
            type: 'bar',
            barWidth: 15,
            data: [98.78,327.42,0.18]
        }
    ]
};

var option7 = {
    color: ['#11A76B', '#288BE0'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}家<br/>{a1}: {c1}家'
    },
    legend: {
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        icon: "rect",
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        data: ['线下企业', '线上企业']
    },
    grid: {
        left: '0%',
        right: '0%',
        top: '22%',
        bottom: '0%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        boundaryGap: [0, 0.01],
        splitLine: {
            show: true,   // 网格线是否显示
            //  改变样式
            lineStyle: {
                color: '#00A0E9' ,  // 修改网格线颜色
                type:'dotted',
                opacity:0.3
            }
        }
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
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
        data: ['临河区','五原区','磴口县','杭锦后旗','乌拉特前旗','乌拉特中旗','乌拉特后旗']
    },
    series: [
        {
            name: '线下企业',
            type: 'bar',
            barWidth: 15,
            data: [39187,14685,6860,11919,17728,10073,4493]
        },
        {
            name: '线上企业',
            type: 'bar',
            barWidth: 15,
            data: [0,0,0,0,0,0,0]
        }
    ]
};

//业务数据分析echart内容
var option_top1 = {
    color:['#D4E055','#53B3EF'],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a0}: {c0}个<br/>{a1}: {c1}个'
    },
    legend: {
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['申请数量','审批通过']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
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
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
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
    },
    series: [
        {
            name:'申请数量',
            type:'line',
            stack: '总量',
            data:[33, 30, 35, 36, 30, 37, 40, 43 ,38, 50, 48, 55]
        },
        {
            name:'审批通过',
            type:'line',
            stack: '总量',
            data:[25, 20, 23, 27, 24, 33, 30, 36 ,38, 39, 36, 39]
        }
    ]
};
var option_top2 = {
    title: {
        text: '案件数量',
        subtext: '712个',
        x: 'center',
        y: '50%',
        textStyle: {
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'normal',
            fontSize: 12
        },
        subtextStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>{c}个<br/>({d}%)"
    },
    color: ['#288BE0', '#EBF583', '#19D78B'],
    legend: {
        orient: 'horizontal',
        x: 'center',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        icon: "roundRect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        data: ['涉嫌传销', '违法广告', '其它']
    },
    series: [
        {
            name: '案件类型占比',
            type: 'pie',
            center: ['50%', '60%'],
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    // formatter:function (argument) {
                    //     var html;
                    //     html='总销售额\r\n\r\n'+'1,238,712元';
                    //     return html;
                    // },
                    // textStyle: {
                    //     fontSize:15,
                    //     color:'#fff'
                    // }
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 22, name: '涉嫌传销'},
                {value: 12, name: '违法广告'},
                {value: 9, name: '其它'},
            ]
        }
    ]
};
var option_top3 = {
    color:['#D4E055','#53B3EF','#EF5369'],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a0}: {c0}个<br/>{a1}: {c1}个<br/>{a2}: {c2}个'
    },
    legend: {
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['企业','个体','个人']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
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
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
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
    },
    series: [
        {
            name:'企业',
            type:'line',
            stack: '总量',
            data:[33, 30, 35, 36, 30, 37, 40, 43 ,38, 50, 48, 55]
        },
        {
            name:'个体',
            type:'line',
            stack: '总量',
            data:[25, 20, 23, 27, 24, 33, 30, 36 ,38, 39, 36, 39]
        },
        {
            name:'个人',
            type:'line',
            stack: '总量',
            data:[45, 40, 43, 47, 44, 33, 50, 56 ,58, 59, 56, 59]
        }
    ]
};

var option_bottom1 =  {
    color:['#288BE0','#EF83A4'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(value){
            var rate = (value[1].data / value[0].data * 100 ).toFixed(2) + '%';
            var msg = value[0].name +'<br/>' + value[0].seriesName +': '+ value[0].value +'<br/>' + value[1].seriesName +': '+ value[1].value +'<br/>不合格发现率: '+ rate;
            return msg;
        }
    },
    legend: {
        icon: "roundRect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['任务量','不合格']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['商品名','商品名','商品名','商品名','商品名','商品名','商品名','商品名','商品名','商品名','商品名','商品名']
        }
    ],
    yAxis : [
        {
            type : 'value',
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
    series : [
        {
            name:'任务量',
            type:'bar',
            stack: "不合格商品发现率",
            barWidth : 25,//柱图宽度
            data:[150, 200, 201, 154, 190, 330, 400,35,60,80,100,132]
        },
        {
            name:'不合格',
            type:'bar',
            stack: "不合格商品发现率",
            barWidth : 25,//柱图宽度
            data:[8, 12, 77, 18, 17, 36, 256,16,17,18,19,10]
        },
        {
            name: "不合格商品发现率",
            type: "line",
            stack: "不合格商品发现率",
            symbolSize:0.1,
            symbol:'circle',
            itemStyle: {
                normal: {
                    color: "#fff",
                    lineStyle: {
                        width: 2, //  折线图的粗细
                        color: 'rgba(0,0,0,0)' // 折线的颜色

                    },
                    barBorderRadius: 0,
                    label: {
                        show: true,
                        position: "top",
                        formatter: function(p) {
                            return p.value +'%';
                        }
                    }
                }
            },
            data: [5.33,0.06, 0.38, 0.12, 0.09, 0.11, 0.64, 0.46, 0.28, 0.23, 0.19, 0.08]
        }
    ]
};
var option_bottom1_data3 = [];
var option_bottom1_data1 = option_bottom1.series[0].data;
var option_bottom1_data2 = option_bottom1.series[1].data;
$.each(option_bottom1_data1,function(i,v){
    $.each(option_bottom1_data2,function(j,k){
        if (i == j) {
            var _value =( k / v * 100).toFixed(2) ;
            option_bottom1_data3.push(_value);
        }
    })
});
option_bottom1.series[2].data = option_bottom1_data3;

//天赋河套echart内容
var option_lft_chart_11 = option = {
    color:['#288BE0','#D4E055'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}万个<br/>{a1}: {c1}万元'
    },
    legend: {
        orient: 'horizontal',
        x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['销量','销售额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['2016年','2017年','2018年']
        }
    ],
    yAxis: [{
        name: '销量（万个）',
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

    }, {
        name: '销售额（万元）',
        type: 'value',
        position: 'right',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: 25,
        data: [48, 79, 100],
        // itemStyle: {
        //     normal: {
        //         //barBorderRadius: 15,
        //         color: new echarts.graphic.LinearGradient(
        //             0, 0, 0, 1, [{
        //                     offset: 0,
        //                     color: '#229aff'
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: '#13bfe8'
        //                 }
        //             ]
        //         )
        //     }
        // }
    }, {
        name: '销售额',
        yAxisIndex: 1,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 2,
        data: [370, 490, 690],
        itemStyle: {
            normal: {
                color: '#D4E055'
            },
        },
    }]

};
var option_lft_chart_12 = option = {
    color:['#288BE0','#D4E055'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}万个<br/>{a1}: {c1}万元'
    },
    legend: {
        orient: 'horizontal',
        x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['销量','销售额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['2016年','2017年','2018年']
        }
    ],
    yAxis: [{
        name: '销量（万个）',
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

    }, {
        name: '销售额（万元）',
        type: 'value',
        position: 'right',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: 25,
        data: [48, 79, 100],
        // itemStyle: {
        //     normal: {
        //         //barBorderRadius: 15,
        //         color: new echarts.graphic.LinearGradient(
        //             0, 0, 0, 1, [{
        //                     offset: 0,
        //                     color: '#229aff'
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: '#13bfe8'
        //                 }
        //             ]
        //         )
        //     }
        // }
    }, {
        name: '销售额',
        yAxisIndex: 1,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 2,
        data: [370, 490, 690],
        itemStyle: {
            normal: {
                color: '#D4E055'
            },
        },
    }]

};
var option_lft_chart_21 = option = {
    color:['#288BE0','#D4E055'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}万个<br/>{a1}: {c1}万元'
    },
    legend: {
        orient: 'horizontal',
        x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['销量','销售额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['2016年','2017年','2018年']
        }
    ],
    yAxis: [{
        name: '销量（万个）',
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

    }, {
        name: '销售额（万元）',
        type: 'value',
        position: 'right',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: 25,
        data: [48, 79, 100],
        // itemStyle: {
        //     normal: {
        //         //barBorderRadius: 15,
        //         color: new echarts.graphic.LinearGradient(
        //             0, 0, 0, 1, [{
        //                     offset: 0,
        //                     color: '#229aff'
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: '#13bfe8'
        //                 }
        //             ]
        //         )
        //     }
        // }
    }, {
        name: '销售额',
        yAxisIndex: 1,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 2,
        data: [370, 490, 690],
        itemStyle: {
            normal: {
                color: '#D4E055'
            },
        },
    }]

};
var option_lft_chart_22 = option = {
    color:['#288BE0','#D4E055'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}万个<br/>{a1}: {c1}万元'
    },
    legend: {
        orient: 'horizontal',
        x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['销量','销售额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['2016年','2017年','2018年']
        }
    ],
    yAxis: [{
        name: '销量（万个）',
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

    }, {
        name: '销售额（万元）',
        type: 'value',
        position: 'right',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: 25,
        data: [48, 79, 100],
        // itemStyle: {
        //     normal: {
        //         //barBorderRadius: 15,
        //         color: new echarts.graphic.LinearGradient(
        //             0, 0, 0, 1, [{
        //                     offset: 0,
        //                     color: '#229aff'
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: '#13bfe8'
        //                 }
        //             ]
        //         )
        //     }
        // }
    }, {
        name: '销售额',
        yAxisIndex: 1,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 2,
        data: [370, 490, 690],
        itemStyle: {
            normal: {
                color: '#D4E055'
            },
        },
    }]

};
var option_lft_chart_31 = option = {
    color:['#288BE0','#D4E055'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}万个<br/>{a1}: {c1}万元'
    },
    legend: {
        orient: 'horizontal',
        x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['销量','销售额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['2016年','2017年','2018年']
        }
    ],
    yAxis: [{
        name: '销量（万个）',
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

    }, {
        name: '销售额（万元）',
        type: 'value',
        position: 'right',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: 25,
        data: [48, 79, 100],
        // itemStyle: {
        //     normal: {
        //         //barBorderRadius: 15,
        //         color: new echarts.graphic.LinearGradient(
        //             0, 0, 0, 1, [{
        //                     offset: 0,
        //                     color: '#229aff'
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: '#13bfe8'
        //                 }
        //             ]
        //         )
        //     }
        // }
    }, {
        name: '销售额',
        yAxisIndex: 1,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 2,
        data: [370, 490, 690],
        itemStyle: {
            normal: {
                color: '#D4E055'
            },
        },
    }]

};
var option_lft_chart_32 = option = {
    color:['#288BE0','#D4E055'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}万个<br/>{a1}: {c1}万元'
    },
    legend: {
        orient: 'horizontal',
        x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['销量','销售额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['2016年','2017年','2018年']
        }
    ],
    yAxis: [{
        name: '销量（万个）',
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

    }, {
        name: '销售额（万元）',
        type: 'value',
        position: 'right',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: 25,
        data: [48, 79, 100],
        // itemStyle: {
        //     normal: {
        //         //barBorderRadius: 15,
        //         color: new echarts.graphic.LinearGradient(
        //             0, 0, 0, 1, [{
        //                     offset: 0,
        //                     color: '#229aff'
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: '#13bfe8'
        //                 }
        //             ]
        //         )
        //     }
        // }
    }, {
        name: '销售额',
        yAxisIndex: 1,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 2,
        data: [370, 490, 690],
        itemStyle: {
            normal: {
                color: '#D4E055'
            },
        },
    }]

};
var option_rgt_chart_11 = option = {
    color:['#288BE0','#D4E055'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}万个<br/>{a1}: {c1}万元'
    },
    legend: {
        orient: 'horizontal',
        x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['销量','销售额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['2016年','2017年','2018年']
        }
    ],
    yAxis: [{
        name: '销量（万个）',
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

    }, {
        name: '销售额（万元）',
        type: 'value',
        position: 'right',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: 25,
        data: [48, 79, 100],
        // itemStyle: {
        //     normal: {
        //         //barBorderRadius: 15,
        //         color: new echarts.graphic.LinearGradient(
        //             0, 0, 0, 1, [{
        //                     offset: 0,
        //                     color: '#229aff'
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: '#13bfe8'
        //                 }
        //             ]
        //         )
        //     }
        // }
    }, {
        name: '销售额',
        yAxisIndex: 1,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 2,
        data: [370, 490, 690],
        itemStyle: {
            normal: {
                color: '#D4E055'
            },
        },
    }]

};
var option_rgt_chart_21 = option = {
    color:['#288BE0','#D4E055'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}万个<br/>{a1}: {c1}万元'
    },
    legend: {
        orient: 'horizontal',
        x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['销量','销售额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['2016年','2017年','2018年']
        }
    ],
    yAxis: [{
        name: '销量（万个）',
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

    }, {
        name: '销售额（万元）',
        type: 'value',
        position: 'right',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: 25,
        data: [48, 79, 100],
        // itemStyle: {
        //     normal: {
        //         //barBorderRadius: 15,
        //         color: new echarts.graphic.LinearGradient(
        //             0, 0, 0, 1, [{
        //                     offset: 0,
        //                     color: '#229aff'
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: '#13bfe8'
        //                 }
        //             ]
        //         )
        //     }
        // }
    }, {
        name: '销售额',
        yAxisIndex: 1,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 2,
        data: [370, 490, 690],
        itemStyle: {
            normal: {
                color: '#D4E055'
            },
        },
    }]

};
var option_rgt_chart_31 = option = {
    color:['#288BE0','#D4E055'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}万个<br/>{a1}: {c1}万元'
    },
    legend: {
        orient: 'horizontal',
        x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['销量','销售额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['2016年','2017年','2018年']
        }
    ],
    yAxis: [{
        name: '销量（万个）',
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

    }, {
        name: '销售额（万元）',
        type: 'value',
        position: 'right',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: 25,
        data: [48, 79, 100],
        // itemStyle: {
        //     normal: {
        //         //barBorderRadius: 15,
        //         color: new echarts.graphic.LinearGradient(
        //             0, 0, 0, 1, [{
        //                     offset: 0,
        //                     color: '#229aff'
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: '#13bfe8'
        //                 }
        //             ]
        //         )
        //     }
        // }
    }, {
        name: '销售额',
        yAxisIndex: 1,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 2,
        data: [370, 490, 690],
        itemStyle: {
            normal: {
                color: '#D4E055'
            },
        },
    }]

};
var option_rgt_chart_32 = option = {
    color:['#288BE0','#D4E055'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br/>{a0}: {c0}万个<br/>{a1}: {c1}万元'
    },
    legend: {
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        orient: 'horizontal',
        x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        data:['销量','销售额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
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
            data : ['2016年','2017年','2018年']
        }
    ],
    yAxis: [{
        name: '销量（万个）',
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

    }, {
        name: '销售额（万元）',
        type: 'value',
        position: 'right',
        axisLabel: {
            textStyle: {
                color: '#DEDEDE'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#53B3EF',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '销量',
        type: 'bar',
        barWidth: 25,
        data: [48, 79, 100],
        // itemStyle: {
        //     normal: {
        //         //barBorderRadius: 15,
        //         color: new echarts.graphic.LinearGradient(
        //             0, 0, 0, 1, [{
        //                     offset: 0,
        //                     color: '#229aff'
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: '#13bfe8'
        //                 }
        //             ]
        //         )
        //     }
        // }
    }, {
        name: '销售额',
        yAxisIndex: 1,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 2,
        data: [370, 490, 690],
        itemStyle: {
            normal: {
                color: '#D4E055'
            },
        },
    }]

};



//实例化
myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option3);
myChart4.setOption(option4);
myChart4_1.setOption(option4_1);
myChart5.setOption(option5);
myChart6.setOption(option6);
myChart7.setOption(option7);
chart_top1.setOption(option_top1);
chart_top2.setOption(option_top2);
chart_top3.setOption(option_top3);
chart_bottom1.setOption(option_bottom1);
lft_chart_11.setOption(option_lft_chart_11);
lft_chart_12.setOption(option_lft_chart_12);
lft_chart_21.setOption(option_lft_chart_21);
lft_chart_22.setOption(option_lft_chart_22);
lft_chart_31.setOption(option_lft_chart_31);
lft_chart_32.setOption(option_lft_chart_32);
rgt_chart_11.setOption(option_rgt_chart_11);
rgt_chart_21.setOption(option_rgt_chart_21);
rgt_chart_31.setOption(option_rgt_chart_31);
rgt_chart_32.setOption(option_rgt_chart_32);


var tfht_title = [];
$('.swiper-slide:eq(2) .swiper3_echart').siblings('.title').find('h3').each(function (i,v) {
    tfht_title.push($(v).text());
});
console.log(tfht_title);

//天赋河套echart点击事件
lft_chart_11.on('click',function(e){
    let _year = e.name.replace("年","");
    window.location.href = './tfht.html?company=' + encodeURI(tfht_title[0]) + '&year=' + encodeURI(_year);
});
lft_chart_21.on('click',function(e){
    let _year = e.name.replace("年","");
    window.location.href = './tfht.html?company=' + encodeURI(tfht_title[1]) + '&year=' + encodeURI(_year);
});
lft_chart_31.on('click',function(e){
    let _year = e.name.replace("年","");
    window.location.href = './tfht.html?company=' + encodeURI(tfht_title[2]) + '&year=' + encodeURI(_year);
});
rgt_chart_11.on('click',function(e){
    let _year = e.name.replace("年","");
    window.location.href = './tfht.html?company=' + encodeURI(tfht_title[3]) + '&year=' + encodeURI(_year);
});
rgt_chart_21.on('click',function(e){
    let _year = e.name.replace("年","");
    window.location.href = './tfht.html?company=' + encodeURI(tfht_title[4]) + '&year=' + encodeURI(_year);
});
rgt_chart_31.on('click',function(e){
    let _year = e.name.replace("年","");
    window.location.href = './tfht.html?company=' + encodeURI(tfht_title[5]) + '&year=' + encodeURI(_year);
});