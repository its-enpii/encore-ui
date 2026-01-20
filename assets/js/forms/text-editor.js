document.addEventListener("DOMContentLoaded", function () {
  // 1. TinyMCE - Full-Featured Editor
  if (document.getElementById("tinymce-editor")) {
    tinymce.init({
      selector: "#tinymce-editor",
      height: 400,
      menubar: true,
      plugins: [
        "advlist",
        "autolink",
        "lists",
        "link",
        "image",
        "charmap",
        "preview",
        "anchor",
        "searchreplace",
        "visualblocks",
        "code",
        "fullscreen",
        "insertdatetime",
        "media",
        "table",
        "help",
        "wordcount",
      ],
      toolbar:
        "undo redo | blocks | " +
        "bold italic forecolor | alignleft aligncenter " +
        "alignright alignjustify | bullist numlist outdent indent | " +
        "removeformat | help",
      content_style:
        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      skin: document.documentElement.classList.contains("dark")
        ? "oxide-dark"
        : "oxide",
      content_css: document.documentElement.classList.contains("dark")
        ? "dark"
        : "default",
    });
  }

  // 2. Quill - Modern & Clean Editor
  if (document.getElementById("quill-editor")) {
    const quill = new Quill("#quill-editor", {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"],
        ],
      },
      placeholder: "Start writing...",
    });
  }

  // 3. SimpleMDE - Markdown Editor
  if (document.getElementById("simplemde-editor")) {
    const simplemde = new SimpleMDE({
      element: document.getElementById("simplemde-editor"),
      spellChecker: false,
      autosave: {
        enabled: true,
        uniqueId: "simplemde-demo",
        delay: 1000,
      },
      toolbar: [
        "bold",
        "italic",
        "heading",
        "|",
        "quote",
        "unordered-list",
        "ordered-list",
        "|",
        "link",
        "image",
        "|",
        "preview",
        "side-by-side",
        "fullscreen",
        "|",
        "guide",
      ],
      status: ["autosave", "lines", "words", "cursor"],
    });
  }
});
