/**
 * Chat App - Alpine.js Component
 * Manages chat functionality with user list, messages, and attachments
 */

document.addEventListener("alpine:init", () => {
  Alpine.data("chatApp", () => ({
    showMobileList: true,
    searchQuery: "",
    activeUser: null,
    showAttachments: false,
    currentUser: {
      id: "me",
      name: "Admin User",
      avatar:
        "https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff",
    },

    // Mock Users Data
    users: [
      {
        id: 1,
        name: "Sarah Wilson",
        avatar:
          "https://ui-avatars.com/api/?name=Sarah+Wilson&background=10b981&color=fff",
        status: "online",
        lastMessage: "Sure, I can send over the files by...",
        lastMessageTime: "10:42 AM",
        unread: 2,
      },
      {
        id: 2,
        name: "Michael Chen",
        avatar:
          "https://ui-avatars.com/api/?name=Michael+Chen&background=f59e0b&color=fff",
        status: "away",
        lastMessage: "Meeting rescheduled to 3 PM.",
        lastMessageTime: "Yesterday",
        unread: 0,
      },
      {
        id: 3,
        name: "Emily Davis",
        avatar:
          "https://ui-avatars.com/api/?name=Emily+Davis&background=ec4899&color=fff",
        status: "offline",
        lastMessage: "Thanks for your help!",
        lastMessageTime: "Mon",
        unread: 0,
      },
      {
        id: 4,
        name: "David Miller",
        avatar:
          "https://ui-avatars.com/api/?name=David+Miller&background=6366f1&color=fff",
        status: "online",
        lastMessage: "Can we check the logs?",
        lastMessageTime: "Mon",
        unread: 5,
      },
      {
        id: 5,
        name: "James Wilson",
        avatar:
          "https://ui-avatars.com/api/?name=James+Wilson&background=8b5cf6&color=fff",
        status: "offline",
        lastMessage: "Project approved.",
        lastMessageTime: "Sun",
        unread: 1,
      },
    ],

    // Mock Messages Data
    messages: {
      1: [
        {
          id: 1,
          text: "Hi Sarah, how is the new feature coming along?",
          time: "10:30 AM",
          isMe: true,
          status: "read",
        },
        {
          id: 2,
          text: "Hey! It is going well. I just finished the initial testing.",
          time: "10:35 AM",
          isMe: false,
        },
        {
          id: 3,
          text: "Great! When can we review it?",
          time: "10:36 AM",
          isMe: true,
          status: "read",
        },
        {
          id: 4,
          text: "I need about an hour to clean up the code.",
          time: "10:40 AM",
          isMe: false,
        },
        {
          id: 5,
          text: "Sure, I can send over the files by noon.",
          time: "10:42 AM",
          isMe: false,
        },
      ],
      2: [
        {
          id: 1,
          text: "Michael, are we still on for the meeting?",
          time: "Yesterday",
          isMe: true,
          status: "read",
        },
        {
          id: 2,
          text: "Meeting rescheduled to 3 PM.",
          time: "Yesterday",
          isMe: false,
        },
      ],
    },

    currentMessages: [],
    newMessage: "",

    init() {},

    get filteredUsers() {
      if (this.searchQuery === "") return this.users;
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
    },

    selectUser(user) {
      this.activeUser = user;
      this.currentMessages = this.messages[user.id] || [];
      this.showMobileList = false;
      user.unread = 0;
      this.showAttachments = false;

      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },

    handleFileSelect(event, type) {
      const file = event.target.files[0];
      if (!file) return;

      const msg = {
        id: Date.now(),
        text: "",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMe: true,
        status: "sent",
        attachment: {
          type: type,
          name: file.name,
          size: (file.size / 1024).toFixed(2) + " KB",
          url: URL.createObjectURL(file),
        },
      };

      this.currentMessages.push(msg);
      if (!this.messages[this.activeUser.id])
        this.messages[this.activeUser.id] = [];
      this.messages[this.activeUser.id].push(msg);

      this.activeUser.lastMessage = type === "image" ? "📷 Photo" : "📎 File";
      this.activeUser.lastMessageTime = "Just now";

      this.$nextTick(() => {
        this.scrollToBottom();
      });

      event.target.value = "";
    },

    sendMessage() {
      if (!this.newMessage.trim() || !this.activeUser) return;

      const msg = {
        id: Date.now(),
        text: this.newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMe: true,
        status: "sent",
      };

      this.currentMessages.push(msg);
      if (!this.messages[this.activeUser.id])
        this.messages[this.activeUser.id] = [];
      this.messages[this.activeUser.id].push(msg);

      this.activeUser.lastMessage = this.newMessage;
      this.activeUser.lastMessageTime = "Just now";

      this.newMessage = "";

      this.$nextTick(() => {
        this.scrollToBottom();
      });

      this.mockReply();
    },

    scrollToBottom() {
      const container = document.getElementById("messageArea");
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    },

    mockReply() {
      setTimeout(() => {
        if (!this.activeUser) return;

        const replies = [
          "That sounds good!",
          "I'll check it out.",
          "Thanks for the update.",
          "Let me get back to you on that.",
          "Okay, noted.",
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];

        const replyMsg = {
          id: Date.now() + 1,
          text: randomReply,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isMe: false,
        };

        this.currentMessages.push(replyMsg);
        if (!this.messages[this.activeUser.id])
          this.messages[this.activeUser.id] = [];
        this.messages[this.activeUser.id].push(replyMsg);

        this.activeUser.lastMessage = randomReply;
        this.activeUser.lastMessageTime = "Just now";

        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }, 2000);
    },
  }));
});
