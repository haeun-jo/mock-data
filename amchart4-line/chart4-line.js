/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("chartdiv", am4charts.XYChart);

  // Add data
  chart.data = [
    {
      xAxis: "2022-04-19",
      keys: ["SC2", "AdV", "HRV", "PIV", "RSV"],
      SC2: 18,
      AdV: 19,
      HRV: 20,
      PIV: 23,
      RSV: 22,
    },
    {
      xAxis: "2022-04-19(1)",
      keys: ["DIE", "CKB", "EPY"],
      DIE: 21,
      CKB: 22,
      EPY: 24,
    },
    {
      xAxis: "2022-04-19(2)",
      keys: ["DIE", "CKB", "EPY"],
      DIE: 21,
      CKB: 22,
      EPY: 24,
    },
    {
      xAxis: "2022-04-22(1)",
      keys: ["DG", "BF", "ADSE"],
      DG: 20,
      BF: 23,
      ADSE: 24,
    },
    {
      xAxis: "2022-04-22(2)",
      keys: ["DG", "BF", "ADSE"],
      DG: 20,
      BF: 23,
      ADSE: 24,
    },
    {
      xAxis: "2022-04-25(1)",
      keys: ["DG", "BF", "ADSE"],
      DG: 20,
      BF: 23,
      ADSE: 24,
    },
    {
      xAxis: "2022-04-25(2)",
      keys: ["DG", "BF", "ADSE"],
      DG: 20,
      BF: 23,
      ADSE: 24,
    },
    {
      xAxis: "2022-04-25(3)",
      keys: ["DG", "BF", "ADSE"],
      DG: 24,
      BF: 27,
      ADSE: 33,
    },
    {
      xAxis: "2022-04-26(1)",
      keys: ["GHJK", "TYU", "VCCBV"],
      GHJK: 22,
      TYU: 26,
      VCCBV: 36,
    },
    {
      xAxis: "2022-04-26(2)",
      keys: ["GHJK", "TYU", "VCCBV"],
      GHJK: 22,
      TYU: 26,
      VCCBV: 36,
    },
    {
      xAxis: "2022-04-26(3)",
      keys: ["GHJK", "TYU", "VCCBV"],
      GHJK: 22,
      TYU: 26,
      VCCBV: 36,
    },
    {
      xAxis: "2022-04-27(1)",
      keys: ["GHJK", "TYU", "VCCBV"],
      GHJK: 22,
      TYU: 26,
      VCCBV: 36,
    },
    {
      xAxis: "2022-04-27(2)",
      keys: ["GHJK", "TYU", "VCCBV"],
      GHJK: 22,
      TYU: 26,
      VCCBV: 36,
    },
    {
      xAxis: "2022-04-27(3)",
      keys: ["GHJK", "TYU", "VCCBV"],
      GHJK: 22,
      TYU: 26,
      VCCBV: 36,
    },
    {
      xAxis: "2022-04-28(1)",
      keys: ["LKJ", "RTY", "VBN", "BNV", "ERW", "TU"],
      LKJ: 17,
      RTY: 20,
      VBN: 23,
      BNV: 24,
      ERW: 28,
      TU: 39,
    },
    {
      xAxis: "2022-04-28(2)",
      keys: ["LKJ", "RTY", "VBN", "BNV", "ERW", "TU"],
      LKJ: 17,
      RTY: 20,
      VBN: 23,
      BNV: 24,
      ERW: 28,
      TU: 39,
    },
    {
      xAxis: "2022-04-28(3)",
      keys: ["LKJ", "RTY", "VBN", "BNV"],
      LKJ: 17,
      RTY: 20,
      VBN: 23,
      BNV: 24,
    },
    {
      xAxis: "2022-04-28(4)",
      keys: ["LKJ", "RTY", "VBN", "BNV"],
      LKJ: 17,
      RTY: 20,
      VBN: 23,
      BNV: 24,
    },
    {
      xAxis: "2022-04-28(5)",
      keys: ["LKJ", "RTY", "VBN", "BNV"],
      LKJ: 36,
      RTY: 34,
      VBN: 27,
      BNV: 22,
    },
  ];

  // Create category axisi
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "xAxis";
  categoryAxis.renderer.grid.template.disabled = true;
  categoryAxis.renderer.labels.template.fontSize = 14;

  // Create value axis
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Ct Values";
  valueAxis.title.fontWeight = "bold";
  valueAxis.renderer.minLabelPosition = 0.01;
  valueAxis.min = 0;
  valueAxis.max = 45;

  let field = [];

  chart.data.map((e, i) => {
    for (let i = 0; i < e.keys.length; i++) {
      console.log(e.keys[i], e[e.keys[i]]);
      if (!field.includes(e.keys[i])) field.push(e.keys[i]);
      console.log(field);
    }
    console.log(e.xAxis);
  });

  for (let i = 0; i < field.length; i++) {
    createSeries(field[i], chart.colors.getIndex(i));
  }

  function createSeries(field, color) {
    let series = chart.series.push(new am4charts.LineSeries());
    series.name = field;
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "xAxis";
    series.bullets.push(new am4charts.CircleBullet());
    series.tooltipText = `[${color}]●[/] {name} : {valueY}`;
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#fff");
    series.tooltip.background.fillOpacity = 1;
    series.tooltip.label.fill = "#000";
    series.legendSettings.valueText = "{valueY}";
    series.visible = false;

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    let hs = series.segments.template.states.create("hover");
    hs.properties.strokeWidth = 5;
    series.segments.template.strokeWidth = 1;
  }

  // Add legend
  chart.legend = new am4charts.Legend();
  chart.legend.position = "right";
  chart.legend.valign = "middle";
  chart.legend.itemContainers.template.events.on("over", function (event) {
    var segments = event.target.dataItem.dataContext.segments;
    segments.each(function (segment) {
      segment.isHover = true;
    });
  });

  chart.legend.itemContainers.template.events.on("out", function (event) {
    var segments = event.target.dataItem.dataContext.segments;
    segments.each(function (segment) {
      segment.isHover = false;
    });
  });

  // Add scrollbar
  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarY = new am4core.Scrollbar();
});
