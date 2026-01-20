// Initialize Tom Select
document.addEventListener("DOMContentLoaded", function () {
  // Basic Single Select
  new TomSelect("#select-country", {
    create: false,
    sortField: {
      field: "text",
      direction: "asc",
    },
  });

  // Multi Select / Tags
  new TomSelect("#select-tags", {
    plugins: ["remove_button"],
    create: true,
    persist: false,
    createOnBlur: true,
  });

  // Grouped
  new TomSelect("#select-group", {
    sortField: {
      field: "text",
      direction: "asc",
    },
  });

  // Custom Template
  new TomSelect("#select-users", {
    valueField: "id",
    labelField: "title",
    searchField: "title",
    options: [
      {
        id: 1,
        title: "Nick",
        src: "https://ui-avatars.com/api/?name=Nick&background=random",
      },
      {
        id: 2,
        title: "John",
        src: "https://ui-avatars.com/api/?name=John&background=random",
      },
      {
        id: 3,
        title: "Sarah",
        src: "https://ui-avatars.com/api/?name=Sarah&background=random",
      },
      {
        id: 4,
        title: "Mike",
        src: "https://ui-avatars.com/api/?name=Mike&background=random",
      },
    ],
    render: {
      option: function (data, escape) {
        return (
          '<div style="display: flex; align-items: center; gap: 8px;">' +
          '<img src="' +
          escape(data.src) +
          '" class="w-6 h-6 rounded-full shrink-0" style="width: 1.5rem; height: 1.5rem; border-radius: 9999px;">' +
          '<span class="truncate">' +
          escape(data.title) +
          "</span>" +
          "</div>"
        );
      },
      item: function (data, escape) {
        return (
          '<div style="display: flex; align-items: center; gap: 8px;">' +
          '<img src="' +
          escape(data.src) +
          '" class="w-5 h-5 rounded-full shrink-0" style="width: 1.25rem; height: 1.25rem; border-radius: 9999px;">' +
          '<span class="truncate">' +
          escape(data.title) +
          "</span>" +
          "</div>"
        );
      },
    },
  });
});
