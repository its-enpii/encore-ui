$(document).ready(function () {
  // Basic DataTable
  $("#basicTable").DataTable({
    pageLength: 10,
    order: [[0, "asc"]],
    language: {
      search: "Search:",
      lengthMenu: "Show _MENU_ entries",
      info: "Showing _START_ to _END_ of _TOTAL_ entries",
      paginate: {
        first: "First",
        last: "Last",
        next: "Next",
        previous: "Previous",
      },
    },
  });

  // DataTable with Export Buttons
  $("#exportTable").DataTable({
    dom: "Bfrtip",
    buttons: [
      {
        extend: "copy",
        text: '<i class="bx bx-copy"></i> Copy',
        className: "dt-button",
      },
      {
        extend: "excel",
        text: '<i class="bx bxs-file-export"></i> Excel',
        className: "dt-button",
      },
      {
        extend: "csv",
        text: '<i class="bx bx-file"></i> CSV',
        className: "dt-button",
      },
      {
        extend: "pdf",
        text: '<i class="bx bxs-file-pdf"></i> PDF',
        className: "dt-button",
      },
      {
        extend: "print",
        text: '<i class="bx bx-printer"></i> Print',
        className: "dt-button",
      },
    ],
    pageLength: 10,
  });

  // Responsive DataTable
  $("#responsiveTable").DataTable({
    responsive: true,
    pageLength: 10,
    order: [[0, "desc"]],
  });
});
