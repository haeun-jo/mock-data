am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  let chart = am4core.create("chartdiv", am4charts.XYChart);

  chart.data = [
    {
      xAxis: "BP",
      group1: ["GBS1"],
      data1: [1],
      group2: ["GBS2"],
      data2: [3],
    },
    {
      xAxis: "BPP",
      group1: ["sp1", "sp2", "sp3"],
      data1: [1, 2, 3],
      group2: ["spp1", "spp2", "spp3"],
      data2: [1, 3, 5],
    },
    {
      xAxis: "CP",
      group1: ["cmv1", "cmv2", "cmv3"],
      data1: [1, 3, 5],
      group2: ["nk1", "etc2", "etc3"],
      data2: [1, 2, 3],
    },
    {
      xAxis: "HI",
      group1: ["uo1", "uo2", "uo3"],
      data1: [1, 3, 5],
      group2: ["eic1", "eic2", "eic3"],
      data2: [1, 2, 3],
    },
    {
      xAxis: "LP",
      group1: ["nky1", "nky2", "nky3"],
      data1: [1, 3, 5],
      group2: ["wpy1", "wpy2", "wpy3"],
      data2: [1, 2, 3],
    },
    {
      xAxis: "MP",
      group1: ["dkje1", "dkje2", "dkje3"],
      data1: [1, 3, 5],
      group2: ["blkn1", "blkn2", "blkn3"],
      data2: [1, 2, 3],
    },
    {
      xAxis: "SP",
      group1: ["bklje1", "bklje2", "bklje3"],
      data1: [1, 20, 16],
      group2: ["vb"],
      data2: [1],
    },
    {
      xAxis: "Flu A",
      group1: ["bn1", "bn2"],
      data1: [1, 3],
      group2: ["we1"],
      data2: [10],
    },
    {
      xAxis: "Flu B",
      group1: ["nfg1", "nfg2", "nfg3"],
      data1: [1, 3, 5],
      group2: ["nnb1", "nnb2"],
      data2: [1, 2],
    },
  ];

  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "xAxis";
  categoryAxis.renderer.grid.template.location = 0;

  let group1Data = [];
  for (let i = 0; i < chart.data.length; i++) {
    let group1Obj = {};
    if (chart.data[i].group1) {
      chart.data[i].group1.map((key, idx) => {
        group1Obj["xAxis"] = chart.data[i].xAxis;
        group1Obj[key] = chart.data[i].data1[idx];
      });
      group1Obj.none = "0";
      group1Data.push(group1Obj);
    }
  }

  console.log(group1Data);

  // chart.data.map((i) => console.log(i.data1.reduce((acc, cur) => acc + cur)));

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 50;
  valueAxis.strictMinMax = true;
  valueAxis.renderer.minGridDistance = 30;
  valueAxis.renderer.baseGrid.disabled = true;
  valueAxis.calculateTotals = true;

  function createSeries1(field) {
    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.data = group1Data;
    series1.name = field;
    series1.dataFields.valueY = field;
    series1.dataFields.categoryX = "xAxis";
    series1.sequencedInterpolation = true;

    series1.stacked = true;

    let labelBullet = series1.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = "{valueY}";
    labelBullet.locationY = 0.5;
  }

  for (let i = 0; i < group1Data.length; i++) {
    let keyList = Object.keys(group1Data[i]);
    console.log(keyList);
    for (let j = 1; j < keyList.length - 1; j++) {
      createSeries1(keyList[j]);
      console.log(keyList[j]);
    }
    console.log(group1Data[i]);
  }

  let group2Data = [];
  for (let i = 0; i < chart.data.length; i++) {
    let group2Obj = {};
    if (chart.data[i].group2) {
      chart.data[i].group2.map((key, idx) => {
        group2Obj["xAxis"] = chart.data[i].xAxis;
        group2Obj[key] = chart.data[i].data2[idx];
      });
      group2Obj.none2 = "0";
      group2Data.push(group2Obj);
    }
  }

  console.log(group2Data);

  function createSeries2(field, stacked = true) {
    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.data = group2Data;
    series2.name = field;
    series2.dataFields.valueY = field;
    series2.dataFields.categoryX = "xAxis";
    series2.sequencedInterpolation = true;

    series2.stacked = stacked;

    let labelBullet = series2.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = "{valueY}";
    labelBullet.locationY = 0.5;
  }

  for (let i = 0; i < group2Data.length; i++) {
    let keyList = Object.keys(group2Data[i]);
    console.log(keyList);
    for (let j = 1; j < keyList.length - 1; j++) {
      if (i === 0 && j === 1) {
        // if (i === 0) {
        createSeries2(keyList[j], false);
      } else {
        createSeries2(keyList[j]);
      }
    }
  }

  // Create series for total
  var totalSeries = chart.series.push(new am4charts.ColumnSeries());
  totalSeries.data = group1Data;
  totalSeries.dataFields.valueY = "none";
  totalSeries.dataFields.categoryX = "xAxis";
  totalSeries.stacked = true;
  totalSeries.hiddenInLegend = true;
  totalSeries.columns.template.strokeOpacity = 0;

  var totalBullet = totalSeries.bullets.push(new am4charts.LabelBullet());
  totalBullet.dy = -20;
  totalBullet.label.text = "{valueY.total}";
  totalBullet.label.hideOversized = false;
  totalBullet.label.fontSize = 18;
  totalBullet.label.background.fill = totalSeries.stroke;
  totalBullet.label.background.fillOpacity = 0.2;
  totalBullet.label.padding(5, 10, 5, 10);

  // var totalSeries2 = chart.series.push(new am4charts.ColumnSeries());
  // totalSeries2.data = group2Data;
  // totalSeries2.dataFields.valueY = "none2";
  // totalSeries2.dataFields.categoryX = "xAxis";
  // totalSeries2.stacked = true;
  // totalSeries2.hiddenInLegend = true;
  // totalSeries2.columns.template.strokeOpacity = 0;

  // var totalBullet2 = totalSeries2.bullets.push(new am4charts.LabelBullet());
  // totalBullet2.dy = -20;
  // totalBullet2.label.text = "{valueY.total2}";
  // totalBullet2.label.hideOversized = false;
  // totalBullet2.label.fontSize = 18;
  // totalBullet2.label.background.fill = totalSeries.stroke;
  // totalBullet2.label.background.fillOpacity = 0.2;
  // totalBullet2.label.padding(5, 10, 5, 10);

  // Add cursor
  chart.cursor = new am4charts.XYCursor();

  // Add legend
  chart.legend = new am4charts.Legend();
  chart.legend.position = "right";
  chart.legend.valign = "middle";

  chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarY = new am4charts.XYChartScrollbar();
});
