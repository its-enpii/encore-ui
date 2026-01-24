document.addEventListener("DOMContentLoaded", function () {
  // Function to get theme colors
  const getThemeColors = () => {
    const isDark = document.documentElement.classList.contains("dark");
    return {
      textColor: isDark ? "#f1f5f9" : "#1e293b",
      gridColor: isDark ? "#334155" : "#e2e8f0",
      columnColor1: "#6366f1",
      columnColor2: "#a855f7",
      columnColor3: "#ec4899",
    };
  };

  let colors = getThemeColors();

  // --- 1. Line Chart ---
  const lineOptions = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: { enabled: false },
      toolbar: { show: false },
      fontFamily: "inherit",
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "straight",
      width: 3,
      colors: [colors.columnColor1],
    },
    title: { align: "left", style: { color: colors.textColor } },
    grid: {
      borderColor: colors.gridColor,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      labels: { style: { colors: colors.textColor } },
    },
    yaxis: {
      labels: { style: { colors: colors.textColor } },
    },
    tooltip: {
      theme: document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",
    },
  };
  const lineChart = new ApexCharts(
    document.querySelector("#lineChart"),
    lineOptions,
  );
  lineChart.render();

  // --- 2. Area Chart ---
  const areaOptions = {
    series: [
      {
        name: "Series 1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Series 2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: { show: false },
      fontFamily: "inherit",
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    colors: [colors.columnColor1, colors.columnColor3],
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: { style: { colors: colors.textColor } },
    },
    tooltip: {
      x: { format: "dd/MM/yy HH:mm" },
      theme: document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",
    },
    grid: { borderColor: colors.gridColor },
    yaxis: { labels: { style: { colors: colors.textColor } } },
    legend: { labels: { colors: colors.textColor } },
  };
  const areaChart = new ApexCharts(
    document.querySelector("#areaChart"),
    areaOptions,
  );
  areaChart.render();

  // --- 3. Column Chart ---
  const columnOptions = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
      fontFamily: "inherit",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ["transparent"] },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: { style: { colors: colors.textColor } },
    },
    fill: { opacity: 1 },
    colors: [colors.columnColor1, colors.columnColor2, colors.columnColor3],
    grid: { borderColor: colors.gridColor },
    yaxis: { labels: { style: { colors: colors.textColor } } },
    legend: { labels: { colors: colors.textColor } },
    tooltip: {
      theme: document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",
    },
  };
  const columnChart = new ApexCharts(
    document.querySelector("#columnChart"),
    columnOptions,
  );
  columnChart.render();

  // --- 4. Bar Chart ---
  const barOptions = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
      fontFamily: "inherit",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
      labels: { style: { colors: colors.textColor } },
    },
    colors: [colors.columnColor1],
    grid: { borderColor: colors.gridColor },
    yaxis: { labels: { style: { colors: colors.textColor } } },
    tooltip: {
      theme: document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",
    },
  };
  const barChart = new ApexCharts(
    document.querySelector("#barChart"),
    barOptions,
  );
  barChart.render();

  // --- 5. Mixed Chart ---
  const mixedOptions = {
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      toolbar: { show: false },
      fontFamily: "inherit",
    },
    stroke: { width: [0, 4] },
    title: {
      text: "Traffic Sources",
      style: { color: colors.textColor },
    },
    dataLabels: { enabled: true, enabledOnSeries: [1] },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
      labels: { style: { colors: colors.textColor } },
    },
    yaxis: [
      {
        title: {
          text: "Website Blog",
          style: { color: colors.textColor },
        },
        labels: { style: { colors: colors.textColor } },
      },
      {
        opposite: true,
        title: {
          text: "Social Media",
          style: { color: colors.textColor },
        },
        labels: { style: { colors: colors.textColor } },
      },
    ],
    colors: [colors.columnColor2, colors.columnColor3],
    grid: { borderColor: colors.gridColor },
    legend: { labels: { colors: colors.textColor } },
    tooltip: {
      theme: document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",
    },
  };
  const mixedChart = new ApexCharts(
    document.querySelector("#mixedChart"),
    mixedOptions,
  );
  mixedChart.render();

  // --- 6. Donut Chart ---
  const donutOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: "donut",
      fontFamily: "inherit",
    },
    labels: ["Series A", "Series B", "Series C", "Series D", "Series E"],
    colors: [
      colors.columnColor1,
      colors.columnColor2,
      colors.columnColor3,
      "#fb923c",
      "#4ade80",
    ],
    legend: { labels: { colors: colors.textColor } },
    stroke: { show: false },
    dataLabels: { style: { colors: ["#fff"] } },
    tooltip: {
      theme: document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",
    },
  };
  const donutChart = new ApexCharts(
    document.querySelector("#donutChart"),
    donutOptions,
  );
  donutChart.render();

  // --- 7. Radar Chart ---
  const radarOptions = {
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
      },
    ],
    chart: {
      height: 350,
      type: "radar",
      toolbar: { show: false },
      fontFamily: "inherit",
    },
    title: {
      text: "Basic Radar Chart",
      style: { color: colors.textColor },
    },
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
      labels: { style: { colors: colors.textColor } },
    },
    colors: [colors.columnColor1],
    yaxis: { show: false },
    markers: { size: 4 },
    tooltip: {
      theme: document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",
    },
  };
  const radarChart = new ApexCharts(
    document.querySelector("#radarChart"),
    radarOptions,
  );
  radarChart.render();

  // --- 8. Radial Bar Chart ---
  const radialBarOptions = {
    series: [44, 55, 67, 83],
    chart: {
      height: 350,
      type: "radialBar",
      fontFamily: "inherit",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: { fontSize: "22px" },
          value: { fontSize: "16px" },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              return 249;
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
    colors: [
      colors.columnColor1,
      colors.columnColor2,
      colors.columnColor3,
      "#fb923c",
    ],
  };
  const radialBarChart = new ApexCharts(
    document.querySelector("#radialBarChart"),
    radialBarOptions,
  );
  radialBarChart.render();

  // Handle Theme Change
  window.addEventListener("theme-changed", (e) => {
    setTimeout(() => {
      colors = getThemeColors();
      const commonUpdate = {
        chart: { foreColor: colors.textColor },
        grid: { borderColor: colors.gridColor },
        xaxis: { labels: { style: { colors: colors.textColor } } },
        yaxis: { labels: { style: { colors: colors.textColor } } },
        tooltip: { theme: e.detail.dark ? "dark" : "light" },
        legend: { labels: { colors: colors.textColor } },
      };

      lineChart.updateOptions({
        ...commonUpdate,
        title: { style: { color: colors.textColor } },
      });
      areaChart.updateOptions(commonUpdate);
      columnChart.updateOptions(commonUpdate);
      barChart.updateOptions(commonUpdate);
      mixedChart.updateOptions({
        ...commonUpdate,
        title: { style: { color: colors.textColor } },
        yaxis: [
          {
            title: { style: { color: colors.textColor } },
            labels: { style: { colors: colors.textColor } },
          },
          {
            opposite: true,
            title: { style: { color: colors.textColor } },
            labels: { style: { colors: colors.textColor } },
          },
        ],
      });
      donutChart.updateOptions({
        legend: { labels: { colors: colors.textColor } },
        tooltip: { theme: e.detail.dark ? "dark" : "light" },
      });
      radarChart.updateOptions({
        ...commonUpdate,
        title: { style: { color: colors.textColor } },
        yaxis: { show: false },
      });
      radialBarChart.updateOptions({
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: { color: colors.textColor },
              value: { color: colors.textColor },
              total: { color: colors.textColor },
            },
          },
        },
      });
    }, 200);
  });
});
