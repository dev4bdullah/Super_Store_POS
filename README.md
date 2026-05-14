# 🏬 React Point of Sale (POS) & Pharmacy Store System 💊

![Project Banner](https://img.shields.io/badge/React-19.2.4-blue.svg?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF.svg?style=flat&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-7.14.0-CA4245.svg?style=flat&logo=react-router)

A highly responsive 📱, modern ✨, and fast ⚡ Point of Sale (POS) and Inventory Management system built primarily for Super Stores 🛒 and Pharmacies 🏥. Powered by React ⚛️ and Vite ⚡, this application delivers a native-like experience on the web with instant loading, smooth transitions 🌊, and a premium glassmorphic UI design 🪞. 

This project is built to handle multiple user roles 👥, robust inventory tracking 📦, deep analytics 📊, and lightning-fast checkout experiences 💳 out-of-the-box.

---

## 🚀 Comprehensive Features

### 🔐 Multi-Role Authentication System
The application is securely partitioned into three dedicated roles to ensure data privacy 🛡️ and operational focus:
- 👑 **Super Admin**: 
  - 🏢 Manages tenant subscriptions, system-wide settings, and billing operations.
  - 📈 Can view high-level metrics across different shop instances.
- 🏪 **Shop Owner**: 
  - 🛠️ Full control over their specific store environment.
  - 📊 Access to detailed dashboard analytics (revenue 💵, top-selling items ⭐).
  - 📝 Can perform CRUD (Create, Read, Update, Delete) operations on the shop's inventory.
  - ⚙️ Access to store settings to configure the brand name, address, and upload store logos 🖼️.
  - 💻 Can access the POS terminal for direct sales.
- 🧑‍💼 **Salesman / Cashier**: 
  - 🛑 Restricted strictly to the POS terminal.
  - 🏎️ Optimized workflow for processing customers quickly without access to sensitive store configuration or inventory editing tools.

### 🛒 Point of Sale (POS) Terminal
Designed for high-speed retail environments 🏪:
- 🎛️ **Visual Quick-Selection Grid**: Products are displayed with clear, distinguishable emojis 🍎 or custom images 🖼️. Cashiers can simply tap items to add them to the cart instantly 👆.
- 🔍 **Smart Real-time Search**: A lightning-fast search bar filters the product grid in real-time as you type ⌨️, ideal for stores with hundreds of SKUs.
- 🛍️ **Dynamic Cart Management**:
  - ➕/➖ Add or remove items with a single click.
  - 🔢 Increment/decrement quantities directly in the cart view.
  - 🧮 Real-time cart total calculation.
- ✍️ **On-the-fly Custom Items**: Cashiers can quickly add custom miscellaneous items to a customer's cart (e.g., "Special Delivery Fee" 🚚 or "Unlisted Item" ❓) with a custom price without navigating back to the inventory manager.
- 💵 **Change Calculator**: Cashiers can enter the cash amount handed by the customer to instantly see the exact change to return 🪙, minimizing human math errors.
- 🧾 **Professional Receipt Generation**: 
  - 🖨️ Automatically formats the cart into a clean, printable receipt.
  - 🏷️ Pulls store settings (Logo, Address, Phone) from `localStorage` to brand the receipt.
  - 🌐 Integrated directly with the browser's native print API.

### 📦 Inventory & Shop Management
- 📈 **Dashboard Analytics**: 
  - 📊 Utilizes `Recharts` to draw beautiful, interactive line charts and bar graphs.
  - 💰 Displays daily revenue trends and categorizes the top-performing products 🏆.
- 📋 **Inventory Control Interface**: 
  - 📝 A clean data table displaying current stock levels, prices, categories, and icons.
  - ⚠️ Includes low-stock indicators (visually highlighting items running out of stock).
  - 🪟 Full modal-based interface for quickly adding new products ➕ or modifying existing ones ✏️.
  - 🎁 Comes pre-loaded with **50 mock products** across categories like Grocery 🍞, Dairy 🥛, Medicine 💊, Snacks 🍪, and Personal Care 🧼.
- ⚙️ **Dynamic Store Settings**: 
  - 💾 Forms to update store information that persists across browser reloads using the native `localStorage` API.

---

## 🛠️ Technology Stack & Architecture

### ⚛️ Core Technologies
- ⚛️ **React (v19)**: Leverages the latest React features for concurrent rendering and state management.
- ⚡ **Vite (v6)**: Next-generation frontend tooling providing lightning-fast Hot Module Replacement (HMR) 🔥 during development and highly optimized rollup builds for production 🏗️.
- 🛣️ **React Router DOM (v7)**: Handles complex, nested, role-based routing and protected layouts 🛡️.

### 🎨 UI / UX & Styling
- 🖌️ **Vanilla CSS**: A custom-built, lightweight CSS framework utilizing CSS variables (`var(--primary)`, `var(--bg-elevated)`) for easy theming 🌗 and dark/light mode scaling.
- 🪞 **Glassmorphism Design**: Extensive use of `backdrop-filter` and transparent backgrounds to create a sleek, modern, layered aesthetic ✨.
- 💠 **Lucide React**: Provides sharp, consistent, and customizable SVG icons across the dashboard.
- 🎬 **Framer Motion**: Enables fluid micro-interactions, page transitions 🌀, and element enter/exit animations.
- 📊 **Recharts**: A composable charting library built on React components used for rendering the analytics dashboard.

### 🧠 State Management
- 🔄 Primarily uses React Context and standard Hooks (`useState`, `useEffect`) for localized state.
- 💾 Relies on `localStorage` to simulate backend persistence for store settings and preferences, allowing the app to maintain its state even after browser refreshes 🔁.

---

## 📁 Deep Dive: Project Structure

```text
src/
├── 📂 assets/                 # Global assets, generic images, fonts
├── 🧩 components/             # Reusable, stateless UI components
│   └── 🖼️ Logo.jsx            # Dynamic store logo component
├── 📄 pages/                  # Route-level components
│   ├── 👑 Admin/
│   │   └── 📊 SuperAdmin.jsx  # Super admin dashboard view
│   ├── 🔐 Auth/
│   │   └── 🔑 Login.jsx       # Multi-role login gateway
│   ├── 🛒 POS/
│   │   ├── 💻 Terminal.jsx    # Main POS checkout interface
│   │   └── 🧾 Receipt.jsx     # Printable receipt template
│   └── 🏪 Shop/
│       ├── 📈 Dashboard.jsx   # Analytics and charts
│       ├── 📦 Inventory.jsx   # Product CRUD table and forms
│       └── ⚙️ Settings.jsx    # Store configuration forms
├── 🌐 App.jsx                 # Global Layout wrapper, Navigation Sidebar, and Route Guarding
├── 🎨 index.css               # Global CSS variables, animations, and typography
└── 🚀 main.jsx                # DOM mounting and React StrictMode wrapper
```

---

## 💻 Setup & Installation Guide

Follow these steps to get the project running on your local machine 🖥️.

### 📋 Prerequisites
- 🟢 Node.js (v18 or higher recommended)
- 📦 npm or yarn or pnpm

### 🛠️ Installation Steps

1. **Clone the repository / Navigate to the directory:** 📂
   ```bash
   cd POS
   ```

2. **Install all dependencies:** 📥
   ```bash
   npm install
   ```

3. **Start the Vite development server:** 🏃‍♂️
   ```bash
   npm run dev
   ```

4. **Access the application:** 🌐
   Open your browser and navigate to `http://localhost:5173`. 

### 🧪 Testing the Roles
When you land on the Login screen 🚪, you can click on the respective role buttons to simulate logging in as that specific user type. No password is required in the current mock setup 🔓.

---

## 🏗️ Building for Production

To create an optimized, minified bundle ready for deployment 🚀:

```bash
npm run build
```

The output will be generated inside the `dist/` directory 📁. You can preview the production build locally by running 🔍:

```bash
npm run preview
```

---

## 🔮 Future Enhancements (Roadmap)

While this application provides a robust frontend structure 💪, future iterations could include:
1. ☁️ **Backend Integration**: Connecting to a Node.js/Express backend or Firebase/Supabase for persistent cloud storage.
2. 🔐 **Real Authentication**: Implementing JWT or OAuth for secure user login.
3. 🗄️ **Database Integration**: Replacing local arrays with MongoDB or PostgreSQL for robust inventory and transaction tracking.
4. 📤 **Export Functionality**: Allowing shop owners to export inventory and sales data as CSV or Excel files.
5. 🔫 **Barcode Scanner Support**: Integrating native Keyboard event listeners to support physical USB barcode scanners in the POS terminal.

---

## 📝 License

This project is open-source 👐 and available under the [MIT License](LICENSE) 📜. You are free to copy, modify, and deploy this project for commercial or personal use 🎉.
