<script>
  import { onMount } from "svelte";
  function pendapatanChart() {
    const ctx = document.getElementById("pendapatanChart").getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(255, 99, 132, 0.5)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    const salesChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei"],
        datasets: [
          {
            data: [20, 30, 50, 70, 99], // Contoh data penjualan rumah
            backgroundColor: gradient,
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3,
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#ffffff",
            pointHoverBackgroundColor: "#ffffff",
            pointHoverBorderColor: "rgba(255, 99, 132, 1)",
            tension: 0.4,
          },
        ],
      },

      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Menyembunyikan label dataset
          },
          title: {
            display: true,
            text: "Grafik Penjualan",
            font: {
              size: 15,
              weight: "bold",
            },
          },
        },
        scales: {
          y: {
            display: true,
            beginAtZero: true,
            ticks: {
              stepSize: 25, // Atur langkah interval sumbu y

              callback: function (value, index, values) {
                return value; // Menambahkan unit penjualan
              },
            },
            title: {
              display: true,
              text: "Unit",
              font: {
                size: 13,
                weight: "bold",
              },
            },
          },
          x: {
            display: true,
            title: {
              display: true,
              text: "Bulan",
              font: {
                size: 12,
                weight: "bold",
              },
            },
          },
        },
      },
    });
  }

  onMount(() => {
    pendapatanChart();
  });
</script>

<canvas width="700" height="600" id="pendapatanChart"></canvas>
