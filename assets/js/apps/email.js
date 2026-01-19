/**
 * Email App - Alpine.js Component
 * Manages email functionality with folders, labels, and email management
 */

function emailApp() {
  return {
    sidebarHidden: false,
    showFolderList: true,
    showEmailList: true,
    darkMode: localStorage.getItem("theme") === "dark",
    activeFolder: null,
    activeEmail: null,
    composing: false,

    folders: [
      { id: "inbox", name: "Inbox", icon: "bx bx-inbox", count: 12 },
      { id: "starred", name: "Starred", icon: "bx bxs-star", count: 3 },
      { id: "sent", name: "Sent", icon: "bx bx-send", count: 0 },
      { id: "drafts", name: "Drafts", icon: "bx bx-file", count: 2 },
      { id: "spam", name: "Spam", icon: "bx bx-error-circle", count: 5 },
      { id: "trash", name: "Trash", icon: "bx bx-trash", count: 8 },
    ],

    labels: [
      { id: "work", name: "Work", color: "#3b82f6" },
      { id: "personal", name: "Personal", color: "#10b981" },
      { id: "important", name: "Important", color: "#ef4444" },
      { id: "travel", name: "Travel", color: "#f59e0b" },
    ],

    emails: [
      {
        id: 1,
        from: "Sarah Johnson",
        email: "sarah.johnson@company.com",
        avatar:
          "https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366f1&color=fff",
        subject: "Q4 Project Review Meeting",
        preview:
          "Hi team, I wanted to schedule our quarterly project review meeting...",
        body: "<p>Hi team,</p><p>I wanted to schedule our quarterly project review meeting for next week. Please let me know your availability.</p><p>Looking forward to discussing our progress and next steps.</p><p>Best regards,<br>Sarah</p>",
        time: "10:30 AM",
        date: "Jan 17, 2026 at 10:30 AM",
        read: false,
        starred: true,
        hasAttachment: true,
        labels: ["work", "important"],
        folder: "inbox",
        attachments: [
          { name: "Q4_Report.pdf", size: "2.4 MB" },
          { name: "Meeting_Agenda.docx", size: "156 KB" },
        ],
      },
      {
        id: 2,
        from: "Mike Chen",
        email: "mike.chen@startup.io",
        avatar:
          "https://ui-avatars.com/api/?name=Mike+Chen&background=10b981&color=fff",
        subject: "Design System Updates",
        preview:
          "Hey! I've made some updates to our design system components...",
        body: "<p>Hey!</p><p>I've made some updates to our design system components. The new color palette and typography scale are now live in Figma.</p><p>Please review and let me know if you have any feedback.</p><p>Thanks,<br>Mike</p>",
        time: "9:15 AM",
        date: "Jan 17, 2026 at 9:15 AM",
        read: false,
        starred: false,
        hasAttachment: false,
        labels: ["work"],
        folder: "inbox",
      },
      {
        id: 3,
        from: "Emma Wilson",
        email: "emma.wilson@agency.com",
        avatar:
          "https://ui-avatars.com/api/?name=Emma+Wilson&background=f59e0b&color=fff",
        subject: "Weekend Trip Planning",
        preview: "Are you still up for the weekend trip to the mountains?",
        body: "<p>Hi!</p><p>Are you still up for the weekend trip to the mountains? I found a great cabin we could rent.</p><p>Let me know soon so I can book it!</p><p>Cheers,<br>Emma</p>",
        time: "Yesterday",
        date: "Jan 16, 2026 at 3:45 PM",
        read: true,
        starred: false,
        hasAttachment: false,
        labels: ["personal", "travel"],
        folder: "inbox",
      },
      {
        id: 4,
        from: "David Park",
        email: "david.park@tech.com",
        avatar:
          "https://ui-avatars.com/api/?name=David+Park&background=8b5cf6&color=fff",
        subject: "Code Review Request",
        preview: "Could you review my PR for the new authentication flow?",
        body: "<p>Hi,</p><p>Could you review my PR for the new authentication flow? I've implemented the OAuth integration we discussed.</p><p>Link: github.com/repo/pull/123</p><p>Thanks!<br>David</p>",
        time: "Yesterday",
        date: "Jan 16, 2026 at 11:20 AM",
        read: true,
        starred: true,
        hasAttachment: false,
        labels: ["work"],
        folder: "inbox",
      },
      {
        id: 5,
        from: "Lisa Anderson",
        email: "lisa@marketing.co",
        avatar:
          "https://ui-avatars.com/api/?name=Lisa+Anderson&background=ec4899&color=fff",
        subject: "Marketing Campaign Results",
        preview: "The Q1 campaign results are in and they look great!",
        body: "<p>Team,</p><p>The Q1 campaign results are in and they look great! We exceeded our targets by 25%.</p><p>Full report attached.</p><p>Best,<br>Lisa</p>",
        time: "Jan 15",
        date: "Jan 15, 2026 at 2:30 PM",
        read: true,
        starred: false,
        hasAttachment: true,
        labels: ["work"],
        folder: "inbox",
        attachments: [{ name: "Q1_Campaign_Results.pdf", size: "1.8 MB" }],
      },
    ],

    get currentEmails() {
      if (!this.activeFolder)
        return this.emails.filter((e) => e.folder === "inbox");
      return this.emails.filter((e) => e.folder === this.activeFolder.id);
    },

    init() {
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      }
      this.activeFolder = this.folders[0];
    },

    selectFolder(folder) {
      this.activeFolder = folder;
      this.activeEmail = null;
      this.composing = false;
      this.showEmailList = true;
      if (window.innerWidth < 1024) {
        this.showFolderList = false;
      }
    },

    selectEmail(email) {
      this.activeEmail = email;
      this.composing = false;
      email.read = true;
      if (window.innerWidth < 1024) {
        this.showEmailList = false;
      }
    },

    startCompose() {
      this.composing = true;
      this.activeEmail = null;
      if (window.innerWidth < 1024) {
        this.showEmailList = false;
        this.showFolderList = false;
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
