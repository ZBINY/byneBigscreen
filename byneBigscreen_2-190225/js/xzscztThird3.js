/************* xzscztThird3.html **************/
var xzscztThird3_company = {
    echartName:['18年新增非公经济市场主体/新增市场主体','新增个体户+私营企业从业人员及增长率']
};
$.each(xzscztThird3_company.echartName,function (i,v) {
    $('.xzscztThird3 .echarts_wrapper .echart:eq('+ i +') h3').html(v);
});


//echart
var xzscztThird3_echart_0 = echarts.init(document.getElementById('xzscztThird3_echart_0'));
var xzscztThird3_echart_1 = echarts.init(document.getElementById('xzscztThird3_echart_1'));

var option_xzscztThird3_echart_0 = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>销售额: {c}元 ({d}%)"
    },
    color: ['#288BE0', '#EBF583',  '#E6517F'],
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
        data: ['数量1', '数量2', '数量3']
    },
    series: [
        {
            type: 'pie',
            center: ['center', '53%'],
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
var option_xzscztThird3_echart_1 = {
    color:['#288BE0','#D4E055'],
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
        data:['数量','增长率']
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
        name: '数量（人）',
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
            name: '数量',
            type: 'bar',
            barWidth: 15,
            data: [39320, 55795, 56383],
        },
        {
            name: '增长率',
            yAxisIndex: 1,
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 2,
            data: [51, 41.9, 88],
        }
    ]

};



xzscztThird3_echart_0.setOption(option_xzscztThird3_echart_0);
xzscztThird3_echart_1.setOption(option_xzscztThird3_echart_1);


