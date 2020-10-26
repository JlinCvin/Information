/**
    柱状图、条形图、殊形状
**/

////// 一、纵向
// 竖1、单柱+单曲线
function getBarLine1Option(name,data1,data2,label,unit,color) {
    //背景
    var option = {
        tooltip: {
            trigger: "axis",
            backgroundColor: '#fff',borderColor: '#979797',borderWidth: 1,padding: [5, 14],
            textStyle: {color: '#333',padding: '10px'},
            axisPointer: {type: 'shadow',shadowStyle:{color:'rgba(153,153,153,0.1)'}},
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;',
        },
        grid: {left: '10', right: '10', bottom: '10', top: '40', containLabel: true},
        xAxis: {
            type: 'category',
            data: label,
            //inverse:true,
            axisLine:{lineStyle:{color:'#979797'}},
            axisTick: {show: false},
            axisLabel: {
                color: '#808485',fontSize:12,
            }
        },
        yAxis: [
            {
                type: 'value', name: unit[0],
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 28, 6, 0],}
            },{
                type: 'value', name: unit[1],
                axisLine:{show: false}, axisTick:{show:false},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 0, 6, 28],},
                axisLabel: {show: true,color:'#808485',fontSize:13,interval:0,formatter: "{value} %"}
            }
        ],
        color:color,
        series: [{
            type: 'bar', name:name[0], barWidth: 9,yAxisIndex: 1,
            itemStyle: {
                normal: {barBorderRadius: [3, 3, 0, 0],}
            },
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },//当前色
            data: data1
        },{
            type: 'line', name:name[1], smooth: true, symbolSize: 8,
            itemStyle: {
                normal: {barBorderRadius: [3, 3, 0, 0],}
            },
            emphasis: {
                itemStyle:{color:'#FA5E9B',}
            },//当前色
            data: data2
        }]
    };
    return option;
}
// 竖2、双柱+单曲线
function getBarLine2Option(name,data1,data2,data3,label,unit,color) {
    //背景
    var option = {
        tooltip: {
            trigger: "axis",
            backgroundColor: '#fff',borderColor: '#979797',borderWidth: 1,padding: [5, 14],
            textStyle: {color: '#333',padding: '10px'},
            axisPointer: {type: 'shadow',shadowStyle:{color:'rgba(153,153,153,0.1)'}},
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;',
        },
        grid: {left: '10', right: '10', bottom: '10', top: '40', containLabel: true},
        xAxis: {
            type: 'category',
            data: label,
            //inverse:true,
            axisLine:{lineStyle:{color:'#979797'}},
            axisTick: {show: false},
            axisLabel: {
                color: '#808485',fontSize:12,
            }
        },
        yAxis: [
            {
                type: 'value', name: unit[0],
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 0, 6, 0],}
            },{
                type: 'value', name: "",
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 0, 6, 0],}
            },{
                type: 'value', name: unit[1],
                axisLine:{show: false}, axisTick:{show:false},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 0, 6, 0],},
                axisLabel: {show: true,color:'#808485',fontSize:13,interval:0,formatter: "{value} %"}
            }
        ],
        color:color,
        series: [{
            type: 'bar',name:name[0], barWidth: 9,yAxisIndex: 1,
            itemStyle: {
                normal: {barBorderRadius: [3, 3, 0, 0],}
            },
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },//当前色
            data: data1
        },{
            type: 'bar',name:name[1], barWidth: 9,yAxisIndex: 1,
            itemStyle: {
                normal: {barBorderRadius: [3, 3, 0, 0],}
            },
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },//当前色
            data: data2
        },{
            type: 'line',name:name[2], symbolSize: 8,//smooth: true,
            itemStyle: {
                normal: {barBorderRadius: [3, 3, 0, 0],}
            },
            emphasis: {
                itemStyle:{color:'#FA5E9B',}
            },//当前色
            data: data3
        }]
    };
    return option;
}
// 竖3、单柱+双曲线
function getBarLine3Option(name,data1,data2,data3,label,unit,color) {
    //背景
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
        grid: {left: '10', right: '10', bottom: '40', top: '40', containLabel: true},
        xAxis: {
            type: 'category',
            data: label,
            //inverse:true,
            axisLine:{lineStyle:{color:'#979797'}},
            axisTick: {show: false},
            axisLabel: {
                color: '#808485',fontSize:12,
            }
        },
        yAxis: [
            {
                type: 'value', name: unit[0],
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 28, 6, 0],}
            },{
                type: 'value', name: "",
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 0, 6, 0],}
            },{
                type: 'value', name: unit[1],
                axisLine:{show: false}, axisTick:{show:false},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 0, 6, 0],},
                axisLabel: {show: true,color:'#808485',fontSize:13,interval:0,formatter: "{value} %"}
            }
        ],
        color:color,
        series: [{
            type: 'bar', name:name[0], barWidth: 20,yAxisIndex: 1,
            itemStyle: {
                normal: {barBorderRadius: [10, 10, 0, 0],}
            },
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },//当前色
            data: data1
        },{
            type: 'line',name:name[1], symbolSize: 8,//smooth: true,
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },//当前色
            data: data2
        },{
            type: 'line',name:name[2], symbolSize: 8,//smooth: true,
            emphasis: {
                itemStyle:{color:'#FA5E9B',}
            },//当前色
            data: data3
        }]
    };
    return option;
}
// 竖4、双柱+双曲线
function getBarLine4Option(name,data1,data2,data3,data4,label,unit,color) {
    //背景
    var option = {
        tooltip: {
            trigger: "axis",
            formatter: '{b0}<br>{a0}: {c0}人<br />{a1}: {c1}件<br />{a2}: {c2}%<br />{a3}: {c3}',
            backgroundColor: '#fff',borderColor: '#979797',borderWidth: 1,padding: [5, 14],
            textStyle: {color: '#333',padding: '10px'},
            axisPointer: {type: 'shadow',shadowStyle:{color:'rgba(153,153,153,0.1)'}},
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;',
        },

        legend: {
            data:name, bottom: 5, itemWidth: 8, itemHeight: 8, itemGap: 30,//间隔
        },
        grid: {left: '10', right: '10', bottom: '40', top: '40', containLabel: true},
        xAxis: {
            type: 'category',
            data: label,
            //inverse:true,
            axisLine:{lineStyle:{color:'#979797'}},
            axisTick: {show: false},
            axisLabel: {
                color: '#808485',fontSize:12,
            }
        },
        yAxis: [
            {
                type: 'value', name: unit[0],
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 28, 6, 0],}
            },{
                type: 'value', name: "",
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 0, 6, 0],}
            },{
                type: 'value', name:unit[1],
                axisLine:{show: false}, axisTick:{show:false},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 0, 6, 0],},
                axisLabel: {show: true,color:'#808485',fontSize:13,interval:0,formatter: "{value} %"}
            }
        ],
        color:color,
        series: [{
            type: 'bar', name:name[0], barWidth: 9,yAxisIndex: 1,
            itemStyle: {
                normal: {barBorderRadius: [10, 10, 0, 0],}
            },
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },//当前色
            data: data1
        },{
            type: 'bar', name:name[1], barWidth: 9,yAxisIndex: 1,
            itemStyle: {
                normal: {barBorderRadius: [10, 10, 0, 0],}
            },
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },//当前色
            data: data2
        },{
            type: 'line',name:name[2], symbolSize: 8,//smooth: true,
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },//当前色
            data: data3
        },{
            type: 'line',name:name[3], symbolSize: 8,//smooth: true,
            emphasis: {
                itemStyle:{color:'#FA5E9B',}
            },//当前色
            data: data4
        }]
    };
    return option;
}
// 竖5、单柱-圆角
function getBarY1Option(name,data1,label,unit,color) {
    //背景
    var option = {
        tooltip: {
            trigger: "axis",
            backgroundColor: '#fff',borderColor: '#979797',borderWidth: 1,padding: [5, 14],
            textStyle: {color: '#333',padding: '10px'},
            axisPointer: {type: 'shadow',shadowStyle:{color:'rgba(153,153,153,0.1)'}},
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;',
        },
        grid: {left: '10', right: '10', bottom: '10', top: '40', containLabel: true},
        xAxis: {
            type: 'category',
            data: label,
            //inverse:true,
            axisLine:{lineStyle:{color:'#979797'}},
            axisTick: {show: false},
            axisLabel: {
                color: '#808485',fontSize:12,
            }
        },
        yAxis: [
            {
                type: 'value', name: unit[0],
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 28, 6, 0],}
            }
        ],
        color:color,
        series: [{
            type: 'bar', name:name[0], barWidth: 20,
            itemStyle: {
                normal: {barBorderRadius: [10, 10, 0, 0],}
            },
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },//当前色
            data: data1
        }]
    };
    return option;
}
// 竖6、单柱-直角
function getBarY2Option(name,data1,label,unit,color) {
    //背景
    var option = {
        tooltip: {
            trigger: "axis",
            backgroundColor: '#fff',borderColor: '#979797',borderWidth: 1,padding: [5, 14],
            textStyle: {color: '#333',padding: '10px'},
            axisPointer: {type: 'shadow',shadowStyle:{color:'rgba(153,153,153,0.1)'}},
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;',
        },
        grid: {left: '10', right: '10', bottom: '10', top: '40', containLabel: true},
        xAxis: {
            type: 'category',
            data: label,
            //inverse:true,
            axisLine:{lineStyle:{color:'#979797'}},
            axisTick: {show: false},
            axisLabel: {
                color: '#808485',fontSize:12,
            }
        },
        yAxis: [
            {
                type: 'value', name: unit[0],
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 28, 6, 0],}
            }
        ],
        color:color,
        series: [{
            type: 'bar', name:name[0], barWidth: 24,
            itemStyle: {
                normal: {barBorderRadius: [0, 0, 0, 0],}
            },
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },//当前色
            data: data1
        }]
    };
    return option;
}
// 竖6、单柱-直角-X轴字斜体
function getBarY3Option(name,data1,label,unit,color) {
    //背景
    var option = {
        tooltip: {
            trigger: "axis",
            backgroundColor: '#fff',borderColor: '#979797',borderWidth: 1,padding: [5, 14],
            textStyle: {color: '#333',padding: '10px'},
            axisPointer: {type: 'shadow',shadowStyle:{color:'rgba(153,153,153,0.1)'}},
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;',
        },
        grid: {left: '10', right: '10', bottom: '10', top: '40', containLabel: true},
        xAxis: {
            type: 'category',
            data: label,
            //inverse:true,
            axisLine:{lineStyle:{color:'#979797'}},
            axisTick: {show: false},
            axisLabel: {
                color: '#808485',fontSize:11, interval:0, rotate:45,
            }
        },
        yAxis: [
            {
                type: 'value', name: unit[0],
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[0, 0, 6, 0],}
            }
        ],
        color:color,
        series: [{
            type: 'bar', name:name[0], barWidth: 9,
            itemStyle: {
                normal: {barBorderRadius: [0, 0, 0, 0],}
            },
            emphasis: {
                itemStyle:{color:'#F6BD16',}
            },//当前色
            data: data1
        }]
    };
    return option;
}

////// 二、横向
//横1、单柱
function getbarX1Option(datalist,color) {
    var label = [];
    for(var i=0;i<datalist.length;i++) {
        var item = datalist[i];
        label.push(item.name)
    }
    //背景
    var option = {
        tooltip: {
            formatter:'{b}<br/>{c} 次',
            backgroundColor: '#fff',
            borderColor: '#979797',
            textStyle: {color: '#333',padding: '10px'},
            borderWidth: 1,
            padding: [5, 14],
            axisPointer: {
                type: 'shadow',
                shadowStyle:{
                    color:'rgba(153,153,153,0.1)'
                }
            },
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;',
        },
        grid: {left: '10', right: '80', bottom: '10', top: '10', containLabel: true},
        yAxis: {
            type: 'category',
            data: label,
            //inverse:true,
            axisLine:{lineStyle:{color:'#979797'}},
            axisTick: {show: false},
            axisLabel: {
                color: '#808485',fontSize:13,
            }
        },
        xAxis: [
            {
                type: 'value', name: "件数（件）",
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[28, 0, 0, 4],}
            }
        ],
        color:color,
        series: [{
            type: 'bar', barWidth: 20,
            itemStyle: {
                normal: {barBorderRadius: [0, 3, 3, 0],}
            },
            emphasis: {
                itemStyle:{color:'#FA5E9B',}
            },//当前色
            data: datalist
        }]
    };
    return option;
}

//横向柱状图 有滚动
function getbarX2Option(datalist,color,Name) {
    var label = [];var n=1;
    var sortlist = datalist.sort(function(a,b) {
        return a.value - b.value
    })
    for(var i=0;i<sortlist.length;i++) {
        var item = sortlist[i];
        label.push(item.name)
    }
    //背景
    var option = {
        tooltip: {
            trigger: "axis",
            formatter: function(params){
                var tip=''
                for (var i = 0; i < params.length; i++) {
                    var par = parseInt(sortlist.length - params[i].dataIndex);
                    if (params[i].value != 0) {
                        tip = tip + params[i].name+ '<br/>'+params[i].seriesName + ':' + params[i].value + '<br/> 排名:'+ par;
                    }
                }
                return tip;
            },
            backgroundColor: '#fff',
            borderColor: '#979797',
            textStyle: {color: '#333',padding: '10px'},
            borderWidth: 1,
            padding: [5, 14],
            axisPointer: {
                type: 'shadow',
                shadowStyle:{
                    color:'rgba(153,153,153,0.1)'
                }
            },
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;'
        },
        grid: {left: '20', right: '80', bottom: '10', top: '10', containLabel: true},
        yAxis: {
            type: 'category',
            data: label,
            //inverse:true,
            axisLine:{lineStyle:{color:'#979797'}},
            axisTick: {show: false},
            axisLabel: {
                color: '#808485',fontSize:13,
            }
        },
        xAxis: [
            {
                type: 'value',
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[28, 0, 0, 4],}
            }
        ],
        color:color,
        dataZoom: [
            {
                type: 'slider',
                show: true, //flase直接隐藏图形
                yAxisIndex: [0],
                start: 20,//滚动条的起始位置
                end: 100, //滚动条的截止位置（按比例分割你的柱状图x轴长度）
                width:6,
                right: 20, //右边的距离
                showDataShadow: false, //是否显示数据阴影 默认auto
                showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
                handleSize:10, //滑动条的 左右2个滑动条的大小
                borderColor:"transparent",
                handleStyle:{color:"#D8D8D8"}
            }
        ],
        series: [{
            type: 'bar', barWidth: 13,name: Name,
            emphasis: {
                itemStyle:{color:'#FA5E9B',}
            },//当前色
            markLine: {silent: true, symbol: "none",//平均值
                data: [{name: "目标值", xAxis: 3.9,
                    lineStyle: {color: "#AFAFAF"}, label: {show: false}
                }]
            },
            data: datalist
        }]
    };
    return option;
}

//横向柱状图 无滚动
function getbarX3Option(datalist,color,Name) {
    var label = [];
    var sortlist = datalist.sort(function(a,b) {
        return a.value - b.value
    })
    for(var i=0;i<sortlist.length;i++) {
        var item = sortlist[i];
        label.push(item.name)
    }
    //背景
    var option = {
        tooltip: {
            trigger: "axis",
            formatter:'{b}<br/>'+ Name +':{c}',
            backgroundColor: '#fff',
            borderColor: '#979797',
            textStyle: {color: '#333',padding: '10px'},
            borderWidth: 1,
            padding: [5, 14],
            axisPointer: {
                type: 'shadow',
                shadowStyle:{
                    color:'rgba(153,153,153,0.1)'
                }
            },
            extraCssText: 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.23);text-align:left;'
        },
        legend: {
            top:10,itemWidth: 8, itemHeight: 8, itemGap: 30,icon: 'circle',
            data:[Name]
        },
        grid: {left: '20', right: '30', bottom: '10', top: '40', containLabel: true},
        yAxis: {
            type: 'category',
            data: label,
            //inverse:true,
            axisLine:{lineStyle:{color:'#979797'}},
            axisTick: {show: false},
            axisLabel: {
                color: '#808485',fontSize:13,
            }
        },
        xAxis: [
            {
                type: 'value',
                axisLine:{show: false}, axisTick:{show:false},
                axisLabel:{color:'#808485',fontSize:13,interval:0},splitLine:{show:false},
                nameTextStyle: {color: '#666',fontSize:10,padding:[28, 0, 0, 4],}
            }
        ],
        color:color,
        series: [{
            type: 'bar', barWidth: 13,name: Name,
            emphasis: {
                itemStyle:{color:'#FA5E9B',}
            },//当前色
            markLine: {silent: true, symbol: "none",//平均值
                data: [{name: "目标值", xAxis: 3.9,
                    lineStyle: {color: "#AFAFAF"}, label: {show: false}
                }]
            },
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            data: datalist
        }]
    };
    return option;
}
