

# 🧩Lendsqr Front End User Management Dashboard — React TypeScript + SCSS
Live link: https://olubukola-martins-lendsqr-fe-test.vercel.app/

## 📄 Project Overview

This project is a user-friendly, responsive **User Management Dashboard** built with **React**, **TypeScript**, **SCSS (BEM methodology)**, and a **modular architecture**. It simulates admin-level functionality where users can view detailed user information, interact with dynamic dropdowns, and manage user data.

It was created as part of a frontend assessment to demonstrate code structure, maintainability, responsiveness, and UX quality.

---

## ✅ Features Implemented

### 1. **Modular and Scalable Architecture**

* Pages are separated into components using domain-first design.
* Each component is **self-contained** with its own SCSS module using **BEM naming**.
* Utility functions, constants, and API handlers are cleanly abstracted for reuse.

### 2. **User Table**

* Displays paginated user data with mock data fetched from a **Mockaroo API** .
* Filtration is handled on the front end for the purpose of this test, due to the API limitations.
* Columns include: `organization`, `username`, `email`, `dateJoined`, `phone`, and `status`.
* An action dropdown per row allows users to view details.

### 3. **User Details Page**

* Accessed via `navigate` with `state` passed.
* Dynamically renders all user information.
* Fully mobile responsive and styled with inline + SCSS for clarity and separation of concerns.
* Shadow and hover effects for buttons implemented for modern UI feel.

### 4. **Error Handling**

* Added **Error Boundary** for runtime errors.
* Implemented a `NotFound.tsx` component for undefined routes using `react-router-dom`.

### 5. **Routing & Navigation**

* Implemented nested and dynamic routing using React Router v6.
* State is passed seamlessly via `useNavigate` and accessed via `useLocation`.

---

## 🧪 Tech Stack

| Layer            | Technology                        |
| ---------------- | --------------------------------- |
| Framework        | React (v18) + Vite                       |
| Language         | TypeScript                        |
| Styling          | SCSS (with BEM)                   |
| State Management | React Hooks                       |
| Mock API         | [Mockaroo](https://mockaroo.com/) |
| Routing          | React Router v6                   |

---

## 🧠 Architectural Decisions

### ✅ **Mock Data via Mockaroo**

Mockaroo was chosen for generating randomized data structures due to the absence of a real API. While limited (e.g., non-persistent state, fixed field types), it allowed realistic simulation of server-side pagination and query filtering.

### ✅ **Modularization**

Each feature is developed as a reusable, maintainable module:

* Reusability: Components like `Button`, `TableHeader`, and `UserCardSection` are easily transferrable.
* Testability: Isolated logic helps in future testing and refactors.

### ✅ **Styling with SCSS & BEM**

BEM was used for naming conventions to ensure predictable and scalable class structures.
SCSS Modules promote encapsulated styling and avoid global leakage.

### ✅ **Error Handling**

Handled both:

* Application errors with an **ErrorBoundary**.
* Route errors with a custom **NotFound** component.

---

## 🧪 How to Run Locally

```bash
# Clone repo
https://github.com/Olubukola-Martins/lendsqr-fe-test.git

# Install dependencies
cd lendsqr-fe-test
npm install

# Run dev server
npm run dev
```

---

## 🛠 Folder Structure

```
src/
│
├── components/
│   ├── Button/
│   ├── Table/
│   └── UserDetails/
│
├── pages/
│   ├── Dashboard/
│   ├── Users/
│   └── NotFound.tsx
│
├── styles/
│   └── globals.scss
│
├── utils/
│   └── formatters.ts
│
├── routes/
│   └── AppRoutes.tsx
│
└── main.tsx
```

---

## 🌐 Responsiveness & UX Decisions

* Designed with **mobile-first** in mind.
* Minimal, intuitive layout with spacing and visibility rules across breakpoints.
* Used **CSS box-shadow and hover effects** for visual hierarchy and interactivity.

---

## 🔥 Final Notes

* The code is fully typed with TypeScript for robustness and IntelliSense.
* SCSS allows scalability and theme control if extended.

---

## 🧙‍♂️ Author

**Olubukola Martins**
Frontend Engineer | React | TypeScript | SCSS


