//市场主体分析sec-head tab切换
$('.sczt .nav p').click(function(){
    let _index = $(this).index();
    $(this).addClass('choose');
    $(this).siblings().removeClass('choose');
    $('.data-container').hide();
    $('.data-container').eq(_index).show();
});

//数据模块切换
$('.sczt .data-container .data-wrapper').on('click','.data',function () {
    let _index = $(this).index();
    $(this).addClass('choose');
    $(this).siblings().removeClass('choose');
    //联动Echarts
    $(this).parent().next().find('.echart').removeClass('choose');
    $(this).parent().next().find('.echart').eq(_index).addClass('choose');
});



//echart
//线下-盟市
var offLine_city_0 = echarts.init(document.getElementById('offLine_city_0'));
var offLine_city_1 = echarts.init(document.getElementById('offLine_city_1'));
var offLine_city_2 = echarts.init(document.getElementById('offLine_city_2'));
var offLine_city_3 = echarts.init(document.getElementById('offLine_city_3'));
var offLine_city_4 = echarts.init(document.getElementById('offLine_city_4'));
var offLine_city_5 = echarts.init(document.getElementById('offLine_city_5'));
var offLine_city_6 = echarts.init(document.getElementById('offLine_city_6'));
var offLine_city_7 = echarts.init(document.getElementById('offLine_city_7'));
//线下-企业
var offLine_company_0 = echarts.init(document.getElementById('offLine_company_0'));
var offLine_company_1 = echarts.init(document.getElementById('offLine_company_1'));
var offLine_company_2 = echarts.init(document.getElementById('offLine_company_2'));
var offLine_company_3 = echarts.init(document.getElementById('offLine_company_3'));
var offLine_company_4 = echarts.init(document.getElementById('offLine_company_4'));


var offLine_city_option0 = {
    title: {
        text: offLine_city.echartName[0],
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
var offLine_city_option1 = {
    title: {
        text: offLine_city.echartName[1],
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
        name: '企业数量',
        type: 'line',
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var offLine_city_option2 = {
    title: {
        text: offLine_city.echartName[2],
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
        name: '企业数量',
        type: 'line',
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var offLine_city_option3 = {
    title: {
        text: offLine_city.echartName[3],
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
        name: '企业数量',
        type: 'line',
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var offLine_city_option4 = {
    title: {
        text: offLine_city.echartName[4],
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
        name: '企业数量',
        type: 'line',
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var offLine_city_option5 = {
    title: {
        text: offLine_city.echartName[5],
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
        x:'60%'
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
        name: '企业数量',
        type: 'line',
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var offLine_city_option6 = {
    title: {
        text: offLine_city.echartName[6],
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
        y:10
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
        name: '企业数量',
        type: 'line',
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var offLine_city_option7 = {
    title: {
        text: offLine_city.echartName[7],
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
        name: '企业数量',
        type: 'line',
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};

var offLine_company_option0 = {
    title: {
        text: offLine_company.echartName[0],
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
        x:'70%',
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
        name: '企业数量',
        type: 'line',
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var offLine_company_option1 = {
    title: {
        text: offLine_company.echartName[1],
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
        x:'70%',
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
        name: '企业数量',
        type: 'line',
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var offLine_company_option2 = {
    title: {
        text: offLine_company.echartName[2],
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
        name: '企业数量',
        type: 'line',
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var offLine_company_option3 = {
    title: {
        text: offLine_company.echartName[3],
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
        name: '企业数量',
        type: 'line',
        symbol:'none', //去掉折线图中的节点
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};
var offLine_company_option4 = {
    title: {
        text: offLine_company.echartName[4],
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
        name: '企业数量',
        type: 'line',
        symbol:'none', //去掉折线图中的节点
        smooth: false, //true 为平滑曲线，false为直线
        data: [533, 680, 800, 820, 932, 901, 934, 1290, 1330, 1320, 1380, 1477],

    }]
};


//实例化
offLine_city_0.setOption(offLine_city_option0);
offLine_city_1.setOption(offLine_city_option1);
offLine_city_2.setOption(offLine_city_option2);
offLine_city_3.setOption(offLine_city_option3);
offLine_city_4.setOption(offLine_city_option4);
offLine_city_5.setOption(offLine_city_option5);
offLine_city_6.setOption(offLine_city_option6);
offLine_city_7.setOption(offLine_city_option7);
offLine_company_0.setOption(offLine_company_option0);
offLine_company_1.setOption(offLine_company_option1);
offLine_company_2.setOption(offLine_company_option2);
offLine_company_3.setOption(offLine_company_option3);
offLine_company_4.setOption(offLine_company_option4);


//市场主体分析-盟市-echart点击事件
offLine_city_0.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_city.echartName[0].replace("主体增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});
offLine_city_1.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_city.echartName[1].replace("主体增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});
offLine_city_2.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_city.echartName[2].replace("主体增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});
offLine_city_3.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_city.echartName[3].replace("主体增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});
offLine_city_4.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_city.echartName[4].replace("主体增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});
offLine_city_5.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_city.echartName[5].replace("主体增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});
offLine_city_6.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_city.echartName[6].replace("主体增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});
offLine_city_7.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_city.echartName[7].replace("主体增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});



//市场主体分析-企业-echart点击事件
offLine_company_0.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_company.echartName[0].replace("年增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});
offLine_company_1.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_company.echartName[1].replace("年增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});
offLine_company_2.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_company.echartName[2].replace("年增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});
offLine_company_3.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_company.echartName[3].replace("年增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});
offLine_company_4.on('click',function(e){
    let _month = e.name.replace("月","");
    let _area = offLine_company.echartName[4].replace("年增长趋势","");
    window.location.href = './scfxForm.html?area=' + encodeURI(_area) + '&month=' + encodeURI(_month);
});