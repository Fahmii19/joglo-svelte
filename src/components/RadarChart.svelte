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
          "Ruang Terbuka dan Publik",
          "Fasilitas Komunitas",
          "Aktivitas Budaya Perkotaan",
          "Lokasi Bekerja",
          "Pelayanan Kesehatan",
          "Pendidikan",
          "Transportasi Publik",
          "Campuran Guna Lahan",
        ],
        tickmarkPlacement: "on",
        lineWidth: 0,
        labels: {
          style: {
            color: "#333",
            fontSize: "10px", // Reduced font size
          },
          distance: 20, // Added distance for spacing
        },
      },
      yAxis: {
        gridLineInterpolation: "polygon",
        lineWidth: 0,
        min: 1, // Start from 1
        max: 5, // Ensure y-axis reflects the correct range
        tickInterval: 1, // Set interval for y-axis ticks
        gridLineColor: "#ddd",
        labels: {
          style: {
            color: "#333",
            fontSize: "10px", // Reduced font size
          },
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
          name: "Parameter",
          data: [5, 4, 5, 3, 3, 2, 4, 3, 5], // Updated data to match the chart
          pointPlacement: "on",
          color: "#73C8E5", // Use blue color
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
    height: 270px; /* Adjusted height for better readability */
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
