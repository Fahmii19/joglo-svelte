<!-- <script>
  import { onMount } from "svelte";
  import Highcharts from "highcharts";
  import HighchartsMore from "highcharts/highcharts-more";
  import Highcharts3D from "highcharts/highcharts-3d";

  // Load the highcharts-more and highcharts-3d modules
  HighchartsMore(Highcharts);
  Highcharts3D(Highcharts);

  let chart;

  onMount(() => {
    chart = Highcharts.chart("container", {
      chart: {
        polar: true,
        type: "area",
        backgroundColor: "transparent",
        height: 200, // Set chart height to 200px
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 10,
          depth: 70,
          viewDistance: 25,
        },
      },
      title: {
        text: null, // Remove chart title
      },
      pane: {
        size: "80%", // Adjust the size of the pane to provide more padding
        startAngle: 0,
        endAngle: 360,
        background: {
          backgroundColor: "#f8f8f8",
          borderWidth: 1,
          borderColor: "#ddd",
        },
      },
      xAxis: {
        categories: [
          "Konektivitas Pejalan Kaki",
          "Ruang Terbuka",
          "Fasilitas Publik",
          "Budaya Perkotaan",
          "Ruang Usaha",
          "Pelayanan Kesehatan",
          "Fasilitas Pendidikan",
          "Transportasi Publik",
        ],
        tickmarkPlacement: "on",
        lineWidth: 0,
        labels: {
          style: {
            color: "#333",
            fontSize: "10px",
            whiteSpace: "nowrap",
          },
          distance: 15, // Adjusted distance for spacing
        },
      },
      yAxis: {
        gridLineInterpolation: "polygon",
        lineWidth: 0,
        min: 0, // Start from 0 to ensure proper spacing
        max: 5, // Ensure y-axis reflects the correct range
        tickInterval: 1, // Set interval for y-axis ticks
        gridLineColor: "#ddd",
        labels: {
          enabled: false, // Disable y-axis labels
        },
      },
      tooltip: {
        shared: true,
        pointFormat:
          '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
      },
      plotOptions: {
        series: {
          fillOpacity: 0.4,
          marker: {
            radius: 4,
            lineColor: "#5196ad",
            lineWidth: 1,
          },
          pointPlacement: "on", // Ensure points are placed correctly on the categories
          dataLabels: {
            enabled: false, // Disable data labels
          },
        },
      },
      legend: {
        enabled: false, // Hide legend
      },
      credits: {
        enabled: false, // Hide Highcharts watermark
      },
      series: [
        {
          name: "Nilai",
          data: [5, 4, 5, 3, 3, 2, 4, 3], // Updated data to match the chart
          pointPlacement: "on",
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, "#4CAF50"],
              [1, "#2196F3"],
            ],
          },
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
    height: 200px; /* Adjust container height to 200px */
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
</style> -->
