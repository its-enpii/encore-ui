let maps = {};
let markers = [];
let isDarkMode = document.documentElement.classList.contains("dark");

// Dark mode map styles
const darkMapStyles = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

// Light mode map styles
const lightMapStyles = [];

function initMaps() {
  const defaultCenter = { lat: -6.2088, lng: 106.8456 }; // Jakarta

  // 1. Basic Map
  maps.basic = new google.maps.Map(document.getElementById("basicMap"), {
    center: defaultCenter,
    zoom: 12,
    styles: isDarkMode ? darkMapStyles : lightMapStyles,
  });

  // 2. Map with Marker
  maps.marker = new google.maps.Map(document.getElementById("markerMap"), {
    center: defaultCenter,
    zoom: 14,
    styles: isDarkMode ? darkMapStyles : lightMapStyles,
  });
  new google.maps.Marker({
    position: defaultCenter,
    map: maps.marker,
    title: "Jakarta",
  });

  // 3. Multiple Markers
  maps.multiple = new google.maps.Map(
    document.getElementById("multipleMarkersMap"),
    {
      center: defaultCenter,
      zoom: 11,
      styles: isDarkMode ? darkMapStyles : lightMapStyles,
    },
  );
  const locations = [
    { lat: -6.2088, lng: 106.8456, title: "Jakarta" },
    { lat: -6.1751, lng: 106.865, title: "Monas" },
    { lat: -6.302, lng: 106.8945, title: "Depok" },
  ];
  locations.forEach((loc) => {
    new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map: maps.multiple,
      title: loc.title,
    });
  });

  // 4. Info Windows
  maps.info = new google.maps.Map(document.getElementById("infoWindowMap"), {
    center: defaultCenter,
    zoom: 13,
    styles: isDarkMode ? darkMapStyles : lightMapStyles,
  });
  const infoMarker = new google.maps.Marker({
    position: defaultCenter,
    map: maps.info,
    title: "Click me!",
  });
  const infoWindow = new google.maps.InfoWindow({
    content:
      '<div style="padding: 10px;"><h3 style="margin: 0 0 5px 0; font-weight: bold;">Jakarta</h3><p style="margin: 0;">Capital city of Indonesia</p></div>',
  });
  infoMarker.addListener("click", () => {
    infoWindow.open(maps.info, infoMarker);
  });

  // 5. Custom Styled Map (Always Dark)
  maps.styled = new google.maps.Map(document.getElementById("styledMap"), {
    center: defaultCenter,
    zoom: 12,
    styles: darkMapStyles,
  });

  // 6. Map with Controls
  maps.controls = new google.maps.Map(document.getElementById("controlsMap"), {
    center: defaultCenter,
    zoom: 12,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER,
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER,
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
    },
    fullscreenControl: true,
    styles: isDarkMode ? darkMapStyles : lightMapStyles,
  });
}

// Handle theme changes
window.addEventListener("theme-changed", (e) => {
  isDarkMode = e.detail.dark;
  const newStyles = isDarkMode ? darkMapStyles : lightMapStyles;

  // Update all maps except the custom styled one
  if (maps.basic) maps.basic.setOptions({ styles: newStyles });
  if (maps.marker) maps.marker.setOptions({ styles: newStyles });
  if (maps.multiple) maps.multiple.setOptions({ styles: newStyles });
  if (maps.info) maps.info.setOptions({ styles: newStyles });
  if (maps.controls) maps.controls.setOptions({ styles: newStyles });
  // Styled map always stays dark
});
