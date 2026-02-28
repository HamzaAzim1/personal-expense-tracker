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

## Data Model (Planned)
The application is built around a small set of core entities:
- **User** – stores account and profile information
- **Expense** – stores income and expense transactions
- **Category** – organizes transactions by type
- **Budget (optional)** – supports future budgeting features

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

## Planned Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js with Express  
- **Database:** Relational database (e.g., PostgreSQL or MySQL)

---

## Running Application Locally

**Frontend**: 
- Open project folder
- Navigate to frontend directory
- Run login.html in browser

**Backend**:
- Open terminal
- Navigate to backend folder
- Install dependencies
- Start server
- the backend sever should then run
  
---

## Contributions for Milestone 02

- Implemented frontend structure and dashboard layout.
- Worked on UI updates and transaction display improvements.
- Designed and finalized the relational database schema.
- Constructed ER diagram and verified SQL constraints.
- Updated project documentation and activity logs.
- Revised README and ensured Milestone 02 submission requirements were met.
- Assisted in reviewing frontend-backend structure

---

## Status
This repository currently contains planning and design artifacts for **Milestone 01**.  
Implementation will begin in subsequent milestones.

As of **Milestone 02** this project has moved on from planning to active implementation:

- Frontend implementation (login register, dashboard, add/edit transaction)
- Backend environment has set up using Node.js and Express
- Relational database schema has been finalized with primary keys, foreign keys, and constraints.
- ER diagram has been created to reflect the relational structure.
