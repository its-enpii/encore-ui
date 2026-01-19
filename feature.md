Berikut adalah **Struktur Final & Terlengkap** untuk template **EnCore UI**.

Struktur ini sudah mencakup menu **Layouts** yang baru saja Anda minta, serta perbaikan hierarki pada menu **Forms** agar lebih efisien. Ini adalah peta navigasi (Sidebar) yang akan dilihat oleh pengguna.

---

# 🏗️ EnCore UI — The Master Sidebar Structure

### 1. 🏠 Dashboards

* **Analytics** (Statistik umum)
* **Project / CRM** (Task & Team Performance)
* **eCommerce** (Sales & Revenue)

### 2. 📐 Layouts *(Menu Baru)*

*Menu ini untuk demo ganti tampilan secara langsung.*

* **Vertical** (Default: Menu Kiri)
* **Horizontal** (Menu Atas)
* **Detached** (Sidebar Melayang)
* **Two Column** (Sidebar Ikon Kecil + Submenu)
* **Compact / Mini** (Sidebar yang bisa dilipat)

### 3. 📱 Apps (Fungsional)

* **Chat**
* **Email** (Inbox, Read, Compose)
* **Calendar** (FullCalendar)
* **Kanban Board** *(Penting untuk Bug Tracking)*
* **File Manager**
* **Invoices** (List, Create, Print)

### 4. 🧩 UI Interface

* **Basic UI:**
* Alerts, Badges, Buttons
* Cards (Basic, Action, Overlay)
* Carousel, Dropdowns, Grid
* Modals, Offcanvas, Tabs
* Toasts, Tooltips, Typography, Video


* **Advanced UI:**
* SweetAlert (Popup)
* Nestable List (Drag & Drop List)
* Ratings (Star)
* Range Slider
* Ribbons (Label Card)
* Lightbox (Gallery Zoom)
* Tree View


* **Icons** (Boxicons, Feather, FontAwesome)

### 5. 📝 Forms

* **Basic Elements** (Input, Checkbox, Radio, Switch, Textarea)
* **Form Layouts** *(Dropdown)*
* Vertical Form
* Horizontal Form
* Column Grid Form


* **Form Advanced / Plugins** *(Dropdown)*
* Select2 / Choices (Searchable Select)
* Date & Time Picker
* Input Masks (Format No.HP/Uang)
* Text Editors (WYSIWYG)
* **Form Repeater** (Tambah baris dinamis)
* File Upload (Dropzone)
* Clipboard


* **Form Wizard** *(Dropdown)*
* Horizontal Wizard (Step samping)
* Vertical Wizard (Step bawah)
* Validation Wizard (Step dikunci)


* **Form Validation** (Halaman demo error/sukses)

### 6. 📊 Tables & Data

* **Tables:** Basic Tables, DataTables (Search & Export).
* **Charts:** ApexCharts, ChartJS.
* **Maps:** Google Maps, Vector Maps.

### 7. 📄 Pages

* **Authentication:**
* Login, Register, Forgot Password
* Lock Screen, Reset Password


* **User Module:**
* Profile (Header + Timeline)
* Account Settings


* **Utility / Misc:**
* Pricing Table
* FAQ
* Timeline (History)
* Gallery
* Search Results
* Testimonials
* Starter / Blank Page


* **Special Pages:**
* Coming Soon (Countdown)
* Maintenance Mode
* Error 404 & 500



---

### Implementasi Struktur Folder (Developer View)

Agar sinkron dengan sidebar di atas, berikut struktur folder `views` (contoh Laravel) yang rapi:

```text
/resources/views
├── /layouts                  <-- SYSTEM LAYOUT
│   ├── master.blade.php      (Induk Utama)
│   ├── /wrappers             (File logika untuk Vertical, Horizontal, dll)
│   └── /partials             (Navbar, Sidebar, Footer, ThemeSettings)
│
├── /dashboards               <-- Analytics, CRM
├── /apps                     <-- Chat, Email, Kanban, Invoice
│
├── /ui                       <-- COMPONENTS
│   ├── /basic                (Card, Button, Alert...)
│   ├── /advanced             (SweetAlert, Nestable...)
│   └── /icons
│
├── /forms                    <-- FORMS
│   ├── elements.blade.php    (Basic Inputs)
│   ├── validation.blade.php
│   ├── /layouts              (Vertical, Horizontal)
│   ├── /advanced             (Select2, Repeater, Datepicker)
│   └── /wizard               (Horizontal, Vertical)
│
├── /tables                   <-- Basic, Datatable
├── /charts                   <-- Apex, ChartJS
├── /maps                     <-- Google, Vector
│
└── /pages                    <-- FULL PAGES
    ├── /auth                 (Login, Register...)
    ├── /user                 (Profile, Settings)
    ├── /utility              (Pricing, FAQ, Timeline...)
    └── /special              (404, 500, Maintenance)

```

Struktur ini sudah final, solid, dan sangat profesional untuk standar **Project Leader**. Anda bisa langsung menggunakan daftar ini sebagai *checklist* pengembangan.