// Basic Alerts
function showBasicAlert() {
  Swal.fire({
    title: "Hello!",
    text: "This is a basic SweetAlert",
    confirmButtonColor: "#3b82f6",
  });
}

function showSuccessAlert() {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Your operation was successful",
    confirmButtonColor: "#10b981",
  });
}

function showErrorAlert() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    confirmButtonColor: "#ef4444",
  });
}

function showWarningAlert() {
  Swal.fire({
    icon: "warning",
    title: "Warning!",
    text: "Please be careful with this action",
    confirmButtonColor: "#f59e0b",
  });
}

function showInfoAlert() {
  Swal.fire({
    icon: "info",
    title: "Information",
    text: "Here is some important information",
    confirmButtonColor: "#6366f1",
  });
}

function showQuestionAlert() {
  Swal.fire({
    icon: "question",
    title: "Are you sure?",
    text: "Do you want to proceed?",
    confirmButtonColor: "#a855f7",
  });
}

// Confirmation Dialogs
function showConfirmDialog() {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3b82f6",
    cancelButtonColor: "#64748b",
    confirmButtonText: "Yes, proceed!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Confirmed!",
        text: "Your action has been confirmed.",
        icon: "success",
        confirmButtonColor: "#10b981",
      });
    }
  });
}

function showDeleteConfirm() {
  Swal.fire({
    title: "Delete this item?",
    text: "This action cannot be undone!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#64748b",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "The item has been deleted.",
        icon: "success",
        confirmButtonColor: "#10b981",
      });
    }
  });
}

function showCancelButton() {
  Swal.fire({
    title: "Save changes?",
    text: "Do you want to save your changes?",
    icon: "question",
    showCancelButton: true,
    showDenyButton: true,
    confirmButtonColor: "#10b981",
    denyButtonColor: "#ef4444",
    cancelButtonColor: "#64748b",
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Saved!",
        text: "Your changes have been saved.",
        icon: "success",
        confirmButtonColor: "#10b981",
      });
    } else if (result.isDenied) {
      Swal.fire({
        title: "Not saved",
        text: "Changes are not saved",
        icon: "info",
        confirmButtonColor: "#6366f1",
      });
    }
  });
}

// Custom Styling
function showCustomBackground() {
  Swal.fire({
    title: "Custom Background",
    text: "This alert has a custom background color",
    icon: "success",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    confirmButtonColor: "#fff",
    confirmButtonText: '<span style="color: #667eea">Great!</span>',
  });
}

function showCustomIcon() {
  Swal.fire({
    title: "Custom Icon",
    text: "This alert uses a custom icon",
    iconHtml: '<i class="bx bx-rocket text-6xl text-indigo-600"></i>',
    confirmButtonColor: "#6366f1",
    customClass: {
      icon: "no-border",
    },
  });
}

function showCustomPosition() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
    toast: true,
  });
}

// Input Types
function showTextInput() {
  Swal.fire({
    title: "Enter your name",
    input: "text",
    inputPlaceholder: "Type your name here...",
    showCancelButton: true,
    confirmButtonColor: "#3b82f6",
    cancelButtonColor: "#64748b",
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `Hello, ${result.value}!`,
        icon: "success",
        confirmButtonColor: "#10b981",
      });
    }
  });
}

function showEmailInput() {
  Swal.fire({
    title: "Enter your email",
    input: "email",
    inputPlaceholder: "Enter your email address",
    showCancelButton: true,
    confirmButtonColor: "#6366f1",
    cancelButtonColor: "#64748b",
    inputValidator: (value) => {
      if (!value) {
        return "You need to enter an email!";
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Please enter a valid email!";
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Email received!",
        text: `We'll contact you at ${result.value}`,
        icon: "success",
        confirmButtonColor: "#10b981",
      });
    }
  });
}

function showPasswordInput() {
  Swal.fire({
    title: "Enter your password",
    input: "password",
    inputPlaceholder: "Enter your password",
    showCancelButton: true,
    confirmButtonColor: "#a855f7",
    cancelButtonColor: "#64748b",
    inputValidator: (value) => {
      if (!value) {
        return "You need to enter a password!";
      }
      if (value.length < 6) {
        return "Password must be at least 6 characters!";
      }
    },
  });
}

function showSelectInput() {
  Swal.fire({
    title: "Select your country",
    input: "select",
    inputOptions: {
      US: "United States",
      UK: "United Kingdom",
      ID: "Indonesia",
      JP: "Japan",
      CN: "China",
    },
    inputPlaceholder: "Select a country",
    showCancelButton: true,
    confirmButtonColor: "#10b981",
    cancelButtonColor: "#64748b",
    inputValidator: (value) => {
      if (!value) {
        return "You need to select a country!";
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Selected!",
        text: `You selected: ${result.value}`,
        icon: "success",
        confirmButtonColor: "#10b981",
      });
    }
  });
}

function showTextareaInput() {
  Swal.fire({
    title: "Leave a message",
    input: "textarea",
    inputPlaceholder: "Type your message here...",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
    confirmButtonColor: "#f59e0b",
    cancelButtonColor: "#64748b",
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Message received!",
        text: "Thank you for your feedback",
        icon: "success",
        confirmButtonColor: "#10b981",
      });
    }
  });
}

// Advanced Features
function showAutoClose() {
  let timerInterval;
  Swal.fire({
    title: "Auto close alert!",
    html: "This alert will close in <b></b> milliseconds.",
    timer: 3000,
    timerProgressBar: true,
    confirmButtonColor: "#3b82f6",
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("Alert was closed by the timer");
    }
  });
}

function showProgressSteps() {
  const steps = ["1", "2", "3"];
  const swalQueueStep = Swal.mixin({
    confirmButtonText: "Next →",
    cancelButtonText: "Back",
    progressSteps: steps,
    confirmButtonColor: "#3b82f6",
    cancelButtonColor: "#64748b",
    showCancelButton: true,
    reverseButtons: true,
  });

  const values = [];

  (async () => {
    values[0] = await swalQueueStep.fire({
      title: "Step 1",
      text: "Enter your name",
      input: "text",
      currentProgressStep: 0,
      inputValidator: (value) => {
        if (!value) return "Please enter your name";
      },
    });

    if (values[0].value) {
      values[1] = await swalQueueStep.fire({
        title: "Step 2",
        text: "Enter your email",
        input: "email",
        currentProgressStep: 1,
        inputValidator: (value) => {
          if (!value) return "Please enter your email";
        },
      });
    }

    if (values[1].value) {
      values[2] = await swalQueueStep.fire({
        title: "Step 3",
        text: "Select your role",
        input: "select",
        inputOptions: {
          developer: "Developer",
          designer: "Designer",
          manager: "Manager",
        },
        currentProgressStep: 2,
        confirmButtonText: "Finish",
        inputValidator: (value) => {
          if (!value) return "Please select your role";
        },
      });
    }

    if (values[2].value) {
      Swal.fire({
        title: "All done!",
        html: `
          Name: ${values[0].value}<br>
          Email: ${values[1].value}<br>
          Role: ${values[2].value}
        `,
        icon: "success",
        confirmButtonColor: "#10b981",
        confirmButtonText: "Great!",
      });
    }
  })();
}

function showAjaxRequest() {
  Swal.fire({
    title: "Submit your GitHub username",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    confirmButtonColor: "#3b82f6",
    cancelButtonColor: "#64748b",
    showLoaderOnConfirm: true,
    preConfirm: async (login) => {
      try {
        const githubUrl = `https://api.github.com/users/${login}`;
        const response = await fetch(githubUrl);
        if (!response.ok) {
          return Swal.showValidationMessage(
            `Request failed: ${response.statusText}`,
          );
        }
        return response.json();
      } catch (error) {
        Swal.showValidationMessage(`Request failed: ${error}`);
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url,
        imageAlt: "GitHub avatar",
        confirmButtonColor: "#10b981",
      });
    }
  });
}

function showImageAlert() {
  Swal.fire({
    title: "Beautiful Image",
    text: "This alert includes an image",
    imageUrl:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    confirmButtonColor: "#a855f7",
  });
}

function showHTMLContent() {
  Swal.fire({
    title: "<strong>HTML <u>example</u></strong>",
    icon: "info",
    html: `
      You can use <b>bold text</b>,
      <a href="https://sweetalert2.github.io" target="_blank">links</a>,
      and other HTML tags
      <br><br>
      <div class="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
        <p class="text-sm text-blue-800 dark:text-blue-200">This is a custom HTML content box!</p>
      </div>
    `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="bx bx-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: '<i class="bx bx-thumbs-down"></i> Cancel',
    cancelButtonAriaLabel: "Thumbs down",
    confirmButtonColor: "#6366f1",
    cancelButtonColor: "#64748b",
  });
}
