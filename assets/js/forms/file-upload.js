// Prevent Dropzone from auto-discovering
Dropzone.autoDiscover = false;

document.addEventListener("DOMContentLoaded", function () {
  // 1. Single File Upload
  if (document.getElementById("single-dropzone")) {
    new Dropzone("#single-dropzone", {
      url: "/upload", // Change to your upload endpoint
      maxFiles: 1,
      maxFilesize: 2, // MB
      addRemoveLinks: true,
      dictDefaultMessage: "Drop file here or click to upload",
      dictRemoveFile: "Remove",
      dictCancelUpload: "Cancel",
      dictMaxFilesExceeded: "You can only upload 1 file",
      acceptedFiles: "image/*,application/pdf,.doc,.docx,.xls,.xlsx",
      init: function () {
        this.on("maxfilesexceeded", function (file) {
          this.removeAllFiles();
          this.addFile(file);
        });
        this.on("success", function (file, response) {
          console.log("Upload successful:", response);
        });
        this.on("error", function (file, errorMessage) {
          console.log("Upload error:", errorMessage);
        });
      },
    });
  }

  // 2. Multiple Files Upload
  if (document.getElementById("multiple-dropzone")) {
    new Dropzone("#multiple-dropzone", {
      url: "/upload",
      maxFiles: 10,
      maxFilesize: 5, // MB
      addRemoveLinks: true,
      parallelUploads: 2,
      dictDefaultMessage: "Drop multiple files here",
      dictRemoveFile: "Remove",
      dictCancelUpload: "Cancel",
      dictMaxFilesExceeded: "Maximum 10 files allowed",
      acceptedFiles: "image/*,application/pdf,.doc,.docx,.xls,.xlsx,.txt",
      init: function () {
        this.on("addedfile", function (file) {
          console.log("File added:", file.name);
        });
        this.on("success", function (file, response) {
          console.log("Upload successful:", file.name);
        });
        this.on("error", function (file, errorMessage) {
          console.log("Upload error:", errorMessage);
        });
      },
    });
  }

  // 3. Image Only Upload
  if (document.getElementById("image-dropzone")) {
    new Dropzone("#image-dropzone", {
      url: "/upload",
      maxFiles: 5,
      maxFilesize: 3, // MB
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif",
      dictDefaultMessage: "Drop images here",
      dictRemoveFile: "Remove",
      dictCancelUpload: "Cancel",
      dictInvalidFileType: "Only JPG, PNG, and GIF files are allowed",
      dictMaxFilesExceeded: "Maximum 5 images allowed",
      thumbnailWidth: 150,
      thumbnailHeight: 150,
      init: function () {
        this.on("thumbnail", function (file, dataUrl) {
          console.log("Thumbnail generated for:", file.name);
        });
        this.on("success", function (file, response) {
          console.log("Image uploaded:", file.name);
        });
        this.on("error", function (file, errorMessage) {
          console.log("Upload error:", errorMessage);
        });
      },
    });
  }
});
