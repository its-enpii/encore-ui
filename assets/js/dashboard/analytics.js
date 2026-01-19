document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("analyticsMainChart");
  if (ctx) {
    // Check if Chart is defined
    if (typeof Chart !== "undefined") {
      // Detect Dark Mode
      const isDark = document.documentElement.classList.contains("dark");

      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "New Visitors",
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: "#6366f1",
              borderRadius: 6,
              barPercentage: 0.6,
            },
            {
              label: "Returning",
              data: [28, 48, 40, 19, 86, 27, 90],
              backgroundColor: "#34d399",
              borderRadius: 6,
              barPercentage: 0.6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: isDark ? "#334155" : "#f1f5f9",
                drawBorder: false,
              },
              ticks: {
                color: isDark ? "#94a3b8" : "#64748b",
              },
            },
            x: {
              grid: { display: false },
              ticks: {
                color: isDark ? "#94a3b8" : "#64748b",
              },
            },
          },
        },
      });

      // Simple Theme Listener
      window.addEventListener("theme-changed", (e) => {
        const dark = e.detail.dark;
        chart.options.scales.y.grid.color = dark ? "#334155" : "#f1f5f9";
        chart.options.scales.y.ticks.color = dark ? "#94a3b8" : "#64748b";
        chart.options.scales.x.ticks.color = dark ? "#94a3b8" : "#64748b";
        chart.update();
      });
    }
  }
});
