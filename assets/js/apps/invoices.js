function invoicesApp() {
  return {
    filter: "all",
    showCreateInvoiceModal: false,
    get filterStatus() {
      if (this.filter === "all") return "All Invoices";
      return this.filter.charAt(0).toUpperCase() + this.filter.slice(1);
    },
    // Detail Modal State
    showDetailModal: false,
    selectedInvoice: null,

    // Mock Line Items Generator (for visualization)
    get currentLineItems() {
      if (!this.selectedInvoice) return [];
      // Deterministic pseudo-random items based on ID
      return [
        {
          desc: "Professional Services - Web Design",
          qty: 1,
          price:
            parseFloat(this.selectedInvoice.amount.replace(/[^0-9.-]+/g, "")) *
            0.4,
        },
        {
          desc: "Frontend Development (React/Vue)",
          qty: 1,
          price:
            parseFloat(this.selectedInvoice.amount.replace(/[^0-9.-]+/g, "")) *
            0.6,
        },
      ];
    },

    selectInvoice(invoice) {
      this.selectedInvoice = invoice;
      this.showDetailModal = true;
    },

    invoices: [
      {
        id: "#INV-2024-001",
        client: "Acme Corporation",
        email: "billing@acme.com",
        amount: "$2,450.00",
        date: "Oct 24, 2024",
        dueDate: "Nov 24, 2024",
        status: "paid",
        address: "123 Acme Way, CA",
      },
      {
        id: "#INV-2024-002",
        client: "Globex Inc",
        email: "accounts@globex.com",
        amount: "$1,200.50",
        date: "Oct 28, 2024",
        dueDate: "Nov 10, 2024",
        status: "pending",
        address: "456 Globex St, NY",
      },
      {
        id: "#INV-2024-003",
        client: "Soylent Corp",
        email: "finance@soylent.com",
        amount: "$4,500.00",
        date: "Oct 15, 2024",
        dueDate: "Oct 30, 2024",
        status: "overdue",
        address: "789 People Rd, TX",
      },
      {
        id: "#INV-2024-004",
        client: "Initech",
        email: "peter@initech.com",
        amount: "$850.00",
        date: "Nov 01, 2024",
        dueDate: "Nov 15, 2024",
        status: "draft",
        address: "101 TPS Report Blvd, WA",
      },
      {
        id: "#INV-2024-005",
        client: "Stark Industries",
        email: "tony@stark.com",
        amount: "$15,000.00",
        date: "Oct 30, 2024",
        dueDate: "Nov 30, 2024",
        status: "paid",
        address: "10880 Malibu Point, CA",
      },
      {
        id: "#INV-2024-006",
        client: "Wayne Enterprises",
        email: "bruce@wayne.com",
        amount: "$8,200.00",
        date: "Nov 05, 2024",
        dueDate: "Dec 05, 2024",
        status: "pending",
        address: "1007 Mountain Drive, NJ",
      },
    ],
    getStatusColor(status) {
      const colors = {
        paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20",
        pending:
          "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20",
        overdue:
          "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 border border-red-200 dark:border-red-500/20",
        draft:
          "bg-slate-100 text-slate-700 dark:bg-slate-700/50 dark:text-slate-400 border border-slate-200 dark:border-slate-600",
      };
      return colors[status] || "bg-slate-100 text-slate-700";
    },
    get filteredInvoices() {
      if (this.filter === "all") return this.invoices;
      return this.invoices.filter((inv) => inv.status === this.filter);
    },
    get stats() {
      const total = this.invoices.reduce(
        (acc, curr) => acc + parseFloat(curr.amount.replace(/[^0-9.-]+/g, "")),
        0,
      );
      const paid = this.invoices.filter((i) => i.status === "paid").length;
      const pending = this.invoices.filter(
        (i) => i.status === "pending",
      ).length;
      const overdue = this.invoices.filter(
        (i) => i.status === "overdue",
      ).length;
      return {
        total: new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(total),
        paid,
        pending,
        overdue,
      };
    },
  };
}
