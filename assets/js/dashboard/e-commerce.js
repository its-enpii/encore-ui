// Dashboard eCommerce - Chart functionality

document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;

  // 1. REVENUE CHART (Line Chart with Gradient)
  const revenueCtx = document.getElementById("revenueChart");
  let revenueChart;

  if (revenueCtx) {
    const isDarkMode = htmlElement.classList.contains("dark");

    // Shared Chart Options
    const sharedOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: isDarkMode ? "#1e293b" : "#fff",
          titleColor: isDarkMode ? "#f1f5f9" : "#1e293b",
          bodyColor: isDarkMode ? "#cbd5e1" : "#475569",
          borderColor: isDarkMode ? "#334155" : "#e2e8f0",
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          mode: "index",
          intersect: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: isDarkMode ? "#334155" : "#f1f5f9",
            drawBorder: false,
          },
          ticks: {
            color: isDarkMode ? "#94a3b8" : "#64748b",
            callback: function (value) {
              return "$" + value + "k";
            },
          },
        },
        x: {
          grid: { display: false },
          ticks: { color: isDarkMode ? "#94a3b8" : "#64748b" },
        },
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
    };

    // Create Gradient
    let gradient = revenueCtx
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(99, 102, 241, 0.5)"); // Indigo 500
    gradient.addColorStop(1, "rgba(99, 102, 241, 0)");

    revenueChart = new Chart(revenueCtx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Revenue",
            data: [65, 59, 80, 81, 56, 85, 90, 88, 70, 75, 82, 95],
            borderColor: "#6366f1", // Indigo 500
            backgroundColor: gradient,
            borderWidth: 3,
            fill: true,
            tension: 0.4, // Smooth curve
            pointRadius: 0,
            pointHoverRadius: 6,
          },
        ],
      },
      options: sharedOptions,
    });
  }

  // 2. CATEGORY CHART (Doughnut)
  const categoryCtx = document.getElementById("salesCategoryChart");
  let categoryChart;

  if (categoryCtx) {
    categoryChart = new Chart(categoryCtx, {
      type: "doughnut",
      data: {
        labels: ["Electronics", "Fashion", "Home"],
        datasets: [
          {
            data: [45, 30, 25],
            backgroundColor: [
              "#6366f1", // Indigo 500
              "#10b981", // Emerald 500
              "#f59e0b", // Amber 500
            ],
            hoverOffset: 4,
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "75%",
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

  // UPDATE CHARTS ON THEME CHANGE
  window.addEventListener("theme-changed", (e) => {
    const isDark = e.detail.dark;

    // Update Revenue Chart
    if (revenueChart) {
      const tooltip = revenueChart.options.plugins.tooltip;
      const scales = revenueChart.options.scales;

      tooltip.backgroundColor = isDark ? "#1e293b" : "#fff";
      tooltip.titleColor = isDark ? "#f1f5f9" : "#1e293b";
      tooltip.bodyColor = isDark ? "#cbd5e1" : "#475569";
      tooltip.borderColor = isDark ? "#334155" : "#e2e8f0";

      scales.y.grid.color = isDark ? "#334155" : "#f1f5f9";
      scales.y.ticks.color = isDark ? "#94a3b8" : "#64748b";
      scales.x.ticks.color = isDark ? "#94a3b8" : "#64748b";

      revenueChart.update();
    }
  });
});
