// Initialize standard tooltips
tippy("[data-tippy-content]", {
  animation: "scale",
  theme: "custom", // We can add custom CSS if needed
});

// Initialize HTML Tooltip
tippy("#html-tooltip-btn", {
  content: document.getElementById("tooltip-template").innerHTML,
  allowHTML: true,
  animation: "scale",
});

// Initialize Popover
tippy("#popover-btn", {
  content: "This is a persistent popover. Click outside to close.",
  trigger: "click",
  interactive: true,
  placement: "bottom",
  animation: "scale",
  theme: "light-border", // Built-in theme usually implies light bg
});
