// Initialize Basic Sortable List
const basicList = document.getElementById("basic-list");
if (basicList) {
  new Sortable(basicList, {
    animation: 150,
    handle: ".handle",
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    onEnd: function (evt) {
      console.log("Item moved from", evt.oldIndex, "to", evt.newIndex);
    },
  });
}

// Initialize Nested Sortable List
const nestedList = document.getElementById("nested-list");
if (nestedList) {
  const initNestedSortable = (el) => {
    new Sortable(el, {
      group: "nested",
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65,
      handle: ".handle",
      ghostClass: "sortable-ghost",
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag",
      onEnd: function (evt) {
        console.log("Nested item moved");
      },
    });

    // Initialize nested children
    const nestedChildren = el.querySelectorAll(".nested-children");
    nestedChildren.forEach((child) => {
      initNestedSortable(child);
    });
  };

  initNestedSortable(nestedList);
}

// Initialize Action List
const actionList = document.getElementById("action-list");
if (actionList) {
  new Sortable(actionList, {
    animation: 150,
    handle: ".handle",
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    onEnd: function (evt) {
      console.log("Action item moved");
    },
  });

  // Add event listeners for action buttons
  actionList.addEventListener("click", function (e) {
    const editBtn = e.target.closest(".edit");
    const deleteBtn = e.target.closest(".delete");

    if (editBtn) {
      const item = editBtn.closest(".nestable-item-action");
      const itemName = item.querySelector("span").textContent;
      alert(`Edit: ${itemName}`);
    }

    if (deleteBtn) {
      const item = deleteBtn.closest(".nestable-item-action");
      const itemName = item.querySelector("span").textContent;
      if (confirm(`Delete "${itemName}"?`)) {
        item.remove();
      }
    }
  });
}

// Initialize Multi-Column Lists
const todoList = document.getElementById("todo-list");
const progressList = document.getElementById("progress-list");
const doneList = document.getElementById("done-list");

if (todoList && progressList && doneList) {
  const multiListOptions = {
    group: "shared",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    onEnd: function (evt) {
      const itemEl = evt.item;
      const fromList = evt.from.id;
      const toList = evt.to.id;
      console.log(`Item moved from ${fromList} to ${toList}`);
    },
  };

  new Sortable(todoList, multiListOptions);
  new Sortable(progressList, multiListOptions);
  new Sortable(doneList, multiListOptions);
}
