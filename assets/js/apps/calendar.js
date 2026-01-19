/**
 * Calendar App - Alpine.js Component
 * Manages calendar functionality using FullCalendar.js
 */

function calendarApp() {
  return {
    sidebarHidden: false,
    showSidebar: window.innerWidth >= 1024, // Default: hidden on mobile, visible on desktop
    showEventModal: false,
    darkMode: localStorage.getItem("theme") === "dark",
    calendar: null,
    selectedCategory: null,

    newEvent: {
      title: "",
      category: "work",
      date: "",
      time: "",
      description: "",
    },

    categories: [
      { id: "work", name: "Work", color: "#3b82f6", count: 3 },
      { id: "personal", name: "Personal", color: "#10b981", count: 2 },
      { id: "meeting", name: "Meeting", color: "#f59e0b", count: 4 },
      { id: "other", name: "Other", color: "#8b5cf6", count: 1 },
    ],

    events: [
      {
        id: 1,
        title: "Team Meeting",
        start: "2026-01-20T10:00:00",
        category: "meeting",
        backgroundColor: "#f59e0b",
        borderColor: "#f59e0b",
        extendedProps: { category: "Meeting" },
      },
      {
        id: 2,
        title: "Project Deadline",
        start: "2026-01-22T17:00:00",
        category: "work",
        backgroundColor: "#3b82f6",
        borderColor: "#3b82f6",
        extendedProps: { category: "Work" },
      },
      {
        id: 3,
        title: "Dentist Appointment",
        start: "2026-01-23T14:00:00",
        category: "personal",
        backgroundColor: "#10b981",
        borderColor: "#10b981",
        extendedProps: { category: "Personal" },
      },
      {
        id: 4,
        title: "Client Presentation",
        start: "2026-01-25T11:00:00",
        category: "meeting",
        backgroundColor: "#f59e0b",
        borderColor: "#f59e0b",
        extendedProps: { category: "Meeting" },
      },
      {
        id: 5,
        title: "Code Review",
        start: "2026-01-27T15:00:00",
        category: "work",
        backgroundColor: "#3b82f6",
        borderColor: "#3b82f6",
        extendedProps: { category: "Work" },
      },
      {
        id: 6,
        title: "Sprint Planning",
        start: "2026-01-28T09:00:00",
        category: "meeting",
        backgroundColor: "#f59e0b",
        borderColor: "#f59e0b",
        extendedProps: { category: "Meeting" },
      },
      {
        id: 7,
        title: "Design Review",
        start: "2026-01-29T14:00:00",
        category: "work",
        backgroundColor: "#3b82f6",
        borderColor: "#3b82f6",
        extendedProps: { category: "Work" },
      },
      {
        id: 8,
        title: "Gym Session",
        start: "2026-01-30T18:00:00",
        category: "personal",
        backgroundColor: "#10b981",
        borderColor: "#10b981",
        extendedProps: { category: "Personal" },
      },
      {
        id: 9,
        title: "Conference Call",
        start: "2026-01-31T10:00:00",
        category: "meeting",
        backgroundColor: "#f59e0b",
        borderColor: "#f59e0b",
        extendedProps: { category: "Meeting" },
      },
      {
        id: 10,
        title: "Birthday Party",
        start: "2026-02-01T19:00:00",
        category: "other",
        backgroundColor: "#8b5cf6",
        borderColor: "#8b5cf6",
        extendedProps: { category: "Other" },
      },
    ],

    get upcomingEvents() {
      const today = new Date();
      return this.events
        .filter((event) => new Date(event.start) >= today)
        .sort((a, b) => new Date(a.start) - new Date(b.start))
        .slice(0, 5);
    },

    init() {
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      }

      this.$nextTick(() => {
        this.initCalendar();
      });
    },

    initCalendar() {
      const calendarEl = document.getElementById("calendar");

      this.calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        },
        events: this.events,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: (info) => {
          this.newEvent.date = info.startStr;
          this.showEventModal = true;
        },
        eventClick: (info) => {
          alert("Event: " + info.event.title);
        },
        eventDrop: (info) => {
          console.log("Event moved:", info.event);
        },
      });

      this.calendar.render();
    },

    createEvent() {
      if (!this.newEvent.title || !this.newEvent.date) {
        alert("Please fill in title and date");
        return;
      }

      const categoryColor =
        this.categories.find((c) => c.id === this.newEvent.category)?.color ||
        "#3b82f6";
      const datetime = this.newEvent.time
        ? `${this.newEvent.date}T${this.newEvent.time}:00`
        : this.newEvent.date;

      const event = {
        id: Date.now(),
        title: this.newEvent.title,
        start: datetime,
        category: this.newEvent.category,
        backgroundColor: categoryColor,
        borderColor: categoryColor,
        extendedProps: {
          category:
            this.categories.find((c) => c.id === this.newEvent.category)
              ?.name || "Work",
          description: this.newEvent.description,
        },
      };

      this.events.push(event);
      this.calendar.addEvent(event);

      // Reset form
      this.newEvent = {
        title: "",
        category: "work",
        date: "",
        time: "",
        description: "",
      };

      this.showEventModal = false;
    },

    filterEvents() {
      if (this.selectedCategory) {
        const filtered = this.events.filter(
          (e) => e.category === this.selectedCategory,
        );
        this.calendar.removeAllEvents();
        this.calendar.addEventSource(filtered);
      } else {
        this.calendar.removeAllEvents();
        this.calendar.addEventSource(this.events);
      }
    },

    formatEventDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
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
