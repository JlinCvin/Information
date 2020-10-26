// 广东地图
function getMap1Option(data) {
    var option = {
        tooltip: {
            formatter:'{b}<br/>受理案件数：{c} ',
            /*formatter: function(param) {
                return  Math.round(param.percent) + '%';
            }*/
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
        },
        visualMap: {
            min: 0,max: 1000,right: 30,text: '',itemWidth:'9',itemHeight:'100',realtime: false,calculable: true,
            inRange: {color: ['#CBDCFF', '#3C79F5']}
        },
        series: [{
            type: 'map',name:'', map: 'guangdong',
            left: 50,right: 100,top: 0,bottom: 10,zlevel: 0,
            label: {
                normal: {show: true,color: '#274148',fontSize: 12},
                emphasis: {show: true,color: '#fff',fontSize: 14}
            },
            itemStyle: {
                normal: {areaColor: 'rgba(41, 81, 183, 1)',borderColor: '#ffffff',borderWidth: 1},
                emphasis: {areaColor: '#FE6969'}
            },
            data: data,
        }]
    };
    return option;
};

// 中国地图
function getMap2Option(data) {
    var option = {
        tooltip: {
            /*formatter: function (params) {
                return params.name + '：' + params.data['value'] + '%'
            },*/
            formatter:'{b}<br/>{a}：<br/>{c} ',
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
        },
        visualMap: {
            min: 0,max: 5,right: 30,text: '',itemWidth:'9',itemHeight:'100',realtime: false,calculable: true,
            inRange: {color: ['#CBDCFF', '#3C79F5']}
        },
        geo: {//roam: true,
             map: 'china', left: 70,right: 100,top: 0,bottom: 10,
            label: {
                normal: {show: false,color: '#274148',fontSize: 12},
                emphasis: {show: true,color: '#274148',fontSize: 14}
            },
            itemStyle: {
                normal: {areaColor: 'rgba(41, 81, 183, 1)',borderColor: '#ffffff',borderWidth: 1},
                emphasis: {areaColor: '#FE6969'}
            },
            regions: [{
                name: '南海诸岛',value: 0,itemStyle: {normal: {opacity: 0,label: {show: false}}}
            }],
        },
        series: [{
            name: '受理案件',
            type: 'map',
            geoIndex: 0,
            label: {
                show: false,
            },
            data: data
        }]
    }
    return option;
};


//东莞地图
function getMap3Option(data) {
    var option = {
        tooltip: {
            formatter:'{b}<br/>案件比：{c} ',
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
        },
        visualMap: {
            min: 0,max: 1000,right: 30,text: '',itemWidth:'9',itemHeight:'100',realtime: false,calculable: true,
            inRange: {color: ['#CBDCFF', '#3C79F5']}
        },
        series: [{
            type: 'map',name:'1111', map: '东莞',
            left: 50,right: 100,top: 0,bottom: 10,zlevel: 0,
            label: {
                normal: {show: true,color: '#274148',fontSize: 10},
                emphasis: {show: true,color: '#fff',fontSize: 12}
            },
            itemStyle: {
                normal: {areaColor: 'rgba(41, 81, 183, 1)',borderColor: '#ffffff',borderWidth: 1},
                emphasis: {areaColor: '#FE6969'}
            },
            data: data,
        },{
            type: 'map',name:'2222',map: '东莞',
            left: 50,right: 100,top: 0,bottom: 10,zlevel: 0,
            label: {
                normal: {show: true,color: '#274148',fontSize: 10},
                emphasis: {show: true,color: '#fff',fontSize: 12}
            },
            itemStyle: {
                normal: {areaColor: 'rgba(41, 81, 183, 1)',borderColor: '#ffffff',borderWidth: 1},
                emphasis: {areaColor: '#FE6969'}
            },
            data: data
        }]
    };
    return option;
};


















