// Dashboard Project/CRM - Chart functionality

document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;

  // 1. PROJECT STATUS CHART (Doughnut)
  const statusCtx = document.getElementById("projectStatusChart");
  let statusChart;

  if (statusCtx) {
    statusChart = new Chart(statusCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "Ongoing", "Delayed"],
        datasets: [
          {
            data: [12, 8, 4],
            backgroundColor: [
              "#10b981", // Emerald 500 (Completed)
              "#6366f1", // Indigo 500 (Ongoing)
              "#f59e0b", // Amber 500 (Delayed)
            ],
            hoverOffset: 4,
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

  // 2. TASK OVERVIEW CHART (Bar Chart)
  const taskCtx = document.getElementById("taskOverviewChart");
  let taskChart;

  if (taskCtx) {
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
          displayColors: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: isDarkMode ? "#334155" : "#f1f5f9",
            drawBorder: false,
          },
          ticks: { color: isDarkMode ? "#94a3b8" : "#64748b" },
        },
        x: {
          grid: { display: false },
          ticks: { color: isDarkMode ? "#94a3b8" : "#64748b" },
        },
      },
    };

    taskChart = new Chart(taskCtx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Completed",
            data: [18, 24, 21, 28, 26, 15, 12],
            backgroundColor: "#10b981", // Emerald 500
            borderRadius: 4,
            barPercentage: 0.6,
          },
          {
            label: "Pending",
            data: [5, 8, 4, 6, 9, 3, 2],
            backgroundColor: "#cbd5e1", // Slate 300
            borderRadius: 4,
            barPercentage: 0.6,
          },
        ],
      },
      options: sharedOptions,
    });
  }

  // UPDATE CHARTS ON THEME CHANGE
  window.addEventListener("theme-changed", (e) => {
    const isDark = e.detail.dark;

    // Update Task Chart (Bar)
    if (taskChart) {
      const tooltip = taskChart.options.plugins.tooltip;
      const scales = taskChart.options.scales;

      tooltip.backgroundColor = isDark ? "#1e293b" : "#fff";
      tooltip.titleColor = isDark ? "#f1f5f9" : "#1e293b";
      tooltip.bodyColor = isDark ? "#cbd5e1" : "#475569";
      tooltip.borderColor = isDark ? "#334155" : "#e2e8f0";

      scales.y.grid.color = isDark ? "#334155" : "#f1f5f9";
      scales.y.ticks.color = isDark ? "#94a3b8" : "#64748b";
      scales.x.ticks.color = isDark ? "#94a3b8" : "#64748b";

      // Update bar colors if needed to match theme (optional)
      taskChart.data.datasets[1].backgroundColor = isDark
        ? "#334155"
        : "#cbd5e1"; // Darker slate for dark mode

      taskChart.update();
    }
  });
});
