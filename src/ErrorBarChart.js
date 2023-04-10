import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { useState, useEffect, useRef, useContext } from 'react';
import { Store } from './Context';

const ClusteredColumnChart = () => {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4 } = useContext(Store)

  const [chart, setChart] = useState(null);
  const chartRef = useRef();
  function DataButtonFilter(){
    if(Button3){
      return [ {
        group: 'w4',
        "Bimatoprost implant 6 µg ( n = 18)": 94.4,
        "Bimatoprost implant 10 µg ( n = 21)": 100,
        "Bimatoprost implant 15 µg ( n = 21)": 100,
        "Bimatoprost implant 20 µg ( n = 15)": 100,
      },
      {
        group: 'w12',
        "Bimatoprost implant 6 µg ( n = 18)": 94.4,
        "Bimatoprost implant 10 µg ( n = 21)": 100,
        "Bimatoprost implant 15 µg ( n = 21)": 100,
        "Bimatoprost implant 20 µg ( n = 15)": 80,
      },
      {
        group: 'm6',
        "Bimatoprost implant 6 µg ( n = 18)": 72.2,
        "Bimatoprost implant 10 µg ( n = 21)": 66.7,
        "Bimatoprost implant 15 µg ( n = 21)": 66.7,
        "Bimatoprost implant 20 µg ( n = 15)": 66.7,
      },
      {
        group: 'm9',
        "Bimatoprost implant 6 µg ( n = 18)": 66.7,
        "Bimatoprost implant 10 µg ( n = 21)": 47.6,
        "Bimatoprost implant 15 µg ( n = 21)": 47.6,
        "Bimatoprost implant 20 µg ( n = 15)": 53.3,
      },
      {
        group: 'm12',
        "Bimatoprost implant 6 µg ( n = 18)": 50,
        "Bimatoprost implant 10 µg ( n = 21)": 33.3,
        "Bimatoprost implant 15 µg ( n = 21)": 38.1,
        "Bimatoprost implant 20 µg ( n = 15)": 40,
      },
      {
        group: 'm18',
        "Bimatoprost implant 6 µg ( n = 18)": 38.9,
        "Bimatoprost implant 10 µg ( n = 21)": 23.8,
        "Bimatoprost implant 15 µg ( n = 21)": 23.8,
        "Bimatoprost implant 20 µg ( n = 15)": 33.3,
      },
      {
        group: 'm24',
        "Bimatoprost implant 6 µg ( n = 18)": 33.3,
        "Bimatoprost implant 10 µg ( n = 21)": 23.8,
        "Bimatoprost implant 15 µg ( n = 21)": 23.8,
        "Bimatoprost implant 20 µg ( n = 15)": 33.3,
      },]
    }else if(Button2){
      return [{
        group: 'w4',
        "Bimatoprost implant 6 µg ( n = 18)": 94.4,
        "Bimatoprost implant 10 µg ( n = 21)": 100,
        "Bimatoprost implant 15 µg ( n = 21)": 100,
        "Bimatoprost implant 20 µg ( n = 15)": 100,
      },
      {
        group: 'w12',
        "Bimatoprost implant 6 µg ( n = 18)": 94.4,
        "Bimatoprost implant 10 µg ( n = 21)": 100,
        "Bimatoprost implant 15 µg ( n = 21)": 100,
        "Bimatoprost implant 20 µg ( n = 15)": 80,
      },
      {
        group: 'm6',
        "Bimatoprost implant 6 µg ( n = 18)": 72.2,
        "Bimatoprost implant 10 µg ( n = 21)": 66.7,
        "Bimatoprost implant 15 µg ( n = 21)": 66.7,
        "Bimatoprost implant 20 µg ( n = 15)": 66.7,
      },
      {
        group: 'm9',
        "Bimatoprost implant 6 µg ( n = 18)": 66.7,
        "Bimatoprost implant 10 µg ( n = 21)": 47.6,
        "Bimatoprost implant 15 µg ( n = 21)": 47.6,
        "Bimatoprost implant 20 µg ( n = 15)": 53.3,
      },
      {
        group: 'm12',
        "Bimatoprost implant 6 µg ( n = 18)": 50,
        "Bimatoprost implant 10 µg ( n = 21)": 33.3,
        "Bimatoprost implant 15 µg ( n = 21)": 38.1,
        "Bimatoprost implant 20 µg ( n = 15)": 40,
      }]
    }else if(Button1){
     return [{
      group: 'w4',
      "Bimatoprost implant 6 µg ( n = 18)": 94.4,
      "Bimatoprost implant 10 µg ( n = 21)": 100,
      "Bimatoprost implant 15 µg ( n = 21)": 100,
      "Bimatoprost implant 20 µg ( n = 15)": 100,
    },
    {
      group: 'w12',
      "Bimatoprost implant 6 µg ( n = 18)": 94.4,
      "Bimatoprost implant 10 µg ( n = 21)": 100,
      "Bimatoprost implant 15 µg ( n = 21)": 100,
      "Bimatoprost implant 20 µg ( n = 15)": 80,
    },
    {
      group: 'm6',
      "Bimatoprost implant 6 µg ( n = 18)": 72.2,
      "Bimatoprost implant 10 µg ( n = 21)": 66.7,
      "Bimatoprost implant 15 µg ( n = 21)": 66.7,
      "Bimatoprost implant 20 µg ( n = 15)": 66.7,
    }]
    }
  }
  
  useEffect(() => {
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);

   

    // Add data
    chart.data = DataButtonFilter()

    chart.logo.disabled = true;

    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'group';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.title.text = 'Study Visit';
    categoryAxis.renderer.cellStartLocation = 0.2;
categoryAxis.renderer.cellEndLocation = 0.8;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.minGridDistance = 20;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.title.text = 'Study eyes not rescued or re-treated(%)';

    // Create series
    const series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = "Bimatoprost implant 6 µg ( n = 18)";
    series1.dataFields.categoryX = 'group';
    series1.name = 'Bimatoprost implant 6 µg ( n = 18)';
    series1.columns.template.width = am4core.percent(70);
    series1.columns.template.tooltipText = '{name}: {valueY}%';
    series1.strokeWidth = 0;
    series1.fill = am4core.color('blue');

    const series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY =  "Bimatoprost implant 10 µg ( n = 21)";
    series2.dataFields.categoryX = 'group';
    series2.name =  "Bimatoprost implant 10 µg ( n = 21)"
    series2.columns.template.width = am4core.percent(70);
    series2.columns.template.tooltipText = '{name}: {valueY}%';
    series2.strokeWidth = 0;
    series2.fill = am4core.color('green');

    const series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.dataFields.valueY = "Bimatoprost implant 15 µg ( n = 21)"
    series3.dataFields.categoryX = 'group';
    series3.name = "Bimatoprost implant 15 µg ( n = 21)"
    series3.columns.template.width = am4core.percent(70);
    series3.columns.template.tooltipText = '{name}: {valueY}%';
    series3.strokeWidth = 0;
    series3.fill = am4core.color('purple');

    const series4 = chart.series.push(new am4charts.ColumnSeries());
    series4.dataFields.valueY = "Bimatoprost implant 20 µg ( n = 15)"
    series4.dataFields.categoryX = 'group';
    series4.name = "Bimatoprost implant 20 µg ( n = 15)"
    series4.columns.template.width = am4core.percent(70);
    series4.columns.template.tooltipText = '{name}: {valueY}%';
    series4.strokeWidth = 0;
    series4.fill = am4core.color('orange');
     // Add legend
  chart.legend = new am4charts.Legend();
  chart.legend.position = 'right';
  chart.legend.maxWidth = 400;
  chart.legend.markers.template.width = 20;
  chart.legend.markers.template.height = 20;


  // Set chart instance to the ref
  chartRef.current = chart;

  // Clean up the chart when the component unmounts
  return () => {
    chart.dispose();
  };
}, [DataButtonFilter,Button1,Button2,Button3]);

return <div id="chartdiv" style={{ width: '1500px', height: '500px' }} />;
}
export default ClusteredColumnChart;