/************* lnztzzThird5.html **************/
//线下-企业
var lnztzzThird5_company = {
    echartName:['','私营企业产业分布','私营企业产业注册资本金额分布']
};
$.each(lnztzzThird5_company.echartName,function (i,v) {
    if(i!=0){
        $('.lnztzzThird5 .echarts_wrapper .echart:eq('+ i +') h3').html(v);
    }
});

var lnztzzThird5_echart_0 = echarts.init(document.getElementById('lnztzzThird5_echart_0'));
var lnztzzThird5_echart_1 = echarts.init(document.getElementById('lnztzzThird5_echart_1'));

var option_lnztzzThird5_echart_0 = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>销售额: {c}元 ({d}%)"
    },
    color: ['#288BE0', '#EBF583',  '#E6517F'],
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: '12%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        icon: "roundRect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        data: ['第一产业', '第二产业', '第三产业']
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
                        html='私营企业数量\r\n\r\n'+'18,712家';
                        return html;
                    },
                    textStyle: {
                        fontSize:12,
                        color:'#fff'
                    }
                },
            },
            data: [
                {value: 1488816, name: '第一产业'},
                {value: 363972, name: '第二产业'},
                {value: 336000, name: '第三产业'}
            ]
        }
    ]
};
var option_lnztzzThird5_echart_1 = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>销售额: {c}元 ({d}%)"
    },
    color: ['#288BE0', '#EBF583',  '#E6517F'],
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: '12%',
        textStyle: {
            color: '#DEDEDE',
            fontSize: 12
        },
        icon: "roundRect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 10,// 设置间距
        data: ['第一产业', '第二产业', '第三产业']
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
                        html='私营企业\r\n\r\n'+'注册资本金额\r\n\r\n'+'18,712家';
                        return html;
                    },
                    textStyle: {
                        fontSize:12,
                        color:'#fff'
                    }
                },
            },
            data: [
                {value: 1488816, name: '第一产业'},
                {value: 363972, name: '第二产业'},
                {value: 336000, name: '第三产业'}
            ]
        }
    ]
};

lnztzzThird5_echart_0.setOption(option_lnztzzThird5_echart_0);
lnztzzThird5_echart_1.setOption(option_lnztzzThird5_echart_1);
