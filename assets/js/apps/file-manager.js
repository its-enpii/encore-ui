function fileManagerApp() {
  return {
    showUploadModal: false,
    currentFolder: "my-files",
    folders: [
      { id: 1, name: "Exams", files: 8, size: "82 MB", color: "blue" },
      { id: 2, name: "Birthday", files: 123, size: "249 MB", color: "green" },
      { id: 3, name: "Portfolio", files: 1, size: "15 MB", color: "yellow" },
      { id: 4, name: "Events", files: 0, size: "0 MB", color: "pink" },
    ],
    files: [
      {
        id: 1,
        name: "Sertificate.pdf",
        type: "pdf",
        size: "15 MB",
        modified: "2 min ago",
        modifiedBy: "Me",
        members: [],
      },
      {
        id: 2,
        name: "Prototyping.fig",
        type: "figma",
        size: "288 MB",
        modified: "Yesterday, 17:45 PM",
        modifiedBy: "Vincent",
        members: [
          {
            name: "User 1",
            avatar:
              "https://ui-avatars.com/api/?name=U1&background=6366f1&color=fff",
          },
          {
            name: "User 2",
            avatar:
              "https://ui-avatars.com/api/?name=U2&background=f59e0b&color=fff",
          },
          {
            name: "User 3",
            avatar:
              "https://ui-avatars.com/api/?name=U3&background=ec4899&color=fff",
          },
        ],
      },
      {
        id: 3,
        name: "Logo.png",
        type: "image",
        size: "54 MB",
        modified: "Yesterday, 13:24 PM",
        modifiedBy: "Me",
        members: [],
      },
      {
        id: 4,
        name: "Family.jpg",
        type: "image",
        size: "4.2 MB",
        modified: "Yesterday, 09:15 AM",
        modifiedBy: "Me",
        members: [],
      },
      {
        id: 5,
        name: "Financial_Statement.pdf",
        type: "pdf",
        size: "1.5 MB",
        modified: "20 July, 11:46 AM",
        modifiedBy: "Ishika",
        members: [
          {
            name: "User 1",
            avatar:
              "https://ui-avatars.com/api/?name=U1&background=6366f1&color=fff",
          },
          {
            name: "User 2",
            avatar:
              "https://ui-avatars.com/api/?name=U2&background=f59e0b&color=fff",
          },
          {
            name: "User 3",
            avatar:
              "https://ui-avatars.com/api/?name=U3&background=ec4899&color=fff",
          },
          {
            name: "User 4",
            avatar:
              "https://ui-avatars.com/api/?name=U4&background=10b981&color=fff",
          },
        ],
      },
    ],
    getFolderColor(color) {
      const colors = {
        blue: "text-blue-500",
        green: "text-green-500",
        yellow: "text-yellow-500",
        pink: "text-pink-500",
      };
      return colors[color] || "text-blue-500";
    },
    getFileIcon(type) {
      const icons = {
        pdf: "bx bxs-file-pdf text-red-500",
        figma: "bx bx-palette text-purple-500",
        image: "bx bxs-image text-blue-500",
      };
      return icons[type] || "bx bxs-file text-slate-500";
    },
  };
}
