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
$('.tfht-secPage').find('.title').find('h3').each(function (i,v) {
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
