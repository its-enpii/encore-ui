document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("defaultRevenueChart");
  if (ctx) {
    const isDark = document.documentElement.classList.contains("dark");
    const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(99, 102, 241, 0.5)"); // Indigo 500
    gradient.addColorStop(1, "rgba(99, 102, 241, 0.0)");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "Revenue",
            data: [30, 40, 35, 50, 49, 60, 70, 91],
            borderColor: "#6366f1",
            backgroundColor: gradient,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#6366f1",
            pointBorderWidth: 2,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: isDark ? "#334155" : "#f1f5f9", borderDash: [5, 5] },
            ticks: {
              color: isDark ? "#94a3b8" : "#64748b",
              callback: (val) => "$" + val + "k",
            },
          },
          x: {
            grid: { display: false },
            ticks: { color: isDark ? "#94a3b8" : "#64748b" },
          },
        },
      },
    });

    window.addEventListener("theme-changed", (e) => {
      const dark = e.detail.dark;
      chart.options.scales.y.grid.color = dark ? "#334155" : "#f1f5f9";
      chart.options.scales.y.ticks.color = dark ? "#94a3b8" : "#64748b";
      chart.options.scales.x.ticks.color = dark ? "#94a3b8" : "#64748b";
      chart.update();
    });
  }
});
