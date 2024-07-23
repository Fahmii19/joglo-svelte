<script>
  import { onMount } from "svelte";
  import Highcharts from "highcharts";

  let chartContainer;

  // Data untuk chart, hanya sampai bulan Mei
  const dummyData = [
    [0, 0],
    [1, 49],
    [2, 350],
    [3, 932],
    [4, 504],
    [5, 622],
    [6, 0],
  ];

  const monthNamesFull = ["", "Januari", "Februari", "Maret", "April", "Mei"];
  const monthNamesShort = ["", "Jan", "Feb", "Mar", "Apr", "Mei"];

  onMount(() => {
    Highcharts.chart(chartContainer, {
      chart: {
        type: "area",
        height: 300, // Menentukan tinggi chart menjadi 300px
        spacingTop: 20,
        spacingBottom: 10,
        spacingLeft: 0,
      },

      title: {
        text: "Grafik Pengunjung",
        align: "center", // Mengatur judul ke tengah
        margin: 20, // Memberikan margin di atas judul
        style: {
          fontSize: "14px", // Mengubah ukuran huruf judul menjadi lebih kecil
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
            fontSize: "12px", // Mengubah ukuran huruf label sumbu X menjadi lebih kecil
            fontWeight: "bold",
          },
        },
        max: 5, // Menetapkan nilai maksimum sumbu X agar mentok ke kanan
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
          rangeDescription: "Range: Jan to Mei.",
        },
      },

      yAxis: {
        tickPositions: [0, 250, 500, 750, 1000], // Mengatur posisi tick pada Y-axis
        title: {
          text: "Orang",
          style: {
            fontSize: "12px", // Mengubah ukuran huruf label sumbu Y menjadi lebih kecil
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
        shared: true,
        formatter: function () {
          return (
            "Bulan: " +
            monthNamesFull[this.points[0].point.x] +
            "<br>Orang: " +
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
          color: "#73c8e5",
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
    height: 300px; /* Menentukan tinggi container chart menjadi 300px */
  }
</style>
