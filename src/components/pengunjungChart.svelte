<script lang="ts">
  import { onMount } from "svelte";

  function pengunjungChart() {
    const ctx = document.getElementById("pengunjungChart").getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(54, 162, 235, 0.5)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    const visitorsChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei"],
        datasets: [
          {
            data: [99, 245, 499, 800, 1000], // Contoh data pengunjung
            backgroundColor: gradient,
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 3,
            pointBackgroundColor: "rgba(54, 162, 235, 1)",
            pointBorderColor: "#ffffff",
            pointHoverBackgroundColor: "#ffffff",
            pointHoverBorderColor: "rgba(54, 162, 235, 1)",
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
            text: "Grafik Pengunjung",
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
              stepSize: 250, // Atur langkah interval sumbu y

              callback: function (value, index, values) {
                return value; // Menambahkan unit pengunjung
              },
            },
            title: {
              display: true,
              text: "Orang",
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
    pengunjungChart();
  });
</script>

<div class="!w-full !h-full">
  <canvas width="700" height="600" id="pengunjungChart"></canvas>
</div>
