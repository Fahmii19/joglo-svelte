<script>
  import { onMount } from "svelte";
  import Highcharts from "highcharts";

  let chartContainer;

  // Data dummy untuk chart
  const dummyData = [
    [0, 279],
    [1, 350],
    [2, 932],
    [3, 504],
    [4, 622],
    [5, 289],
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

      annotations: [
        {
          draggable: "",
          labelOptions: {
            backgroundColor: "rgba(255,255,255,0.5)",
            verticalAlign: "top",
            y: 15,
          },
          labels: [
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 1,
                y: 250,
              },
              text: "Feb",
            },
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 3,
                y: 750,
              },
              text: "Apr",
            },
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 4,
                y: 1000,
              },
              text: "Mei",
            },
          ],
        },
      ],

      xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        title: {
          text: "Bulan",
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
        },
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
        headerFormat: "Bulan: {point.x}<br>",
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
