
(function () {
  // 1.实例化对象

  var myChart = echarts.init(document.querySelector(".p1 .chart"));
  // 2.指定配置项和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // Use axis to trigger tooltip
        type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    axisLabel: {
      color: "#fff"
    },
    legend: {
      data: ['2018', '2019', '2020']
    },

    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['Luc Van Gool', 'Chunhua Shen', 'Ming-Hsuan Yang', 'Xiaogang Wang', 'Qi Tian', 'Wei Liu']
    },
    series: [
      {
        name: '2018',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [16, 10, 17, 13, 4, 13]
      },
      {
        name: '2019',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [10, 10, 10, 15, 11, 23]
      },
      {
        name: '2020',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [6, 12, 8, 9, 24, 4]
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 柱状图模块2
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".p2 .chart"));

  // 声明颜色数组
  // 2.指定配置项和数据
  var option = {

    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    axisLabel: {
      color: "#fff"
    },
    tooltip: {},
    dataset: {
      source: [
        ['product', '2018', '2019', '2020'],
        ['Wei Liu', 13, 23, 4],
        ['Qi Tian', 4, 11, 24],
        ['Xiaogang Wang', 13, 15, 9],
        ['Ming-Hsuan Yang', 17, 10, 8],
        ['Chunhua Shen', 10, 10, 12],
        ['Luc Van Gool', 16, 10, 6]
      ]
    },
    xAxis: {type: 'category',
      axisLabel: { interval: 0, rotate: 30 }},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
      {type: 'bar'},
      {type: 'bar'},
      {type: 'bar'}
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);


  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图模块1
(function () {
  // 年份对应数据


  var myChart = echarts.init(document.querySelector(".p3 .chart"));

  var option = {


    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['2018', '2019', '2020', 'All'],
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4cfd93'
      },
      right: '10%',
    },
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],

    axisLabel: {
      color: "#fff"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '2018',
        type: 'line',
        data: [
          [1, 3],
          [2,136],
          [3,233],
          [4,344],
          [5,311],
          [6,208],
          [7,132],
          [8,58],
          [9,20],
          [10,8],
          [11,6],
          [12,2],
          [13,1],
          [14,2],
          [15,1],
          [23,1],
        ],
        smooth: true
      },
      {
        name: '2019',
        type: 'line',
        data: [
          [1, 5],
          [2,83],
          [3,151],
          [4,271],
          [5,177],
          [6,197],
          [7,75],
          [8,119],
          [9,10],
          [10,100],
          [12,63],
          [14,23],
          [16,9],
          [18,6],
          [20,2],
          [22,1],
          [24,1],
          [26,1]
        ],
        smooth: true
      },
      {
        name: '2020',
        type: 'line',
        data: [
          [1, 7],
          [2,106],
          [3,217],
          [4,256],
          [5,201],
          [6,107],
          [7,50],
          [8,19],
          [9,10],
          [10,1],
          [11,1],
          [12,3],
          [24,1]
        ],
        smooth: true
      },
      {
        name: 'All',
        type: 'line',
        data: [
          [1, 15],
          [2,325],
          [3,601],
          [4,871],
          [5,689],
          [6,512],
          [7,257],
          [8,196],
          [9,40],
          [10,109],
          [11,7],
          [12,68],
          [13,1],
          [14,25],
          [15,1],
          [16,9],
          [18,6],
          [20,2],
          [22,1],
          [23,1],
          [24,2],
          [26,1]
        ],
        smooth: true
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

})();

(function () {
  var myChart = echarts.init(document.querySelector('.p4 .chart'));

  var option = {
    tooltip: {
      trigger: 'item'
    },

    color: ["#d910e7", "#74e2f5", "#8ce356", "#f84848", "#8B78F6","#31d7e5", "#78f574", "#e8e535", "#f848f5", "#8B78F6"],
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        color: 'rgba(235,253,76,0.78)'
      },
      right: '10%',
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['20%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '15',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 298, name: '40-'},
          {value: 356, name: '40-50'},
          {value: 689, name: '50-60'},
          {value: 876, name: '60-70'},
          {value: 703, name: '70-80'},
          {value: 347, name: '80-90'},
          {value: 235, name: '90-100'},
          {value: 139, name: '100-110'},
          {value: 96, name: '110+'}
        ]
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图1
(function () {
  var myChart = echarts.init(document.querySelector(".p5 .chart"));
  var option = {

    tooltip: {
      trigger: 'axis'
    },
    axisLabel: {
      color: "#fff"
    },
    legend: {
      data: ['learning', 'image', 'deep', 'object', 'networks', 'detection', '3d','segmentation','recognition']
    },
    color: ["#10e725", "#d51a15", "#56e3d7", "#63abff", "#8B78F6","#31d7e5", "#78f574", "#e8e535", "#f848f5", "#8B78F6"],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        color: 'rgb(249,255,1)'
      },
      right: '10%',
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019','2020']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'learning',
        type: 'line',
        data: [63,63,75,96,142,215,282,314]
      },
      {
        name: 'image',
        type: 'line',
        data: [52,67,89,77,97,121,172,183]
      },
      {
        name: 'deep',
        type: 'line',
        data: [3,13,53,80,124,122,127,120]
      },
      {
        name: 'object',
        type: 'line',
        data: [46,42,61,66,53,73,100,138]
      },
      {
        name: 'networks',
        type: 'line',
        data: [1,9,27,56,103,112,136,96]
      },
      {
        name: 'detection',
        type: 'line',
        data: [50,33,50,57,54,68,107,119]
      },
      {
        name: '3d',
        type: 'line',
        data: [33,46,36,47,55,78,96,138]
      },
      {
        name: 'segmentation',
        type: 'line',
        data: [28,39,32,39,51,60,93,115]
      },
      {
        name: 'recognition',
        type: 'line',
        data: [42,42,46,45,57,48,66,81]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图2
(function () {
  // 年份对应数据
  var yearData = [{
    year: "2013",
    data: [
      {value: 63, name: 'learning'},
      {value: 52, name: 'image'},
      {value: 50, name: 'detection'},
      {value: 46, name: 'object'},
      {value: 42, name: 'recognition'},
      {value: 41, name: 'based'},
      {value: 33, name: '3d'},
      {value: 28, name: 'segmentation'},
      {value: 24, name: 'multi'},
      {value: 24, name: 'visual'}]},
    {
      year: "2014",
      data: [
        {name : 'image', value : 67},
        {name : 'learning', value : 63},
        {name : 'based', value : 54},
        {name : '3d', value : 46},
        {name : 'object', value : 42},
        {name : 'recognition', value : 42},
        {name : 'multi', value : 40},
        {name : 'segmentation', value : 39},
        {name : 'tracking', value : 34},
        {name : 'detection', value : 33}]
    },
    {year: "2015", data: [
        {name: 'image', value: 89},
        {name: 'learning', value: 75},
        {name: 'object', value: 61},
        {name: 'deep', value: 53},
        {name: 'detection', value: 50},
        {name: 'based', value: 47},
        {name: 'recognition', value: 46},
        {name: 'estimation', value: 41},
        {name: 'multi', value: 41},
        {name: '3d', value: 36}
      ]
    },
    {
      year: "2016",
      data: [
        {name : 'learning', value : 96},
        {name : 'deep', value : 80},
        {name : 'image', value : 77},
        {name : 'object', value : 66},
        {name : 'detection', value : 57},
        {name : 'networks', value : 56},
        {name : '3d', value : 47},
        {name : 'recognition', value : 45},
        {name : 'neural', value : 44},
        {name : 'convolutional', value : 43}]
    },
    {
      year: "2017",
      data: [
        {name : 'learning', value : 142},
        {name : 'deep', value : 124},
        {name : 'networks', value : 103},
        {name : 'image', value : 97},
        {name : 'network', value : 66},
        {name : 'neural', value : 57},
        {name : 'recognition', value : 57},
        {name : '3d', value : 55},
        {name : 'detection', value : 54},
        {name : 'visual', value : 54}]
    },
    {
      year: "2018",
      data: [
        {name : 'learning', value : 215},
        {name : 'deep', value : 122},
        {name : 'image', value : 121},
        {name : 'networks', value : 112},
        {name : 'network', value : 95},
        {name : '3d', value : 78},
        {name : 'object', value : 73},
        {name : 'detection', value : 68},
        {name : 'video', value : 68},
        {name : 'visual', value : 63}]
    },
    {
      year: "2019",
      data: [
        {name : 'learning', value : 282},
        {name : 'image', value : 172},
        {name : 'networks', value : 136},
        {name : 'deep', value : 127},
        {name : 'network', value : 123},
        {name : 'detection', value : 107},
        {name : 'object', value : 100},
        {name : '3d', value : 96},
        {name : 'segmentation', value : 93},
        {name : 'neural', value : 85}]
    },
    {
      year: "2020",
      data: [
        {name : 'learning', value : 314},
        {name : 'image', value : 183},
        {name : '3d', value : 138},
        {name : 'object', value : 138},
        {name : 'network', value : 128},
        {name : 'deep', value : 120},
        {name : 'detection', value : 119},
        {name : 'segmentation', value : 115},
        {name : 'neural', value : 103},
        {name : 'multi', value : 100}
      ]
    }

  ];

  var myChart = echarts.init(document.querySelector(".p6 .chart"));

  var option = {
    tooltip: {
      trigger: 'item'
    },
    color: ["#e0e710", "#ff5932", "#94ffef", "#e263ff", "#8B78F6","#31d7e5", "#78f574", "#e8e535", "#f848f5", "#8B78F6"],

    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        color: 'rgba(172,248,255,0.78)'
      },
      right: '10%',
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '25',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: yearData[7].data
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  $('.p6 h2 a').on('click', function () {
    // console.log($(this).index());
    // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data;

    // 选中年份高亮
    $('.p6 h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
})();


// 模拟飞行路线地图
(function () {
  var myChart = echarts.init(document.querySelector(".p9 .chart"));
  var option = {
    axisLabel: {
      color: "#fff"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019','2020']
    },
    yAxis: {
      type: 'value'
    },
    series: [{

      data: [471, 540, 602, 643, 783, 979, 1294,1466],
      type: 'line',
      smooth: true
    }]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();