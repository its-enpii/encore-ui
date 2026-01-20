document.addEventListener("DOMContentLoaded", function () {
  // Basic
  flatpickr(".flatpickr-basic", {
    dateFormat: "Y-m-d",
    allowInput: true,
  });

  // DateTime
  flatpickr(".flatpickr-datetime", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
  });

  // Range
  flatpickr(".flatpickr-range", {
    mode: "range",
    dateFormat: "Y-m-d",
  });

  // Time
  flatpickr(".time-picker", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
  });
});
