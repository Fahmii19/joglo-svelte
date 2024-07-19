<script>
  import { onMount } from "svelte";
  import Highcharts from "highcharts";
  import HighchartsMore from "highcharts/highcharts-more";

  // Load the highcharts-more module
  HighchartsMore(Highcharts);

  let chart;

  onMount(() => {
    chart = Highcharts.chart("container", {
      chart: {
        polar: true,
        type: "area",
        backgroundColor: "transparent",
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
      },
      xAxis: {
        categories: [
          "Stability",
          "Healthcare",
          "Culture and Environment",
          "Education",
          "Infrastructure",
        ],
        tickmarkPlacement: "on",
        lineWidth: 0,
      },
      yAxis: {
        gridLineInterpolation: "polygon",
        lineWidth: 0,
        min: 0,
        max: 100, // Ensure y-axis reflects the correct range
      },
      tooltip: {
        shared: true,
        pointFormat:
          '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
      },
      plotOptions: {
        series: {
          fillOpacity: 0.1,
        },
      },
      series: [
        {
          name: "Kebayoran Baru",
          data: [90, 1, 85, 87, 89],
          pointPlacement: "on",
          color: "rgba(223, 83, 83, .5)",
        },
        {
          name: "Cilandak",
          data: [80, 82, 78, 81, 83],
          pointPlacement: "on",
          color: "rgba(119, 152, 191, .5)",
        },
        {
          name: "Mampang Prapatan",
          data: [85, 84, 83, 86, 82],
          pointPlacement: "on",
          color: "rgba(144, 237, 125, .5)",
        },
      ],
    });

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  });
</script>

<div id="container"></div>

<style>
  #container {
    width: 100%;
    height: 350px;
  }

  .highcharts-figure,
  .highcharts-data-table table {
    min-width: 320px;
    max-width: 660px;
    margin: 1em auto;
  }

  .highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
  }

  .highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
  }

  .highcharts-data-table th {
    font-weight: 600;
    padding: 0.5em;
  }

  .highcharts-data-table td,
  .highcharts-data-table th,
  .highcharts-data-table caption {
    padding: 0.5em;
  }

  .highcharts-data-table thead tr,
  .highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
  }

  .highcharts-data-table tr:hover {
    background: #f1f7ff;
  }
</style>
