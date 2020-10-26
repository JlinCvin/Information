/**
 饼图、环形图
**/

//环形图
function getPie1Option(data,color){
    var nameArr = [];
    for (var i = 0; i < data.length; i++) {
        nameArr.push(data[i].name)
    }
    var option = {
        tooltip: {
            show: true,
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
            formatter: "{b}：{c}<br/>{d}%"
        },
        color: color,
        backgroundColor:'transparent',
        series: [{
            name: '',
            type: 'pie',
            radius: ['36%', '58%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 13,
                        color:'#888',
                        lineHeight: 24,
                    },
                    formatter: '{b}：{c}\n{d}%',
                }
            },
            labelLine: {
                lineStyle:{
                    width: 1,
                    color:'#ddd',
                },
            },
            data: data,
        }]
    };
    return option;
}



