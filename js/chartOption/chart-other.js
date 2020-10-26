/**
    特殊形状
**/

// 1
function getOther1Option(data,label,unit) {
    var option = {
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#fff',borderColor: '#979797',borderWidth: 1,padding: [5, 14],
            textStyle: {color: '#333',padding: '10px'},
            axisPointer: {type: 'shadow',shadowStyle:{color:'rgba(153,153,153,0.1)'}},
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;',
            formatter: function(params) {
                return params[0].axisValue+'：<br>'+params[0].value+'人';
            },
        },
        grid: {left: '10', right: '10', bottom: '10', top: '40', containLabel: true},
        xAxis: {
            type: 'category',
            axisLine: { show: true, lineStyle: { color: '#979797'}},
            axisTick: { show: false },
            axisLabel: { show: true, textStyle: { fontSize: 12, color: '#666666' }, interval: 0 },
            splitLine: { show: false },
            data: label
        },
        yAxis: {
            type: 'value',
            axisLine: { show: false, lineStyle: { color: '#153fb6'}},
            axisTick: { show: false },
            axisLabel: { show: true, textStyle: { fontSize: 12, color: '#666666' }, interval: 0 },
            splitLine: { show: false },
            minInterval: 1, min: 0, name:unit[0],
            nameTextStyle: {color: '#666',fontSize:10,padding:[0, 24, 6, 0],}
        },
        series: [{
            type: 'pictorialBar',
            symbol: 'image://../icon/chart-img-01.png',
            data: data
        }]
    };
    return option;
}

// 2 尖
function getOther2Option(datalist,color) {
    var label = [];
    for (var i = 0; i < datalist.length; i++) {
        label.push(datalist[i].name);
    }
    var option = {
        tooltip: {
            formatter:'{b}：<br/>{c}',
            backgroundColor: '#fff',borderColor: '#979797',borderWidth: 1,padding: [5, 14],
            textStyle: {color: '#333',padding: '10px'},
            axisPointer: {type: 'shadow',shadowStyle:{color:'rgba(153,153,153,0.1)'}},
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;',
        },
        grid: { left: 10, right: '10', bottom: '10', top: '30', containLabel: true },
        xAxis: [{
            type: 'category',
            data: label,
            axisLine: { show: true, lineStyle: { color: '#999' } },
            axisTick: { show: false },
            axisLabel: { show: true, textStyle: { color: '#999' } }
        }],
        yAxis: [{ type: 'value',
            axisLine: { show: false, lineStyle: { color: '#00c7ff' } },
            axisLabel: { show: true, textStyle: { color: '#999' } },
            axisTick: { show: false },
            splitLine: { lineStyle: { color: 'rgba(255,255,255, 0.15)', opacity: 0.15, type: 'dotted' } }
        }],
        series: [{
            type: 'pictorialBar',
            symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z',
            data: datalist,
            barWidth: 22,
            itemStyle: {
                normal: {
                    color: color,
                }
            },
            label: { normal: { show: true, position: 'top', textStyle: { color: '#fff' } } }
        }]
    };
    return option;
};
// 3 单尖 + 曲线
function getOther3Option(name,label,datalist1,datalist2,datalist3,unit,color) {
    var option = {
        tooltip: {
            trigger: "axis",
            backgroundColor: '#fff',borderColor: '#979797',borderWidth: 1,padding: [5, 14],
            textStyle: {color: '#333',padding: '10px'},
            axisPointer: {type: 'shadow',shadowStyle:{color:'rgba(153,153,153,0.1)'}},
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;',
        },
        legend: {
            data:name, bottom: 5, itemWidth: 8, itemHeight: 8, itemGap: 30,//间隔
        },
        grid: { left: 10, right: '10', bottom: '40', top: '50', containLabel: true },
        xAxis: [{
            type: 'category',
            data: label,
            axisLine: { show: true, lineStyle: { color: '#999' } },
            axisTick: { show: false },
            axisLabel: { show: true, textStyle: { color: '#999' } }
        }],
        yAxis: [{ type: 'value',name:unit[0],
            axisLine: { show: false},
            axisLabel: { show: true, textStyle: { color: '#999' } },
            axisTick: { show: false },
            splitLine: { lineStyle: { color: 'rgba(255,255,255, 0.15)', opacity: 0.15, type: 'dotted' } },
            nameTextStyle: {color: '#666',fontSize:10,padding:[0, 0, 6, 0],}
        },{
            type: 'value', name: unit[1],
            axisLine:{show: false}, axisTick:{show:false},splitLine:{show:false},
            nameTextStyle: {color: '#666',fontSize:10,padding:[0, 0, 6, 0],},
            axisLabel: {show: true,color:'#808485',fontSize:13,interval:0,formatter: "{value}"}
        }],
        color:color,
        series: [{
            type: 'pictorialBar', name:name[0], yAxisIndex: 1,
            symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z',
            data: datalist1,
            barWidth: 22,
            label: { normal: { show: true, position: 'top', textStyle: { color: '#fff' } } }
        },{
            type: 'line',name:name[1], symbolSize: 8,//smooth: true,
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },
            data: datalist2,
        },{
            type: 'line',name:name[2], symbolSize: 8,//smooth: true,
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },
            data: datalist3,
        }]
    };
    return option;
};



