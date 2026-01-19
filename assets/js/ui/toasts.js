function showToast(type, msg, gravity = "bottom", position = "right") {
  let className = "toast-" + type;

  Toastify({
    text: msg,
    duration: 5000,
    close: true,
    gravity: gravity, // `top` or `bottom`
    position: position, // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    className: className,
    onClick: function () {}, // Callback after click
  }).showToast();
}

function showCustomToast() {
  // Create HTML node for content
  var div = document.createElement("div");
  div.classList.add("flex", "gap-3", "items-start");
  div.innerHTML = `
            <img src="https://ui-avatars.com/api/?name=John+Doe&background=random" class="w-10 h-10 rounded-full shrink-0">
            <div class="flex-1 min-w-[200px]">
                <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">John Doe sent a request</p>
                <p class="text-xs text-slate-500 mt-1 mb-2">2 mutual friends</p>
                <div class="flex gap-2">
                    <button onclick="this.closest('.toastify').remove()" class="px-3 py-1 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-700">Accept</button>
                    <button onclick="this.closest('.toastify').remove()" class="px-3 py-1 bg-slate-200 text-slate-700 text-xs rounded hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300">Decline</button>
                </div>
            </div>
        `;

  Toastify({
    node: div,
    duration: -1, // Permanent until clicked or dismissed
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: document.documentElement.classList.contains("dark")
        ? "#1e293b"
        : "#ffffff", // slate-800 or white
      color: document.documentElement.classList.contains("dark")
        ? "#f1f5f9"
        : "#0f172a",
      border: document.documentElement.classList.contains("dark")
        ? "1px solid #334155"
        : "1px solid #e2e8f0",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      padding: "16px",
      width: "auto",
    },
  }).showToast();
}
