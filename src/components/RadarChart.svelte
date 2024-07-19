<script>
  import { onMount } from "svelte";
  import Highcharts from "highcharts";

  let chartContainer;

  // Data dummy untuk chart, termasuk titik awal dan akhir dengan nilai 0
  const dummyData = [
    [0, 0],
    [1, 279],
    [2, 350],
    [3, 932],
    [4, 504],
    [5, 622],
    [6, 289],
    [7, 0],
  ];

  onMount(() => {
    Highcharts.chart(chartContainer, {
      chart: {
        type: "area",
        height: 350, // Menentukan tinggi chart menjadi 350px
        spacingTop: 20,
        spacingBottom: 20,
      },

      title: {
        text: "Grafik Pengunjung",
        align: "left",
      },

      credits: {
        enabled: false,
      },

      xAxis: {
        categories: ["", "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", ""],
        title: {
          text: "Bulan",
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
        },
        max: 6, // Menetapkan nilai maksimum sumbu X agar mentok ke kanan
        min: 1, // Memperbaiki nilai minimum sumbu X agar sesuai dengan data
        crosshair: {
          width: 1,
          color: "gray",
          dashStyle: "Dash",
        }, // Menambahkan crosshair pada sumbu X
        accessibility: {
          rangeDescription: "Range: Jan to Jun.",
        },
      },

      yAxis: {
        tickPositions: [0, 250, 500, 750, 1000], // Mengatur posisi tick pada Y-axis
        title: {
          text: "Orang",
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
        },
        labels: {
          format: "{value}",
        },
        accessibility: {
          description: "Orang",
          rangeDescription: "Range: 0 to 1000",
        },
      },

      tooltip: {
        headerFormat: "Bulan: {point.key}<br>",
        pointFormat: "Orang: {point.y}",
        shared: true,
      },

      legend: {
        enabled: false,
      },

      series: [
        {
          data: dummyData,
          lineColor: Highcharts.getOptions().colors[1],
          color: Highcharts.getOptions().colors[2],
          fillOpacity: 0.5,
          name: "Orang",
          marker: {
            enabled: false,
          },
          threshold: null,
        },
      ],
    });
  });
</script>

<div bind:this={chartContainer} class="chart-container"></div>

<style>
  .chart-container {
    width: 100%;
    height: 350px; /* Menentukan tinggi container chart menjadi 350px */
  }
</style>
