document.addEventListener("DOMContentLoaded", function () {
  // Theme Colors
  const getThemeColors = () => {
    const isDark = document.documentElement.classList.contains("dark");
    return {
      textColor: isDark ? "#f1f5f9" : "#1e293b",
      gridColor: isDark ? "#334155" : "#e2e8f0",
      primary: "#6366f1",
      secondary: "#a855f7",
      success: "#10b981",
      warning: "#f59e0b",
      info: "#3b82f6",
    };
  };

  let colors = getThemeColors();

  // Common Chart Options
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: colors.textColor },
      },
    },
    scales: {
      x: {
        ticks: { color: colors.textColor },
        grid: { color: colors.gridColor },
      },
      y: {
        ticks: { color: colors.textColor },
        grid: { color: colors.gridColor },
      },
    },
  };

  // Options without Scales (for Pie, Doughnut, etc)
  const noScaleOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: colors.textColor },
      },
    },
  };

  // 1. Line Chart
  const lineCtx = document.getElementById("lineChart").getContext("2d");
  let lineChart = new Chart(lineCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Sales",
          data: [65, 59, 80, 81, 56, 55],
          borderColor: colors.primary,
          tension: 0.4,
          fill: false,
        },
      ],
    },
    options: commonOptions,
  });

  // 2. Bar Chart
  const barCtx = document.getElementById("barChart").getContext("2d");
  let barChart = new Chart(barCtx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: commonOptions,
  });

  // 3. Doughnut Chart
  const doughnutCtx = document.getElementById("doughnutChart").getContext("2d");
  let doughnutChart = new Chart(doughnutCtx, {
    type: "doughnut",
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: noScaleOptions,
  });

  // 4. Pie Chart
  const pieCtx = document.getElementById("pieChart").getContext("2d");
  let pieChart = new Chart(pieCtx, {
    type: "pie",
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: noScaleOptions,
  });

  // 5. Polar Area Chart
  const polarAreaCtx = document
    .getElementById("polarAreaChart")
    .getContext("2d");
  let polarAreaChart = new Chart(polarAreaCtx, {
    type: "polarArea",
    data: {
      labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
      datasets: [
        {
          label: "My First Dataset",
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(255, 205, 86)",
            "rgb(201, 203, 207)",
            "rgb(54, 162, 235)",
          ],
        },
      ],
    },
    options: {
      ...noScaleOptions,
      scales: {
        r: {
          grid: { color: colors.gridColor },
          ticks: {
            backdropColor: "transparent",
            color: colors.textColor,
          },
        },
      },
    },
  });

  // 6. Radar Chart
  const radarCtx = document.getElementById("radarChart").getContext("2d");
  let radarChart = new Chart(radarCtx, {
    type: "radar",
    data: {
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
        {
          label: "My Second Dataset",
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBackgroundColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(54, 162, 235)",
        },
      ],
    },
    options: {
      ...noScaleOptions,
      scales: {
        r: {
          grid: { color: colors.gridColor },
          ticks: {
            backdropColor: "transparent",
            color: colors.textColor,
          },
          pointLabels: { color: colors.textColor },
        },
      },
    },
  });

  // Handle Theme Change
  window.addEventListener("theme-changed", (e) => {
    setTimeout(() => {
      colors = getThemeColors();

      const updateChartOptions = (chart, hasScales = true) => {
        chart.options.plugins.legend.labels.color = colors.textColor;
        if (hasScales) {
          if (chart.options.scales.x) {
            chart.options.scales.x.ticks.color = colors.textColor;
            chart.options.scales.x.grid.color = colors.gridColor;
          }
          if (chart.options.scales.y) {
            chart.options.scales.y.ticks.color = colors.textColor;
            chart.options.scales.y.grid.color = colors.gridColor;
          }
        }
        if (
          chart.config.type === "polarArea" ||
          chart.config.type === "radar"
        ) {
          chart.options.scales.r.grid.color = colors.gridColor;
          chart.options.scales.r.ticks.color = colors.textColor;
          if (chart.options.scales.r.pointLabels) {
            chart.options.scales.r.pointLabels.color = colors.textColor;
          }
        }
        chart.update();
      };

      updateChartOptions(lineChart);
      updateChartOptions(barChart);
      updateChartOptions(doughnutChart, false);
      updateChartOptions(pieChart, false);
      updateChartOptions(polarAreaChart, false);
      updateChartOptions(radarChart, false);
    }, 200);
  });
});
