/**
 * Kanban Board App - Alpine.js Component
 * Manages kanban board with drag & drop using SortableJS
 */

function kanbanApp() {
  return {
    sidebarHidden: false,
    darkMode: localStorage.getItem("theme") === "dark",
    showTaskModal: false,
    editingTask: null,
    searchQuery: "",

    columns: [
      { id: "todo", name: "To Do", color: "#8b5cf6" }, // Purple
      { id: "in-progress", name: "In Progress", color: "#3b82f6" }, // Blue
      { id: "review", name: "Review", color: "#f59e0b" }, // Amber
      { id: "done", name: "Done", color: "#10b981" }, // Emerald
    ],

    tasks: [
      {
        id: 1,
        title: "Design new landing page",
        description:
          "Create mockups for the new landing page with modern design",
        column: "todo",
        priority: "high",
        assignee: {
          name: "Sarah Johnson",
          avatar:
            "https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366f1&color=fff",
        },
        dueDate: "2026-01-25",
      },
      {
        id: 2,
        title: "Fix authentication bug",
        description: "Users are unable to login with Google OAuth",
        column: "todo",
        priority: "critical",
        assignee: {
          name: "Mike Chen",
          avatar:
            "https://ui-avatars.com/api/?name=Mike+Chen&background=10b981&color=fff",
        },
        dueDate: "2026-01-20",
      },
      {
        id: 3,
        title: "Update documentation",
        description: "Add API documentation for new endpoints",
        column: "in-progress",
        priority: "medium",
        assignee: {
          name: "Emma Wilson",
          avatar:
            "https://ui-avatars.com/api/?name=Emma+Wilson&background=f59e0b&color=fff",
        },
        dueDate: "2026-01-22",
      },
      {
        id: 4,
        title: "Implement dark mode",
        description: "Add dark mode support across all pages",
        column: "in-progress",
        priority: "high",
        assignee: {
          name: "David Park",
          avatar:
            "https://ui-avatars.com/api/?name=David+Park&background=8b5cf6&color=fff",
        },
        dueDate: "2026-01-24",
      },
      {
        id: 5,
        title: "Code review for PR #123",
        description: "Review authentication refactoring pull request",
        column: "review",
        priority: "medium",
        assignee: {
          name: "Lisa Anderson",
          avatar:
            "https://ui-avatars.com/api/?name=Lisa+Anderson&background=ec4899&color=fff",
        },
        dueDate: "2026-01-21",
      },
      {
        id: 6,
        title: "Setup CI/CD pipeline",
        description: "Configure GitHub Actions for automated deployment",
        column: "done",
        priority: "high",
        assignee: {
          name: "Mike Chen",
          avatar:
            "https://ui-avatars.com/api/?name=Mike+Chen&background=10b981&color=fff",
        },
        dueDate: "2026-01-18",
      },
      {
        id: 7,
        title: "Database optimization",
        description: "Optimize slow queries and add indexes",
        column: "done",
        priority: "medium",
        assignee: {
          name: "Sarah Johnson",
          avatar:
            "https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366f1&color=fff",
        },
        dueDate: "2026-01-17",
      },
    ],

    newTask: {
      title: "",
      description: "",
      column: "todo",
      priority: "medium",
      assignee: {
        name: "Admin User",
        avatar:
          "https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff",
      },
      dueDate: "",
    },

    init() {
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      }

      this.$nextTick(() => {
        this.initSortable();
      });
    },

    initSortable() {
      this.columns.forEach((column) => {
        const el = document.getElementById("column-" + column.id);
        if (el) {
          Sortable.create(el, {
            group: "kanban",
            animation: 150,
            ghostClass: "opacity-50",
            dragClass: "rotate-2",
            onEnd: (evt) => {
              const taskId = parseInt(evt.item.dataset.taskId);
              const newColumnId = evt.to.dataset.columnId;

              // Update task column
              const task = this.tasks.find((t) => t.id === taskId);
              if (task) {
                task.column = newColumnId;
              }
            },
          });
        }
      });
    },

    getTasksByColumn(columnId) {
      let filtered = this.tasks.filter((task) => task.column === columnId);

      // Apply search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (task) =>
            task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query),
        );
      }

      return filtered;
    },

    saveTask() {
      if (!this.newTask.title) {
        alert("Please enter a task title");
        return;
      }

      if (this.editingTask) {
        // Update existing task
        const task = this.tasks.find((t) => t.id === this.editingTask.id);
        if (task) {
          task.title = this.newTask.title;
          task.description = this.newTask.description;
          task.column = this.newTask.column;
          task.priority = this.newTask.priority;
          task.dueDate = this.newTask.dueDate;
        }
      } else {
        // Create new task
        const newId = Math.max(...this.tasks.map((t) => t.id), 0) + 1;
        this.tasks.push({
          id: newId,
          title: this.newTask.title,
          description: this.newTask.description,
          column: this.newTask.column,
          priority: this.newTask.priority,
          assignee: this.newTask.assignee,
          dueDate: this.newTask.dueDate,
        });
      }

      // Reset form
      this.newTask = {
        title: "",
        description: "",
        column: "todo",
        priority: "medium",
        assignee: {
          name: "Admin User",
          avatar:
            "https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff",
        },
        dueDate: "",
      };
      this.editingTask = null;
      this.showTaskModal = false;
    },

    editTask(task) {
      this.editingTask = task;
      this.newTask = {
        title: task.title,
        description: task.description,
        column: task.column,
        priority: task.priority,
        assignee: task.assignee,
        dueDate: task.dueDate,
      };
      this.showTaskModal = true;
    },

    deleteTask(taskId) {
      if (confirm("Are you sure you want to delete this task?")) {
        const index = this.tasks.findIndex((t) => t.id === taskId);
        if (index !== -1) {
          this.tasks.splice(index, 1);
        }
      }
    },

    toggleSidebar() {
      this.sidebarHidden = !this.sidebarHidden;
    },

    toggleTheme() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("theme", this.darkMode ? "dark" : "light");
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  };
}
