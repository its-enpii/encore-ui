let worldMapInstance = null;
let isDarkMode = document.documentElement.classList.contains("dark");

function initMaps() {
  // Theme colors
  const colors = {
    light: {
      map: "#f1f5f9", // slate-100
      hover: "#cbd5e1", // slate-300
      selected: "#6366f1", // indigo-500
      marker: "#6366f1", // indigo-500
    },
    dark: {
      map: "#334155", // slate-700
      hover: "#475569", // slate-600
      selected: "#818cf8", // indigo-400
      marker: "#818cf8", // indigo-400
    },
  };

  const currentColors = isDarkMode ? colors.dark : colors.light;

  const markers = [
    { name: "United States", coords: [37.0902, -95.7129] },
    { name: "Brazil", coords: [-14.235, -51.9253] },
    { name: "Russia", coords: [61.524, 105.3188] },
    { name: "China", coords: [35.8617, 104.1954] },
    { name: "Indonesia", coords: [-0.7893, 113.9213] },
    { name: "Australia", coords: [-25.2744, 133.7751] },
  ];

  worldMapInstance = new jsVectorMap({
    selector: "#worldMap",
    map: "world",
    zoomOnScroll: false,
    zoomButtons: true,
    // Styling
    mapStyle: {
      initial: {
        fill: currentColors.map,
        stroke: "none",
        strokeWidth: 0,
        fillOpacity: 1,
      },
      hover: {
        fillOpacity: 1,
        fill: currentColors.hover,
      },
      selected: {
        fill: currentColors.selected,
      },
      selectedHover: {},
    },
    // Markers
    markers: markers,
    markerStyle: {
      initial: {
        fill: currentColors.marker,
        stroke: "#fff",
        strokeWidth: 2,
        r: 5,
      },
      hover: {
        fill: currentColors.selected,
        stroke: "#fff",
        strokeWidth: 2,
      },
    },
    // Tooltip
    onRegionTooltipShow(event, tooltip, code) {
      // Optional: customize tooltip text
    },
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", initMaps);

// Handle theme changes
window.addEventListener("theme-changed", (e) => {
  isDarkMode = e.detail.dark;
  if (worldMapInstance) {
    // To update jsVectorMap theme dynamically, we might need to destroy and re-init or use set methods if available.
    // jsVectorMap doesn't have a simple 'setOptions' for everything, but we can try to update styles.
    // A safer approach for this demo is to destroy and recreate, or just reload the page.
    // Ideally, we would update the map instance.

    // For simplicity in this demo, let's just re-initialize if the library supports destroy,
    // otherwise we might need to clear the container.
    const container = document.getElementById("worldMap");
    container.innerHTML = ""; // Clear existing map
    // Remove tooltips if any exist in body
    const tooltips = document.querySelectorAll(".jvm-tooltip");
    tooltips.forEach((t) => t.remove());

    initMaps();
  }
});
