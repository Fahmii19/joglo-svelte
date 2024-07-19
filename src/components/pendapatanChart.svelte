<script>
  import { onMount } from "svelte";
  import Highcharts from "highcharts";

  let chartContainer;

  // Data dummy untuk chart, termasuk titik awal dan akhir dengan nilai 0
  const dummyData = [
    [0, 0],
    [1, 75],
    [2, 35],
    [3, 42],
    [4, 12],
    [5, 54],
    [6, 78],
    [7, 63],
  ];

  const monthNamesFull = [
    "",
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "",
  ];
  const monthNamesShort = ["", "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", ""];

  onMount(() => {
    Highcharts.chart(chartContainer, {
      chart: {
        type: "area",
        height: 350, // Menentukan tinggi chart menjadi 350px
        spacingTop: 20,
        spacingBottom: 10,
        spacingLeft: 0,
      },

      title: {
        text: "Grafik Penjualan",
        align: "center", // Mengatur judul ke tengah
        margin: 20, // Memberikan margin di atas judul
        style: {
          fontSize: "18px",
          fontWeight: "bold",
        },
      },

      credits: {
        enabled: false,
      },

      xAxis: {
        categories: monthNamesShort,
        title: {
          text: "Bulan",
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
        },
        max: 6, // Menetapkan nilai maksimum sumbu X agar mentok ke kanan
        min: 1, // Memperbaiki nilai minimum sumbu X agar sesuai dengan data
        tickmarkPlacement: "on",
        tickWidth: 1,
        tickLength: 10, // Panjang garis tick
        tickPosition: "outside", // Menempatkan garis tick di luar sumbu (ke bawah)
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
        tickPositions: [0, 25, 50, 75, 100], // Mengatur posisi tick pada Y-axis
        title: {
          text: "Unit",
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
        },
        labels: {
          format: "{value}",
        },
        accessibility: {
          description: "Unit",
          rangeDescription: "Range: 0 to 1000",
        },
      },

      tooltip: {
        shared: true,
        formatter: function () {
          return (
            "Bulan: " +
            monthNamesFull[this.points[0].point.x] +
            "<br>Unit: " +
            this.points[0].y
          );
        },
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
          name: "Unit",
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
