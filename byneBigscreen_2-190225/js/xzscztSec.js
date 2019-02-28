/************* xzscztSec.html **************/
//页面跳转
$('.xzscztSec .lnztzz-wrapper .content').click(function(){
    let _index = $(this).index();
    switch (_index){
        case 0:
            window.location.href = './xzscztThird.html';
            break;
        case 3:
            window.location.href = './xzscztThird2.html';
            break;
        case 4:
            window.location.href = './xzscztThird3.html';
            break;
    }
});

//新登记数量
var con_chart2_1 = echarts.init(document.getElementById('xzscztSec-chart2-1'));

var option_con_chart2_1 = {
    color:['#19D78B','#288BE0','#D4E055','#E6517F'],
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
        // x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12,
        },
        data:['市场主体','网络市场主体','主体增长率','网络主体增长率']
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
            name: '市场主体',
            type: 'bar',
            barWidth: 15,
            data: [39320, 55795, 56383],
        },
        {
            name: '网络市场主体',
            type: 'bar',
            barWidth: 15,
            data: [0, 0, 0],
        },
        {
            name: '主体增长率',
            yAxisIndex: 1,
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 2,
            data: [0, 41.9, 1.05],
        },
        {
            name: '网络主体增长率',
            yAxisIndex: 1,
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 2,
            data: [0, 0, 0],
        }
    ]

};
//实例化
con_chart2_1.setOption(option_con_chart2_1);


//申报资金总额
var con_chart2_2 = echarts.init(document.getElementById('xzscztSec-chart2-2'));
var option_con_chart2_2 = {
    color:['#19D78B','#288BE0','#D4E055','#E6517F'],
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
        // x: '3%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12,
        },
        data:['市场主体','网络市场主体','主体增长率','网络主体增长率']
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
            name: '市场主体',
            type: 'bar',
            barWidth: 15,
            data: [39320, 55795, 56383],
        },
        {
            name: '网络市场主体',
            type: 'bar',
            barWidth: 15,
            data: [0, 0, 0],
        },
        {
            name: '主体增长率',
            yAxisIndex: 1,
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 2,
            data: [0, 41.9, 1.05],
        },
        {
            name: '网络主体增长率',
            yAxisIndex: 1,
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 2,
            data: [0, 0, 0],
        }
    ]

};
//实例化
con_chart2_2.setOption(option_con_chart2_2);


//18年主体规模分析
var con_chart2_3 = echarts.init(document.getElementById('xzscztSec-chart2-3'));
var option_con_chart2_3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>销售额: {c}元 ({d}%)"
    },
    color: ['#288BE0', '#EBF583',  '#E6517F'],
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: '5%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        icon: "roundRect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        data: ['数量1', '数量2', '数量3']
    },
    series: [
        {
            type: 'pie',
            center: ['center', '63%'],
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter:function (argument) {
                        var html;
                        html='企业总量\r\n\r\n'+'18,712户';
                        return html;
                    },
                    textStyle: {
                        fontSize:14,
                        color:'#fff'
                    }
                },
            },
            data: [
                {value: 1488816, name: '数量1'},
                {value: 363972, name: '数量2'},
                {value: 336000, name: '数量3'}
            ]
        }
    ]
};
//实例化
con_chart2_3.setOption(option_con_chart2_3);


//市场主体分布行业tb
$('.xzscztSec .lnztzz-wrapper .content:eq(3) .chart-title li').click(function () {
    $(this).addClass('choose');
    $(this).siblings().removeClass('choose');
    stopBubble();
});
var con_chart2_4 = echarts.init(document.getElementById('xzscztSec-chart2-4'));
var option_con_chart2_4 = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>销售额: {c}元 ({d}%)"
    },
    color: ['#288BE0', '#EBF583',  '#E6517F'],
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: '5%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        icon: "roundRect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        data: ['数量1', '数量2', '数量3']
    },
    series: [
        {
            type: 'pie',
            center: ['center', '57%'],
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter:function (argument) {
                        var html;
                        html='企业总量\r\n\r\n'+'18,712户';
                        return html;
                    },
                    textStyle: {
                        fontSize:14,
                        color:'#fff'
                    }
                },
            },
            data: [
                {value: 1488816, name: '数量1'},
                {value: 363972, name: '数量2'},
                {value: 336000, name: '数量3'}
            ]
        }
    ]
};
con_chart2_4.setOption(option_con_chart2_4);


//非公经济增速
var con_chart2_5 = echarts.init(document.getElementById('xzscztSec-chart2-5'));
var option_con_chart2_5 = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>销售额: {c}元 ({d}%)"
    },
    color: ['#288BE0', '#EBF583',  '#E6517F'],
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: '5%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        icon: "roundRect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        data: ['数量1', '数量2', '数量3']
    },
    series: [
        {
            type: 'pie',
            center: ['center', '63%'],
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter:function (argument) {
                        var html;
                        html='企业总量\r\n\r\n'+'18,712户';
                        return html;
                    },
                    textStyle: {
                        fontSize:14,
                        color:'#fff'
                    }
                },
            },
            data: [
                {value: 1488816, name: '数量1'},
                {value: 363972, name: '数量2'},
                {value: 336000, name: '数量3'}
            ]
        }
    ]
};
con_chart2_5.setOption(option_con_chart2_5);
