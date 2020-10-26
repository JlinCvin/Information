var d=new Date()
  var day=d.getDate() - 1
  var month=d.getMonth() + 1
  var year=d.getFullYear()
  var yestday = (year + "-" + month + "-" +day )
  var firstday = (year + "-01-01" )

    layui.use('laydate', function () {
      var laydate = layui.laydate;

      //执行一个laydate实例
      laydate.render({
        elem: '#test1' //指定元素
        , theme: '#637EF0'
        ,value: firstday

      });
      laydate.render({
        elem: '#test2' //指定元素
        , theme: '#637EF0'
        ,value: yestday

      });
    });

function getczlchart1ption(czlid,czlcolor,czline,czlname,czldatas) {
    var chart2 = echarts.init(document.getElementById(czlid));
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        color: czlcolor,
        data: czline,
        left: 'center',
        bottom: 'bottom'
    },
    grid: {
        top: 'middle',
        left: '3%',
        right: '4%',
        bottom: '3%',
        height: '80%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisTick:{    
        show: false
        },
        data: czlname,
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        }
    },
    yAxis: {
        type: 'value',

        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisTick:{       //y轴刻度线
        show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
            
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }
    },
    series: czldatas
};
chart2.setOption(option)
}