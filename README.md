# Personal Budget Tracker  
Full-Stack Web Application  

**Course:** CP476 – Internet Computing  
**Term:** Winter 2026  

## Team
- Samiyah Khan  
- Hamza Azim  
- Anna Doneva  

---

## Overview
The Personal Budget Tracker is a full-stack web application designed to help users track and manage their personal finances in a simple and intuitive way. The application allows users to record income and expenses, categorize transactions, and view summaries of their financial activity over time.

This project focuses on providing essential budgeting functionality without unnecessary complexity, making it especially suitable for students and young adults managing limited income.

---

## Problem Statement
Many existing budgeting tools are overly complex, locked behind paid subscriptions, or designed for advanced financial planning. This can discourage consistent use, particularly among students and young adults who only need a straightforward way to track income and expenses.

The Personal Budget Tracker addresses this issue by offering a lightweight, user-friendly solution that encourages regular financial monitoring and supports better financial awareness.

---

## Target Users
- University and college students  
- Young adults managing monthly income and expenses  
- Individuals seeking a simple personal budgeting tool  

The application is intended for users with no specialized financial or technical background and is accessible through a standard web browser.

---

## Core Features

### Must Have
- User registration, login, and logout
- Secure, user-specific data storage
- Add, edit, and delete income transactions
- Add, edit, and delete expense transactions
- Categorize transactions (e.g., food, rent, transportation)
- View a list of all personal transactions
- Display monthly income and expense totals
- Persistent data storage using a relational database

### Should Have
- Filter transactions by month
- Category-based expense summaries
- Clear validation and error messages
- Improved UI organization and navigation

### Could Have
- Custom user-defined categories
- Budget limits per category
- Simple visual summaries (charts)
- Export transactions to CSV
- Optional UI preferences (e.g., dark mode)

---

## Data Model
The application is built around a small set of core entities:
- **User** – stores account and profile information
- **Transactions** – stores income and expense transactions
- **Category** – organizes transactions by type

Relationships are designed so that users can only view and manage their own data.

---

## Wireframes
UI wireframes and the primary user workflow were designed using Figma.

🔗 **Figma Prototype:**  
https://www.figma.com/make/sfVwTgAGDP5De7AzwSF3uU/Dashboard-Home-Page-Design

---

## Project Management
- Version control and collaboration handled through GitHub
- Task tracking managed using a Kanban project board
- Planning decisions and meetings documented in the activity log

---

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js with Express
- **Database:** MySQL (via XAMPP)

---

## Prerequisites
Make sure you have the following installed before starting:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [XAMPP](https://www.apachefriends.org/) (for running MySQL locally)

---

## Running the Application Locally

Follow these steps in order.

### Step 1 — Start XAMPP

1. Open the **XAMPP Control Panel**
2. Click **Start** next to **Apache**
3. Click **Start** next to **MySQL**
4. Both should turn green and show "Running"

> **Troubleshooting:** If MySQL fails to start with a port 3306 error, it means another MySQL service is already running on your computer. Open **Windows Services** (press Windows + R, type `services.msc`), find **MySQL** or **MySQL80** or **MySQL81**, right-click it and click **Stop**. Then try starting MySQL in XAMPP again.

---

### Step 2 — Set Up the Database

1. In XAMPP Control Panel, click **Admin** next to MySQL — this opens **phpMyAdmin** in your browser
2. In phpMyAdmin, click **New** in the left sidebar
3. Name the database `budget_tracker` and click **Create**

> **Note:** Be careful with spelling — `budget_tracker` not `budger_tracker`. You can verify by clicking on the database name in the left sidebar and checking the URL bar shows `budget_tracker`.

4. Click on `budget_tracker` in the left sidebar
5. Click the **SQL** tab at the top
6. Paste the entire contents of `database/schema.sql` and click **Go**
7. Once the tables are created, run this query to create a default test user:

```sql
INSERT INTO users (email, password_hash, full_name) VALUES ('test@test.com', 'placeholder', 'John');
```

> **Troubleshooting:** If you see an error saying `Unknown column 'full_name'`, run this first to add the column, then re-run the insert above:
> ```sql
> ALTER TABLE users ADD COLUMN full_name VARCHAR(100) NOT NULL DEFAULT 'User' AFTER email;
> ```

---

### Step 3 — Configure the Backend

1. Navigate to the `backend` folder in your project
2. Create a file called `.env` with the following contents:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=budget_tracker
DB_PORT=3306
PORT=3000
```

> **Note:** XAMPP's default MySQL password is blank, so leave `DB_PASSWORD=` empty. If you set a custom MySQL password in XAMPP, enter it here.

3. Open a terminal, navigate to the `backend` folder, and install dependencies:

```bash
cd backend
npm install
```

---

### Step 4 — Start the Backend Server

In the terminal (inside the `backend` folder) run:

```bash
node server.js
```

You should see:
```
Server listening on port 3000
```

> **Keep this terminal open while using the application.** If you close it the backend stops and the app will show "Could not connect to server."

> **Troubleshooting:** If you see a `ReferenceError` when starting the server, one of the controller or route files may have gotten corrupted. Make sure `controllers/authController.js` and `routes/authRoutes.js` start with proper JavaScript code (`const`, `require`, etc.) and not plain text like `authController.js` or `routes/authRoutes.js` on the first line.

---

### Step 5 — Open the Frontend

1. Navigate to the `frontend` folder
2. Open `index.html` in your browser using Live Server in VS Code or by opening it directly

The application should now be fully running with data persisting to the database.

> **Troubleshooting:** If the page shows "Loading..." and never loads transactions, check that:
> - Your backend server is running (`node server.js` in terminal)
> - XAMPP MySQL is still green/running
> - The database name in your `.env` file matches exactly what's in phpMyAdmin (`budget_tracker`)

---

## Project Structure

```
personal-expense-tracker/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── categoryController.js
│   │   └── transactionController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── categoryRoutes.js
│   │   └── transactionRoutes.js
│   ├── db.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── index.html
│   ├── add.html
│   ├── edit.html
│   ├── reports.html
│   ├── login.html
│   └── register.html
├── database/
│   └── schema.sql
└── README.md
```

---

## Contributions for Milestone 02

- Implemented frontend structure and dashboard layout
- Worked on UI updates and transaction display improvements
- Designed and finalized the relational database schema
- Constructed ER diagram and verified SQL constraints
- Updated project documentation and activity logs
- Revised README and ensured Milestone 02 submission requirements were met
- Assisted in reviewing frontend-backend structure

---

## Status

As of **Milestone 03** this project has full end-to-end implementation:

- Full CRUD functionality for income and expense transactions
- Persistent data storage using MySQL via XAMPP
- Dynamic dashboard with real-time KPI cards and pie chart
- Filter transactions by All / Income / Expenses
- Edit transaction page pre-fills form from database
- Reports page with CSV export (All / Income / Expenses)
- User registration and login with password hashing (bcrypt)
- Form validation using regular expressions on both client and server side
- Session-based authentication using express-session
